import Link from "next/link";
import Container from "../Containers/container";
import { H1Tags, PTags } from "../Text";
import classes from "./index.module.css";

export default function Homepage() {
  const stars = Array(5).fill(0);
  return (
    <div className={classes.outer}>
      <div className={classes.welcome}>
        <PTags fontSize="25px" margin="1rem">
          Welcome
        </PTags>

        <p className={classes.intro}>
          My name is Chinonso Nneli, based in Lagos Nigeria. I am an
          Enthusiastic Software Developer with high proficiency in JavaScript,
          JavaScript frameworks and JavaScript Libraries.
        </p>

        <Link href="/projects" className={classes.link}>
          &#8594; View My Projects
        </Link>
      </div>
      <div className={classes.skills}>
        <PTags fontSize="25px" margin="1rem">
          Coding Skills
        </PTags>
        {skills.map((item) => (
          <Container width="100%" key={item.id} paddin="1rem">
            <PTags width="70%">{item.name}</PTags>
            <PTags width="30%">
              {stars.map((s, i) => {
                if (i < item.rating)
                  return (
                    <span key={i} className={classes.filled}>
                      ★
                    </span>
                  );
                else return <span key={i}>☆</span>;
              })}
            </PTags>
          </Container>
        ))}
      </div>
    </div>
  );
}

const skills = [
  { id: 1, name: "Vanilla JavaScript", rating: 5 },
  { id: 2, name: "React", rating: 4 },
  { id: 3, name: "Nextjs", rating: 4 },
  { id: 4, name: "C#", rating: 3 },
  { id: 5, name: "Nodejs", rating: 3 },
  { id: 6, name: "MongoDb", rating: 4 },
  { id: 7, name: "SQL", rating: 3 },
];
