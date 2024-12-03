import { useState } from "react";
import * as classes from "./App.module.scss";
import { Link, Outlet } from "react-router";
import About from "@/pages/about/About";
import imgPng from "@/assets/Group.png";
import imgJpg from "@/assets/hero_endframe__ov6ewwmbhiqq_large.jpg";
import imgWebp from "@/assets/hero.webp";
import SvgImage from "@/assets/image.svg";

function TODO(a: number) {
  console.log("todo function");
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  // TODO("12345888");

  // if (__PLATFORM__ === "desktop") {
  //   return <div>is desktop</div>;
  // }
  // if (__PLATFORM__ === "mobile") {
  //   return <div>is mobile</div>;
  // }

  return (
    <div>
      <h2>platforma:{__PLATFORM__}</h2>
      <div style={{ backgroundColor: "black" }}>
        <img src={imgPng} alt="imgPng image" />
        <img src={imgJpg} alt="imgJpg image" />
        <img src={imgWebp} alt="imgWebp image" />
        <SvgImage className={classes.svgIconColor} width={505} height={505} />
      </div>
      <Link to={"/about"}>About Page</Link> <br />
      <Link to={"/shop"}>Shop Page</Link>
      <h1 className={classes.value}>this is count:{count}</h1>
      <button className={classes.button} onClick={increment}>
        {" "}
        Increment
      </button>
      {/* <Outlet /> */}
      <About />
    </div>
  );
};
