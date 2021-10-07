import SingleCard from "./SingleCard";

const BreedCards = ({ data }) => {
  return (
    <div className="main mt-5">
      <div className="parent">
        {Object.keys(data).map((data) => {
          return <SingleCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default BreedCards;
