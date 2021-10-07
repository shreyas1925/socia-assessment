import Head from "next/head";
import BreedCards from "../Components/BreedCards";

import Link from "next/link";
import Banner from "../Components/Banner";
export default function Home({ data }) {
  console.log(data.message);
  return (
    <>
      <Banner />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <BreedCards data={data.message} />

        {/* < className="">
        <Link href="/random">Hoi</Link>
      </

        {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  // const res = await fetch("https://dog.ceo/api/breed/shihtzu/images/random/10");
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
