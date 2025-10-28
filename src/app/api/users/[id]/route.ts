import { NextRequest, NextResponse } from "next/server";
import { userService } from "@/services/user-service";
import { ApiResponse } from "@/types/api";

// GET /api/users/[id] - Get single user
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);
    const user = await userService.getUserById(userId);

    if (!user) {
      const response: ApiResponse = {
        success: false,
        error: "User not found",
      };
      return NextResponse.json(response, { status: 404 });
    }

    const response: ApiResponse = {
      success: true,
      data: { user },
    };

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(`GET /api/users/${params.id} error:`, error);

    const response: ApiResponse = {
      success: false,
      error: error.message || "Failed to fetch user",
    };

    return NextResponse.json(response, { status: 500 });
  }
}

// PATCH /api/users/[id] - Update user
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);
    const body = await request.json();

    const user = await userService.updateUser(userId, body);

    const response: ApiResponse = {
      success: true,
      data: { user },
      message: "User updated successfully",
    };

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(`PATCH /api/users/${params.id} error:`, error);

    const response: ApiResponse = {
      success: false,
      error: error.message || "Failed to update user",
    };

    return NextResponse.json(response, { status: 400 });
  }
}

// DELETE /api/users/[id] - Delete user
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);
    await userService.deleteUser(userId);

    const response: ApiResponse = {
      success: true,
      message: "User deleted successfully",
    };

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(`DELETE /api/users/${params.id} error:`, error);

    const response: ApiResponse = {
      success: false,
      error: error.message || "Failed to delete user",
    };

    return NextResponse.json(response, { status: 400 });
  }
}