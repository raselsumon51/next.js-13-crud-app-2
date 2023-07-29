import connectDB from '../../../db'
import Topic from '../../../models/Topic';
import { NextResponse } from 'next/server';


export async function GET() {
    await connectDB();
    const topics = await Topic.find();
    // console.log("test")
    // console.log(topics)
    return NextResponse.json({topics})
}
export async function POST(request) {
    await connectDB();
    const { title, description } = await request.json();
    console.log(title)
    await Topic.create({ title, description })
    return NextResponse.json({ message: "Topic created" }, { status: 201 })
}

export async function DELETE(request) {
    // http://localhost:3000/api/topics?id=64b2b92f1c294c0d389b69ab
    await connectDB();
    const id = request.nextUrl.searchParams.get("id");
    console.log(id);
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic Deleted" }, { status: 200 })
}

