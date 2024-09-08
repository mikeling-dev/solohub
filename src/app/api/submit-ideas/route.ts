import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, ideaTitle, ideaDescription } = await request.json();
    const idea = await prisma.idea.create({
      data: {
        name,
        email,
        title: ideaTitle,
        description: ideaDescription,
      },
    });
    return NextResponse.json(
      { message: "Idea submitted successfully", idea },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting idea:", error);
    return NextResponse.json(
      { message: "Error submitting idea", error: (error as Error).message },
      { status: 500 }
    );
  }
}
