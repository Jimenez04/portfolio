import {React, useState, useEffect } from "react";
import Pictures from "./pictures";
import { useLocation } from "react-router-dom";

export default function Photography() {
  const [img_wide, setImg_wide] = useState(Pictures[getnumber(20)+"w"]);
  const [img_long, setImg_Long] = useState(Pictures[getnumber(11)]);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      const interval1 = setInterval(() => {
        setImg_wide(Pictures[getnumber(20)+"w"]);
      }, 12000);
      const interval2 = setInterval(() => {
        setImg_Long(Pictures[getnumber(11)]);
      }, 15000);
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }
  }, []);

  function getnumber(e) {
    return Math.floor(Math.random() * e) + 1;
  }

  return (
    <section id="photography">
      <div className="photography_container max_resolution">
        <h2>Photography</h2>
        <h3>Some photos</h3>
        <div className="photography_container_photos flex">
          <div id="container_image_wide">
            <img src={img_wide} />
          </div>
          <div id="container_image_long">
            <img src={img_long} />
          </div>
        </div>
      </div>
    </section>
  );
}
