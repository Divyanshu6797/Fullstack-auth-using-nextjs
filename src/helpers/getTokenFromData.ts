import { NextRequest } from "next/server";
const jwt = require("jsonwebtoken");

export const getTokenFromData = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedtoken: any = jwt.verify(token, process.env.TOKEN_SECRET!);

    return decodedtoken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
