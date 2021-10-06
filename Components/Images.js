import SingleImage from "./SingleImage";

const Images = ({ data }) => {
  return (
    <div>
      <>
        <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-rows-3 gap-4 py-5">
          {data.map((data) => {
            return <SingleImage data={data} />;
          })}
        </div>
      </>
    </div>
  );
};

export default Images;
