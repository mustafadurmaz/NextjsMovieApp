import React from "react";

import Movies from "./components/Movies";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=46a837ced1c1eedb6163fe2f9bc128f8`,
    { next: { revalidate: 5 } },
  );

  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((item, index) => (
        <Movies key={index} item={item} />
      ))}
    </div>
  );
};

export default Page;
