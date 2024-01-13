import React, { lazy, Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

//lazy load each section

const Footer = lazy(() => import("./components/footer"));

import "./styles/style.css";

export const History: React.FC = () => {
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Footer />
      </Suspense>
    </>
  );
};

export default History;
