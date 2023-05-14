'use client'
import { useState, useEffect } from "react"
import Loading from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await fetch('/api/courses');
      const data = await courses.json();
      setCourses(data);
      setLoading(false);
    }

    fetchCourses();
  }, []);

  if(loading){
    return <Loading />
  }

  return (
    <div>
      <h2>Welcome to Git Repo Demo</h2>
      <CourseSearch getSearchResults={(results) => setCourses(results)}/>
      <Courses courses = {courses}></Courses>
    </div>
  )
}

export default HomePage