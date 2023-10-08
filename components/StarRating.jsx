import ReactStars from "react-stars";
export default function StarRatingComponent({ skill }) {
  return (
    <>
      <ReactStars
        className=""
        count={5}
        size={24}
        color2={"#6466ec"}
        value={skill}
        edit={false}
      />
    </>
  );
}
