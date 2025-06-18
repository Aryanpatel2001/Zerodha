/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invert in Everything</h1>
        <p>
          Online platform to invert in stocks,derivatives,mutual,funds,add more
        </p>
        <button
          className="p-2 btn  btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Hero;
