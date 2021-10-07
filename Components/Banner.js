import Link from "next/link.";
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
          {/* <p>
            A initiative non profit project where users can contact us an add
            their art works or products which will be accessed by other users,
            payment gateways are included.
          </p> */}

          <Link href="/random">
            <button className="btn btn-outline-light home_btn">
              EXPLORE RANDOM
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
