import Navbar from "../../components/NavBar/NavBar";
import HeroLogo from "../../assets/driver.png";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line no-empty-pattern
const LandingPage = () => {
  return (
    <main
      className="bg-main-background bg-cover flex text-white flex-col h-screen p-10
    subpixel-antialiased font-mono
    "
    >
      <Navbar />

      <section className="flex mt-[30%]">
        <div className="hero-section flex flex-1">
          <div className="left-hero">
            <p className="text-5xl mb-3 font-bold">
              {" "}
              Federal University Lokoja Shuttle
            </p>
            <p className="text-1xl text-gray-300 w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              cupiditate vitae, adipisci voluptas perspiciatis fugit, magni
              facilis in exercitationem id soluta ea illum quo quisquam. Velit
              id voluptas veniam aperiam.
            </p>

            <div className="flex gap-8 mt-6">
              <NavLink to={"register-driver"}>
                <button className="min-w-4 bg-button-blue px-10 py-2 rounded-md">
                  Driver
                </button>
              </NavLink>

              <NavLink to={"register-client"}>
                <button className="min-w-4 bg-button-blue px-10 py-2 rounded-md">
                  Passanger
                </button>
              </NavLink>
            </div>
          </div>
          <div className="right-hero flex-1 hidden">right hero</div>
        </div>

        <div className="text-white flex-1 gap-8 flex justify-center items-center">
          <img
            className="w-[500px] h-[500px]"
            src={HeroLogo}
            alt="image description"
          />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
