import { NextRequest, NextResponse } from "next/server";
import { userService } from "@/services/user-service";
import { ApiResponse } from "@/types/api";

// GET /api/users - List all users
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const result = await userService.getAllUsers(page, limit);

    const response: ApiResponse = {
      success: true,
      data: result,
    };

    return NextResponse.json(response);
  } catch (error: any) {
    console.error("GET /api/users error:", error);

    const response: ApiResponse = {
      success: false,
      error: error.message || "Failed to fetch users",
    };

    return NextResponse.json(response, { status: 500 });
  }
}