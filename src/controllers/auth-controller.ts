import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { authService } from "@/services/auth-service";
import { ApiResponse } from "@/types/api";

export class AuthController {
  async login(request: NextRequest) {
    try {
      const body = await request.json();
      const { email, password } = body;

      if (!email || !password) {
        const response: ApiResponse = {
          success: false,
          error: "Email and password are required",
        };
        return NextResponse.json(response, { status: 400 });
      }

      const user = await authService.login({ email, password });

      const cookieStore = await cookies();
      cookieStore.set("session", `user-${user.id}`, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      const response: ApiResponse = {
        success: true,
        data: { user },
        message: "Login successful",
      };

      return NextResponse.json(response);
    } catch (error: any) {
      console.error("AuthController.login error:", error);

      const response: ApiResponse = {
        success: false,
        error: error.message || "Invalid credentials",
      };

      return NextResponse.json(response, { status: 401 });
    }
  }

  async register(request: NextRequest) {
    try {
      const body = await request.json();
      const { email, password, name } = body;

      if (!email || !password) {
        const response: ApiResponse = {
          success: false,
          error: "Email and password are required",
        };
        return NextResponse.json(response, { status: 400 });
      }

      const user = await authService.register({ email, password, name });

      const response: ApiResponse = {
        success: true,
        data: { user },
        message: "Registration successful",
      };

      return NextResponse.json(response, { status: 201 });
    } catch (error: any) {
      console.error("AuthController.register error:", error);

      const response: ApiResponse = {
        success: false,
        error: error.message || "Registration failed",
      };

      return NextResponse.json(response, { status: 400 });
    }
  }

  async logout(request: NextRequest) {
    try {
      const cookieStore = await cookies();
      cookieStore.delete("session");

      const response: ApiResponse = {
        success: true,
        message: "Logout successful",
      };

      return NextResponse.json(response);
    } catch (error) {
      console.error("AuthController.logout error:", error);

      const response: ApiResponse = {
        success: false,
        error: "Logout failed",
      };

      return NextResponse.json(response, { status: 500 });
    }
  }
}

export const authController = new AuthController();