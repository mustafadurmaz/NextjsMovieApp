import Movies from "@/app/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=46a837ced1c1eedb6163fe2f9bc128f8&query=${keyword}&language=en-US&include_adult=false`,
  );

  const data = await res.json();

  console.log(data);
  return (
    <div>
      {!data?.results ? (
        <div>Aranılan film bulunamadı</div>
      ) : (
        <div className="flex items-center flex-wrap gap-3">
          {data?.results?.map((item, index) => (
            <Movies key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
