import Buttons from "../../../Components/Buttons";
import SingleImage from "../../../Components/SingleImage";
import Link from "next/link";
// import { useRouter } from "next/router";

const carddata = ({ data }) => {
  console.log(data.message);

  // const router = useRouter();
  // const { breed } = router.query;
  return (
    <div className="bg-gray-200">
      {/* <Buttons /> */}
      <div className="flex ml-20 cursor-pointer">
        <Link href="/">
          <div className="mt-9 py-2 px-9 text-white border-2 bg-green-400 rounded-md hover:text-black hover:bg-white hover:border-green-400 ">
            Back
          </div>
        </Link>
      </div>
      <div className=" flex flex-col items-center justify-center min-h-screen py-2 ">
        <div className="grids  py-5 cursor-pointer hover:scale-105 transform transition duration-300 ">
          {data.message.map((data) => {
            return <SingleImage data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default carddata;

export const getServerSideProps = async (context) => {
  console.log("con", context.params.breed);
  const res = await fetch(
    //   `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    `https://dog.ceo/api/breed/${context.params.breed}/images/random/10`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
