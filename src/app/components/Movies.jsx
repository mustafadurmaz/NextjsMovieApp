import Image from "next/image";
import React from "react";

const Movies = ({ item }) => {
  console.log(item);
  return (
    <div className="min-w-[500px] relative cursor-pointer imgContainer">
      <Image width={500} height={300} src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path || item?.poster_path}`} />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{item.title}</div>
        <div>{item.release_date} - {item.vote_average} </div>
      </div>
    </div>
  );
};

export default Movies;
