import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import Cookies from "js-cookie";
const HeaderBar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${Cookies.get("Token")}` },
    };
    axios
      .get(
        "http://localhost:8080/practice-course/v1/course/get-category",
        config
      )
      .then((response) => {
        setCategory(response.data);
      });
  }, []);
  return (
    <div className="header">
      <div className="items">Courses</div>
      <div className="items">
        <select name="category">
        {category.data?.map((val, index) => (
          <option value={val}>{val}</option>
        ))}
      </select>
      </div>
      <div className="items"></div>
      <div className="items"></div>
    </div>
  );
};
export default HeaderBar;
