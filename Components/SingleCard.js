import Link from "next/link";

const SingleCard = ({ data }) => {
  console.log("Simgle ", data);

  return (
    <div className="">
      <>
        <Link href="/breeds/[breed]" as={`/breeds/${data}`}>
          <div className="flex-1 cursor-pointer hover:scale-105 transform transition duration-300 bg-white border-solid h-80 w-80 hover:shadow-lg shadow-md ">
            <div className="h-full flex justify-center items-center">
              {/* <Image src={img} layout="fill" className="md:rounded-xl" /> */}
              <h2 className="capitalize font-semibold leading-8 text-lg">
                {data}
              </h2>
            </div>
          </div>

          {/* <div className="">
          <h2>{data}</h2>
        </div> */}
        </Link>
      </>
    </div>
  );
};

export default SingleCard;
