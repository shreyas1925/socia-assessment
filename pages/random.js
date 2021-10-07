import Head from "next/head";
import Images from "../Components/Images";
import Buttons from "../Components/Buttons";

const random = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-gray-200">
      <Buttons />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Images data={data.message} />
      </div>
    </div>
  );
};

export default random;

export const getStaticProps = async () => {
  // const res = await fetch("https://dog.ceo/api/breed/shihtzu/images/random/10");
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
