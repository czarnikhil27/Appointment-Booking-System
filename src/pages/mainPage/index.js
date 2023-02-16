import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/courseCard";
import HeaderBar from "../../components/header";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./styles.css";
import { useSearchParams } from "react-router-dom";
import ImageForm from "../../components/image";
const MainPage = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const [courseId,setCourseId] = useState(searchParams.get('course'))
  const location = useLocation();
  const [course, setCourse] = useState([]);
  const [token, setToken] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if(params.length>0){
      console.log("reaced")
      navigate(`/course/${params}`)
    }
    const config = {
      headers: { Authorization: `Bearer ${Cookies.get("Token")}` },
    };
    axios
      .get(
        "http://localhost:8080/practice-course/v1/course?page=1&limit=4",
        config
      )
      .then((response) => {
        setCourse(response.data); 
        console.log(course);
      });
  }, []);
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="container">
     {/* <HeaderBar />  */}
       <CourseCard course={course} setCourse={setCourse} />  
      // {/* <ImageForm></ImageForm> */}
    </div>
  );
};
export default MainPage;
