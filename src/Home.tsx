import React, { lazy, Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

//lazy load each section
const Banner = lazy(() => import("./components/banner"));
const About = lazy(() => import("./components/about"));
const Program = lazy(() => import("./components/program"));
const SummerProgram = lazy(() => import("./components/summer"));

import "./styles/style.css";

export const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Banner />
        <About />
        <Program />
        <SummerProgram />
      </Suspense>
    </>
  );
};

export default Home;
