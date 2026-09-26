import { cookies } from "next/headers";

export async function setAuthCookie(token) {
  const cookieStore = await cookies();

  cookieStore.set("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
}