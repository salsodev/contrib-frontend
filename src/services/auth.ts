import {
  UserForgotPasswordSchemaType,
  UserLoginSchemaType,
  UserResetPasswordSchemaType,
  UserSignupSchemaType,
} from "@/models/auth";
import { apiClient } from "./base";

export const createUser = async (payload: UserSignupSchemaType) => {
  const response = await apiClient.post("auth/signup", payload);

  return response.data;
};

export const loginUser = async (payload: UserLoginSchemaType) => {
  const response = await apiClient.post("auth/login", payload);

  return response.data;
};

export const logoutUser = async () => {
  const response = await apiClient.get("auth/logout");

  return response.data;
};

export const requestPasswordResetLink = async (
  payload: UserForgotPasswordSchemaType
) => {
  const response = await apiClient.post("auth/forgotPassword", payload);

  return response.data;
};

export const resetPassword = async (
  payload: UserResetPasswordSchemaType,
  resetToken: string
) => {
  const response = await apiClient.patch(
    `auth/resetPassword/${resetToken}`,
    payload
  );

  return response.data;
};

export const isSignedIn = async () => {
  const response = await apiClient.get("auth/isLoggedIn");

  return response.data;
};
