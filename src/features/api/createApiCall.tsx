import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

export const createApiCall = (
  actionName: string,
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  requiresToken: boolean
) => {
  return createAsyncThunk(
    actionName,
    async (payload: any, { rejectWithValue }) => {
      try {
        // Replace placeholders in the URL with payload values
        const resolvedUrl = url.replace(
          /:([a-zA-Z0-9_]+)/g,
          (_, key) => payload[key] || ""
        );
        console.log(resolvedUrl);
        const response = await axiosInstance.request({
          url: resolvedUrl,
          method,
          data: ["POST", "PUT"].includes(method) ? payload : undefined,
          params: method === "GET" ? payload : undefined,
          headers: requiresToken
            ? {}
            : { Authorization: "", "Content-Type": "multipart/form-data" },
        });

        if (response.data.success) {
          return {
            data: response.data.data,
            message: response.data.message,
          };
        } else {
          throw new Error(response.data.message || "Unknown error occurred");
        }
      } catch (error: any) {
        return rejectWithValue(error.message || "Request failed");
      }
    }
  );
};
