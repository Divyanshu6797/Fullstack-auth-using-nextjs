import { getTokenFromData } from "@/helpers/getTokenFromData";

import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getTokenFromData(request);
    const user = await User.findById(userId).select("-password"); // we dont want password

    return NextResponse.json({
      message: "user found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
