import bcrypt from "bcryptjs";
import { userService } from "./user-service";
import { LoginDto, RegisterDto } from "@/types/auth";

export class AuthService {
  async login(data: LoginDto) {
    const user = await userService.getUserByEmail(data.email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isValidPassword = await bcrypt.compare(data.password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid credentials");
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async register(data: RegisterDto) {
    const existingUser = await userService.getUserByEmail(data.email);

    if (existingUser) {
      throw new Error("Email already exists");
    }

    const user = await userService.createUser(data);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}

export const authService = new AuthService();