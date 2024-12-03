// import React from "react";

import { createRoot } from "react-dom/client";
import { App } from "./components/app/App";

// react router 7
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Shop } from "@/pages/shop";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = ReactDOM.createRoot(root);

container.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="about"
          element={
            <Suspense fallback={"loading..."}>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path="shop"
          element={
            <Suspense fallback={"loading..."}>
              <Shop />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
