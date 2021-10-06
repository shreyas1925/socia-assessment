import Head from "next/head";
import Images from "../Components/Images";

const random = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Images data={data.message} />
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
