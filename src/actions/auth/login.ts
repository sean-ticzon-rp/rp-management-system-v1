"use server";

import { cookies } from "next/headers";

interface LoginResult {
  success: boolean;
  error?: string;
  user?: {
    id: number;
    email: string;
    name: string;
  };
}

export async function loginAction(
  email: string,
  password: string
): Promise<LoginResult> {
  try {
    // Validation
    if (!email || !password) {
      return {
        success: false,
        error: "Email and password are required",
      };
    }

    // TODO: Check database for user (we'll add Prisma later)
    // Mock authentication for now
    if (email === "test@example.com" && password === "password") {
      // Set session cookie
      const cookieStore = await cookies();
      cookieStore.set("session", "mock-session-token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return {
        success: true,
        user: {
          id: 1,
          email: email,
          name: "Test User",
        },
      };
    }

    return {
      success: false,
      error: "Invalid email or password",
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: "Something went wrong",
    };
  }
}