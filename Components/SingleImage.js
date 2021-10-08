import Image from "next/image";

const SingleImage = ({ data }) => {
  return (
    <div>
      <>
        {/* <Link href="/carddata/[id]" as={`/carddata/${carddata.id}`}> */}

        <div className="cursor-pointer  hover:scale-105 transform transition duration-300 h-80 w-80">
          <div className="rounded-md">
            <Image src={data} layout="fill" className="md:rounded-xl" />
          </div>
        </div>
      </>
    </div>
  );
};

export default SingleImage;
