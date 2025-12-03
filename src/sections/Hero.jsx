import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import Heroexperience from "../components/Models/HeroModule/Heroexperience";
import { words } from "../constants";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {

  //animate the title
  useGSAP(() => {
    gsap.fromTo('.hero-text h1', 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.inOut'
      }
    )
  })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="./images/bg.png" alt="Hero Background" />
      </div>
      <div className="hero-layout">
        {/* left side Hero content in desktop and top part in mobile view */}
        <header className="flex flex-col justify-center w-screen md:w-full px-5 md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                {/* title animated with tailwindcss */}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.id}
                        className="flex items-center gap-1 md:gap-3 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="size-7 md:size-10 xl:size-12 p-1 md:p-2 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Delivered Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi👋, I'm Hojjat. A developer Who lives in the clouds
              <br />
              and
              <br />
              always wants to updated about anything relative to technology 😎
            </p>
            <Button
              className="w-60 h-12 md:w-80 md:h-16"
              id="button"
              text="See My Work"
            />
          </div>
        </header>
        {/* Right side in desktop and bottom side in mobile view (3d modules) */}
        <figure>
          <div className="hero-3d-layout ">
            <Heroexperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />

    </section>
  );
};

export default Hero;
