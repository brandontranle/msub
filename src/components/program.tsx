import React, { lazy, Suspense } from "react";
const renderLoader = () => <p>Loading</p>;
const InfoCard = lazy(() => import("./info-card"));

//import all the svgs via lazy-load
const OnlyNightSvgComponent = lazy(() => import("../assets/svgs/only-nights"));
const TutorialSvgComponent = lazy(() => import("../assets/svgs/tutorial"));
const WorkshopSvgComponent = lazy(() => import("../assets/svgs/workshops"));
const FieldTripSvgComponent = lazy(() => import("../assets/svgs/field-trips"));
const MentorsSvgComponent = lazy(() => import("../assets/svgs/mentors"));
const CollegePrepSvgComponent = lazy(
  () => import("../assets/svgs/college-prep")
);

interface InfoCardProps {
  desc: string;
  img: React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>;
  title: string;
}

const Program = () => {
  const infoCardsData: InfoCardProps[] = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: OnlyNightSvgComponent,
      title: "Grade-level Only Nights",
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: TutorialSvgComponent,
      title: "Daily Tutorial Services",
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: WorkshopSvgComponent,
      title: "Saturday Workshops",
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: FieldTripSvgComponent,
      title: "Field Trips",
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: MentorsSvgComponent,
      title: "Mentors",
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: CollegePrepSvgComponent,
      title: "College Application Prep",
    },
  ];

  return (
    <section id="program">
      <div id="section-title"> Academic Program </div>
      <div className="flex-row-container">
        {infoCardsData.map((card, index) => (
          <Suspense fallback={renderLoader()}>
            <InfoCard
              key={index} // Remember to provide a unique key when using map
              desc={card.desc}
              img={card.img}
              title={card.title}
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default Program;
