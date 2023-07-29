import connectDB from "../../../../db";
import Topic from "../../../../models/Topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();

  console.log(`id is ${id}`)
  const topic = await Topic.findById(id);
  // console.log('api')
  // console.log(topic[0].description);
  return NextResponse.json({ topic }, { status: 200 });
}
