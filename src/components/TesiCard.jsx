import ReactStars from "react-rating-stars-component";
const TesiCard = ({ name, body, img, equipment, date, rating }) => {
  return (
    <div className="mx-2 min-w-[25em] bg-[#F5F6F7] px-10 py-4 rounded-xl hover:scale-105 transition-all hover:bg-[#cae2fd] hover:mx-5">
      <div className=" border-b-[1px]  border-[#E0E3E6]">
        <h1 className="font-semibold text-primaryDark text-lg">{equipment}</h1>
        <ReactStars
          count={5}
          size={24}
          isHalf={true}
          value={rating}
          edit={false}
        />
        <img className="rounded-full h-14 w-14" src={img} alt="" />
        <p className=" font-['Montserrat'] my-2 text-[#455B73] ">{body}</p>
      </div>
      <p className=" font-['Montserrat'] mt-2 text-[#455B73] ">{name}</p>
      <p className=" font-['Montserrat'] text-[#455B73] ">{date}</p>
    </div>
  );
};

//might be typescript
// TesiCard.propTypes = {
//   name: PropTypes.string,
// };
export default TesiCard;
