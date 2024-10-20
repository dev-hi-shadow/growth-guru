import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    // headers.set("Access-Control-Allow-Origin", "*");
    // headers.set(
    //   "Access-Control-Allow-Methods",
    //   "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    // );
    // headers.set("Content-Type", "Application/JSON");
    return headers;
  },
});
