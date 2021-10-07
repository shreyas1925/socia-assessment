import Link from "next/link";
// import headerStyles from "../styles/Banner.module.css";
const Banner = () => {
  return (
    <div>
      {/* <div className={headerStyles.image}> */}
      {/* <Image
          // src="https://links.papareact.com/0fm"
          src={bannerimg}
          layout="fill"
          objectFit="cover"
        /> */}
      {/* </div> */}
      <div className="home__intro flex justify-center items-center">
        <div className="home__info font-bold mt-16">
          <h1 className="text-white text-lg mb-7">
            Let's explore Dogs Breeds🐶
          </h1>

          <Link href="/random">
            <button className="bg-blue-500 rounded-2xl px-4 py-2 home_btn">
              EXPLORE RANDOM
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
