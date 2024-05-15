import Image from "next/image";
import Container from "../Containers/container";
import Button from "../Button";
import Instagram from "../Media/insta.png";
import LinkedIn from "../Media/linked.png";
import Twitter from "../Media/twitter.png";
import classes from "./index.module.css";

export default function Footer() {
  return (
    <Container
      width="100%"
      color="#010E11"
      flex="column"
      padding="2rem 1rem"
      align="center"
      justify="center"
    >
      <Container width="100%" margin="0 0 1rem 0" justify="center">
        <input
          placeholder="Enter your email address"
          className={classes.input}
        />
        <Button
          text="Subscribe"
          back="#14605A"
          width="fit-content"
          height={"2rem"}
          borderRadius={"2px"}
          font="inherit"
          padding={"0 0.9rem"}
        />
      </Container>
      <Container>
        <Image
          src={Twitter}
          alt="twitter-logo"
          width={25}
          height={25}
          className={classes.social}
        />
        <Image
          src={Instagram}
          alt="insta-logo"
          width={25}
          height={25}
          className={classes.social}
        />
        <Image
          src={LinkedIn}
          alt="linkedIn-logo"
          width={25}
          height={25}
          className={classes.social}
        />
      </Container>
      <small style={{ color: "white" }}>
        ESNONSO 2024. All rights reserved
      </small>
    </Container>
  );
}
