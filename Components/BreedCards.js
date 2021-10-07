import SingleCard from "./SingleCard";

const BreedCards = ({ data }) => {
  return (
    <>
      <div className="grids py-5 ">
        {Object.keys(data).map((data) => {
          return <SingleCard data={data} />;
        })}
      </div>
    </>
  );
};

export default BreedCards;
