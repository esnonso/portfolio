import Head from "next/head";
import Homepage from "@/Components/Homepage";

export default function Home() {
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
      <Homepage />
    </>
  );
}
