import GroupImg from "../Images/Group 77.png";

function Hero() {
  return (
    <section classname="hero">
        <img src={GroupImg} alt="Group77" className="hero--photo"/>
        <h1 classname="hero--header">Online Experiences</h1>
        <p classname="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  );
}

export default Hero;
