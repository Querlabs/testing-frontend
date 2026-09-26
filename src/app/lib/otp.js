import crypto from "crypto";

export function generateOTP() {
  return crypto
    .randomInt(100000, 1000000)
    .toString();
}

export function getOTPExpiry() {
  return new Date(Date.now() + 10 * 60 * 1000);
}