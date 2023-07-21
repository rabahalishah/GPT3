import React from "react";

import { Blog, WhatGPT3 } from "./containers";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/HomePage";
import OpenAI from "./pages/OpenAI";
import CaseStudies from "./pages/CaseStudies.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> }, 
      { path: "/wgpt3", element: <WhatGPT3 /> }, 
      { path: "/openAI", element: <OpenAI /> },
      { path: "/caseStudies", element: <CaseStudies /> },
      { path: "/library", element: <Blog /> }, 
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
