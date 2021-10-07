import Image from "next/image";

const SingleImage = ({ data }) => {
  return (
    <div>
      <>
        {/* <Link href="/carddata/[id]" as={`/carddata/${carddata.id}`}> */}

        <div className="cursor-pointer hover:scale-105 transform transition duration-300 h-80 w-80">
          <div className="">
            <Image src={data} layout="fill" className="md:rounded-xl" />
            {/* <h2>{data}</h2> */}
          </div>
        </div>

        {/* <div className="">
            <h2>{data}</h2>
          </div> */}
        {/* </Link> */}
      </>
    </div>
  );
};

export default SingleImage;
