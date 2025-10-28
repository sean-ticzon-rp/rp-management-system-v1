import { cookies } from "next/headers";
import { userService } from "@/services/user-service";

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("session");

    if (!session) {
      return null;
    }

    // Extract user ID from session (format: "user-{id}")
    const userId = session.value.split("-")[1];
    
    if (!userId) {
      return null;
    }

    const user = await userService.getUserById(parseInt(userId));
    return user;
  } catch (error) {
    console.error("getCurrentUser error:", error);
    return null;
  }
}

export async function requireAuth() {
  const user = await getCurrentUser();
  
  if (!user) {
    throw new Error("Unauthorized");
  }
  
  return user;
}