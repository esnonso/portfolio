import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Container from "../Containers/container";
import Github from "../Media/github.png";
import CloseBtn from "../Media/close-btn.png";
import classes from "./header.module.css";
import Link from "next/link";
import Backdrop from "../Backdrop";

const links = [
  { caption: "Homepage", url: "/" },
  { caption: "Projects", url: "/projects" },
];

export default function Header(props) {
  const [sidebar, showSidebar] = useState(false);

  const showSidebarHandler = () => showSidebar(true);
  const hideSidebarHandler = () => showSidebar(false);

  return (
    <Container width="100%" flex="column" height="100%">
      <div className={classes.header}>
        <Container align="center" width="50%">
          <Link href="/" className={classes["header-link"]}>
            <h1>ESNONSO</h1>
          </Link>
        </Container>
        <Container align="center" width="50%" justify="flex-end">
          <a
            target="_blank"
            href="https://github.com/esnonso"
            rel="noopener noreferrer"
            style={{ marginTop: "0.5rem" }}
          >
            <Image
              src={Github}
              alt="close button icons8"
              width={35}
              height={35}
              className={classes.github}
            />
          </a>
          <button className={classes["hamburger"]} onClick={showSidebarHandler}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Container>
      </div>
      {/* <div className={classes.motto}>DEVELOPERS LIFE SAVING HOSPITAL</div> */}
      {sidebar && (
        <>
          <Backdrop />
          <div className={classes.sidebar}>
            <Container align="center" width="100%">
              <Container width="80%">
                {/* <Image src={Logo} alt="logo-cross" width={25} height={25} /> */}
              </Container>
              <Container width="20%" justify="flex-end">
                <div onClick={hideSidebarHandler}>
                  <Image
                    src={CloseBtn}
                    alt="close button icons8"
                    width={25}
                    height={25}
                  />
                </div>
              </Container>
            </Container>

            <ul>
              {links.map((l, i) => (
                <li key={l.url}>
                  <Link href={l.url} onClick={hideSidebarHandler}>
                    {l.caption.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <main>{props.children}</main>
    </Container>
  );
}
