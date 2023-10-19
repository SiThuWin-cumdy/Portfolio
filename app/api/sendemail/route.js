import { NextResponse } from "next/server";
import { getEmailTemplate, sendEmail } from "@/services/mailService";

export async function POST(request) {
  try {
    const { email, subject, message, name } = await request.json();
    //gettting html body
    const html = getEmailTemplate(name, email, message);
    //sending email
    await sendEmail({ subject, html });
    return NextResponse.json(
      {
        data: "successfully send",
      },
      { message: "Success" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: 500 },
      { message: "Failed to send mail" }
    );
  }
}
