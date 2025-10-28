import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function main() {
  console.log("🌱 Starting seed...");

  try {
    // Test database connection
    await prisma.$connect();
    console.log("✅ Database connected");

    // Delete existing test user if exists
    const existingUser = await prisma.user.findUnique({
      where: { email: "test@example.com" },
    });

    if (existingUser) {
      console.log("🗑️  Deleting existing test user...");
      await prisma.user.delete({
        where: { email: "test@example.com" },
      });
      console.log("✅ Existing user deleted");
    }

    // Hash password
    console.log("🔐 Hashing password...");
    const hashedPassword = await bcrypt.hash("password", 10);
    console.log("✅ Password hashed:", hashedPassword.substring(0, 20) + "...");

    // Create user
    console.log("👤 Creating user...");
    const user = await prisma.user.create({
      data: {
        email: "test@example.com",
        name: "Test User",
        password: hashedPassword,
      },
    });

    console.log("\n✅ Seeding completed successfully!");
    console.log("\n📋 User created:");
    console.log("  - ID:", user.id);
    console.log("  - Email:", user.email);
    console.log("  - Name:", user.name);
    console.log("\n🔑 Login credentials:");
    console.log("  - Email: test@example.com");
    console.log("  - Password: password");
  } catch (error: any) {
    console.error("\n❌ Seed error:", error.message);
    console.error("\n🔍 Full error:", error);
    
    if (error.code === "P1001") {
      console.error("\n⚠️  DATABASE CONNECTION ERROR!");
      console.error("Check your .env file and make sure DATABASE_URL is correct");
      console.error("Example: DATABASE_URL=\"mysql://user:password@localhost:3306/database_name\"");
    } else if (error.code === "P2002") {
      console.error("\n⚠️  Email already exists!");
    }
    
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log("\n👋 Database disconnected");
  }
}

main();