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
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
        <style jsx>
          {`
            .btn {
              @apply font-bold py-2 px-4 rounded;
            }
            .btn-blue {
              @apply bg-blue-500 text-white;
            }
            .btn-blue:hover {
              @apply bg-blue-700;
            }
          `}
        </style>

        <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-rows-3 gap-4 py-5">
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

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const data = await res.json();

//   const ids = data.map((carddata) => carddata.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
