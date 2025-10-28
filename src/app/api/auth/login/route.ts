import { NextRequest } from "next/server";
import { authController } from "@/controllers/auth-controller";

export async function POST(request: NextRequest) {
  return authController.login(request);
}