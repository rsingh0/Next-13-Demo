import { NextResponse } from "next/server";
import courses from "../data.json";
import {v4 as uuidv4} from 'uuid';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  console.log(query)
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase())
  );
  return NextResponse.json(filteredCourses);
}


export async function POST(request) {
  const {title, description, link, level} = await request.json();
  courses.push({id: uuidv4(), title, description, link, level})
  return NextResponse.json(courses);
}