import SingleCard from "./SingleCard";

const BreedCards = ({ data }) => {
  return (
    <div>
      <>
        <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-rows-3 gap-4 py-5">
          {Object.keys(data).map((data) => {
            return <SingleCard data={data} />;
          })}
        </div>
      </>
    </div>
  );
};

export default BreedCards;
