import Buttons from "../../../Components/Buttons";
import SingleImage from "../../../Components/SingleImage";

// import { useRouter } from "next/router";

const carddata = ({ data }) => {
  console.log(data.message);

  // const router = useRouter();
  // const { breed } = router.query;
  return (
    <div className="bg-gray-200">
      <Buttons />
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
