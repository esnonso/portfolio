import Head from "next/head";
import Projects from "@/Components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>EsNonso</title>
        <meta
          name="Software developer"
          content="Advertise and Grow your business online"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects />
    </>
  );
}
