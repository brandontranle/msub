import React, { lazy, Suspense } from "react";
const SummerInfoCard = lazy(() => import("./summer-info-card"));
const PhotoCard = lazy(() => import("./photocard-v2"));

import Photo from "../assets/images/group-photo3.jpeg";

const renderLoader = () => <p>Loading</p>;

const HousingSvgComponent = lazy(() => import("../assets/svgs/housing"));
const AcademicsSvgComponent = lazy(() => import("../assets/svgs/academics"));
const StipendSvgComponent = lazy(() => import("../assets/svgs/stipend"));

interface InfoCardProps {
  desc: string;
  img: React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>;
  title: string;
}

const SummerProgram = () => {
  const infoCardsData: InfoCardProps[] = [
    {
      desc: "Students are housed in the dorms at UC Santa Cruz at no cost!",
      img: HousingSvgComponent,
      title: "Housing",
    },
    {
      desc: "Students are enrolled in a college-course schedule at MPC or UC Santa Cruz!",
      img: AcademicsSvgComponent,
      title: "Academics",
    },
    {
      desc: "Upon completion of the program, students are awarded $500.",
      img: StipendSvgComponent,
      title: "Stipend",
    },
  ];

  return (
    <section id="summer-program">
      <div id="section-title"> Summer Program</div>
      <div className="flex-row-container" id="info-showcase">
        <div className="flex-column-container">
          {infoCardsData.map((card, index) => (
            <Suspense fallback={renderLoader()}>
              <SummerInfoCard
                key={index} // Remember to provide a unique key when using map
                desc={card.desc}
                img={card.img}
                title={card.title}
              />
            </Suspense>
          ))}
        </div>
        <div className="flex-center">
          {" "}
          <PhotoCard img={Photo} />
        </div>
      </div>
    </section>
  );
};

export default SummerProgram;
