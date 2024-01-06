import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

var url_web_long = "src/assets/img/photography/long/";
var url_web_wide = "src/assets/img/photography/Wide/";

export default function Photography() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") { 
      auto_wide();
      auto_long();
      const interval1 = setInterval(() => {
        auto_wide();
      }, 12000);
      const interval2 =setInterval(() => {
        auto_long();
      }, 15000);
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }
  }, []);
  return (
    <section id="photography">
      <div className="photography_container max_resolution">
        <h2>Photography</h2>
        <h3>Some photos</h3>
        <div className="photography_container_photos flex">
          <div id="container_image_wide">
            <img src="" alt="" />
          </div>
          <div id="container_image_long">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}



function auto_wide() {
    rellenar("container_image_wide", url_web_wide + getnumber(20) + ".webp"),
            document.getElementById("container_image_wide").classList.remove("show_off"), rellenar("container_image_wide", url_web_wide + getnumber(20) + ".webp");
}
function auto_long() {
    rellenar("container_image_long", url_web_long + getnumber(11) + ".webp"),
      document.getElementById("container_image_long").classList.remove("show_off"), rellenar("container_image_long", url_web_long + getnumber(11) + ".webp");
}
function getnumber(e) {
    return Math.floor(Math.random() * e) + 1;
}
async function rellenar(e, n) {
    var o = document.getElementById(e);
    var r = document.createElement("img");
    o.classList.add("show_off");
    (r.src = n), r.classList.add("lazyload"), (o.innerHTML = null), o.append(r);
}

