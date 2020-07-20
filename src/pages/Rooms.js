import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

import RoomsContainer from "../components/RoomsContainer";
import { Fragment } from "react";

export default function Rooms() {
  return (
    <Fragment>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </Fragment>
  );
}
