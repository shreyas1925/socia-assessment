import SingleImage from "./SingleImage";

const Images = ({ data }) => {
  return (
    <div className="">
      <div className="grids py-5">
        {data.map((data) => {
          return <SingleImage data={data} />;
        })}
      </div>
    </div>
  );
};

export default Images;
