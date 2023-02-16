import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";
const imageUrl = ""; 
const CourseCard = (props) => {
  const { course, setCourse } = props;
  const navigate = useNavigate();
  async function handleCourseClick(e){
    console.log(e.currentTarget);
   
  }
  return (
    <div className="all-box">
      <video controls width="100%" autoPlay>
      <source data-src="http://localhost:8080/practice-course/v1/course/get-video" type="application/x-mpegURL"
      />
      Sorry, your browser doesn't support videos.
    </video>
      {course.data?.map((data, index) => (
        <div className="box" key={index} onClick={handleCourseClick}>
          <p>{data.photo}</p>
          <div className="cardPhoto">
            <img
              style={{ height: "10rem", width: "10rem" }}
              src={`http://localhost:8080/${data.photo}`}
              crossorigin="anonymous"
            />
          </div>
          <div className="cardInfo">
            <div className="cardHeaderText">{data.name}</div>
            <div className="authorText">{data.instructor}</div>
            <div className="rating">
              <Box className="ratingStar ">
                <Rating
                  name="read-only"
                  value={data.ratingsAverage}
                  readOnly
                  className="star"
                />
                <span className="ratingtotal">{data.ratingsQuantity}</span>
              </Box>
            </div>
            <div className="cardHeaderText price">{data.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CourseCard;
