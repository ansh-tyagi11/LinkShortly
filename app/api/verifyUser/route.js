// app/api/verifyUser/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = await cookies();
    const session = cookieStore.get("otp_session");

    if (!session) return NextResponse.json({ user: null });

    return NextResponse.json({ user: session.value })
}