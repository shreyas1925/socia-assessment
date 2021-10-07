import Link from "next/link";

const SingleCard = ({ data }) => {
  console.log("Simgle ", data);

  return (
    <div className="">
      <>
        <Link href="/breeds/[breed]" as={`/breeds/${data}`}>
          <div className="child cursor-pointer hover:scale-105 transform transition duration-300 ">
            <div className="h-full flex justify-center items-center">
              <h2 className="capitalize font-semibold leading-8 text-lg">
                {data}
              </h2>
            </div>
          </div>
        </Link>
      </>
    </div>
  );
};

export default SingleCard;
