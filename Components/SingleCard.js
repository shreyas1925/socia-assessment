import Link from "next/link";

const SingleCard = ({ data }) => {
  console.log("Simgle ", data);

  return (
    <div>
      <>
        <Link href="/breeds/[breed]" as={`/breeds/${data}`}>
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 bg-white border-4 border-gray-400 border-solid h-80 w-80">
            <div className="">
              {/* <Image src={img} layout="fill" className="md:rounded-xl" /> */}
              <h2>{data}</h2>
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
