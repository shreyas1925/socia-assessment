import Link from "next/link";

const Buttons = () => {
  return (
    <div className="flex justify-between px-48 cursor-pointer">
      <Link href="/">
        <div className="mt-9 py-2 px-9 text-white border-2 bg-green-400 rounded-md hover:text-black hover:bg-white hover:border-green-400 ">
          Back
        </div>
      </Link>
      <Link href="/random">
        <div className=" mt-9 py-2 px-9 text-white border-2 bg-blue-400 rounded-md hover:text-black hover:bg-white hover:border-blue-400 ">
          Refresh
        </div>
      </Link>
    </div>
  );
};

export default Buttons;
