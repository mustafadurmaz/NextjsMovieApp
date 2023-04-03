import Image from "next/image";
import React from "react";

const Movies = ({ item }) => {
  console.log(item);
  return (
    <div className="min-w-[400px] h-[300px]">
      <Image fill src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path || item?.poster_path}`} />
    </div>
  );
};

export default Movies;
