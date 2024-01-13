import CoordinatorPhoto2 from "../assets/images/coordinator-photo-2.jpeg";
import CoordinatorPhoto1 from "../assets/images/coordinator-photo-1.jpeg";
import Logo from "../assets/images/MathScienceUpwardBoundLogo.png";

const coordinators = [
  {
    name: "Jasmine Do (she/her)",
    position: "Coordinator/Counselor",
    email: "jdo@mpc.edu",
    phone: "(831) 233-6082",
    photo: CoordinatorPhoto1,
  },
  {
    name: "Joshualyn Guray (she/her)",
    position: "Services Coordinator, TRIO",
    email: "jguray@mpc.edu",
    phone: "(831) 646-4246",
    photo: CoordinatorPhoto2,
  },
];

const Team = () => {
  return (
    <section id="team">
      <div id="section-title" className="section-title">
        {" "}
        Meet the Team!{" "}
      </div>
      <div className="background-overlay">
        <img src={Logo} loading="lazy" className="logo" />
      </div>
      <div className="flex-row-container">
        {coordinators.map((coordinator) => (
          <div className="flex-column">
            <img
              src={coordinator.photo}
              alt="coordinator-photo"
              id="coordinator-photo"
              loading="lazy"
            />
            <h3 id="name"> {coordinator.name} </h3>
            <h3 id="position"> {coordinator.position} </h3>
            <h3> {coordinator.email} </h3>
            <h3> {coordinator.phone} </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
