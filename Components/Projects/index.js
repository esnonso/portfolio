import { useState } from "react";
import Image from "next/image";
import Link from "../Media/link.png";
import classes from "./index.module.css";
import { PTags } from "../Text";
import Container from "../Containers/container";

export default function Projects() {
  const [hospital, showHospital] = useState(false);
  const [golden, showGolden] = useState(false);
  const [fresh, showFresh] = useState(false);
  const [country, showCountry] = useState(false);

  const showHospitalHandler = () => showHospital(true);
  const hideHospitalHandler = () => showHospital(false);
  const showGoldenHandler = () => showGolden(true);
  const hideGoldenHandler = () => showGolden(false);
  const showFreshHandler = () => showFresh(true);
  const hideFreshHandler = () => showFresh(false);
  const showCountryHandler = () => showCountry(true);
  const hideCountryHandler = () => showCountry(false);

  return (
    <div className={classes.outer}>
      <div className={classes.projects}>
        <PTags fontSize="25px" margin="1rem 0">
          My Projects
        </PTags>

        <a
          target="_blank"
          href="https://devpost-eight.vercel.app/"
          rel="noopener noreferrer"
          className={classes.link}
          onMouseEnter={showHospitalHandler}
          onMouseLeave={hideHospitalHandler}
        >
          &#8594; Hospital Solution{" "}
          <Image
            src={Link}
            alt="external link"
            width={25}
            height={25}
            className={classes.image}
          />
        </a>

        <a
          target="_blank"
          href="https://golden-agro.vercel.app/"
          rel="noopener noreferrer"
          className={classes.link}
          onMouseEnter={showGoldenHandler}
          onMouseLeave={hideGoldenHandler}
        >
          &#8594; Golden Agro
          <Image
            src={Link}
            alt="external link"
            width={25}
            height={25}
            className={classes.image}
          />
        </a>
        <a
          target="_blank"
          href="https://laundry-app-gamma.vercel.app/"
          rel="noopener noreferrer"
          className={classes.link}
          onMouseEnter={showFreshHandler}
          onMouseLeave={hideFreshHandler}
        >
          &#8594; FreshFold
          <Image
            src={Link}
            alt="external link"
            width={25}
            height={25}
            className={classes.image}
          />
        </a>
        <a
          target="_blank"
          href="https://www.countrymovers.org/"
          rel="noopener noreferrer"
          className={classes.link}
          onMouseEnter={showCountryHandler}
          onMouseLeave={hideCountryHandler}
        >
          &#8594; Country Movers
          <Image
            src={Link}
            alt="external link"
            width={25}
            height={25}
            className={classes.image}
          />
        </a>
      </div>

      {hospital && (
        <div className={classes.hospital}>
          <h1 style={{ margin: "0.5rem" }}>Hospital Solution</h1>
          <p style={{ margin: 0, textAlign: "center" }}>
            A hospital management application built with React and Nextjs
          </p>
        </div>
      )}
      {golden && (
        <div className={classes.golden}>
          <h1 style={{ margin: "0.5rem" }}>Golden Agro</h1>
          <p style={{ margin: 0, textAlign: "center" }}>
            A portfolio and ecommerce site for a rice selling company built with
            React Components and Nextjs
          </p>
        </div>
      )}
      {fresh && (
        <div className={classes.fresh}>
          <h1 style={{ margin: "0.5rem" }}>FreshFold</h1>
          <p style={{ margin: 0, textAlign: "center" }}>
            A web app for a laundry for client to request laundry services built
            with React Components and Nextjs.
          </p>
        </div>
      )}
      {country && (
        <div className={classes.country}>
          <h1 style={{ margin: "0.5rem" }}>Country Movers</h1>
          <p style={{ margin: 0, textAlign: "center" }}>
            A web app for a logistics and movement company built with React
            Components and Nextjs
          </p>
        </div>
      )}
    </div>
  );
}
