import { lazy } from "react";
const PhotoCard = lazy(() => import("./photocard"));
import photo from "../assets/images/group-photo3.jpeg";

const About = () => {
  return (
    <section id="about">
      <h2 id="section-title"> ABOUT US</h2>
      <div className="flex-row-container">
        <div className="section-content-photo">
          <PhotoCard img={photo} />
        </div>
        <div className="section-content">
          <div>
            Math Science Upward Bound (MSUB) is a TRIO federally-funded grant
            program that offers an intensive summer academy in marine biology
            for TRIO eligible students from targeted schools in California.{" "}
            <br />
            <br />
            These high school students participate on the University of
            California, Santa Cruz campus for six weeks and follow a rigorous
            schedule of classes in marine biology, mathematics, communications,
            foreign language, and computer skills.
            <br />
            <br />
            The goal of the program is to increase the number of income
            eligible, first-generation college students entering into math and
            science majors and careers.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
