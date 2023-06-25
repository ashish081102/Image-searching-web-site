import React, { useState, useEffect } from "react";
import Image from "./components/Image";
import { LoadImages, searchImages } from "./components/api";

function App() {
  const [query, setQuery] = useState();
  const [searchQ, setSearch] = useState();
  const imageData = LoadImages();
  const inputHandler = (event) => {
    setQuery(event.target.value);
  };
  const searchButtonHandler = () => {
    // console.log(query)
    setSearch(query);
  };
  const searchData = searchImages(searchQ);

  // setSearch(searchData);
  console.log(searchData);
  return (
    <div>
      <div className="flex justify-center my-10">
        <input
          className="w-[20%] border-2 border-slate-900 h-8 rounded-l-xl p-2 font-semibold"
          type="text"
          onChange={inputHandler}
        />
        <button
          className="bg-slate-800 text-white w-24 rounded-r-xl font-semibold"
          onClick={searchButtonHandler}
        >
          Search
        </button>
      </div>
      <div className="columns-3 m-auto w-[80%] mb-10 ">
        {searchQ
          ? searchData.map((img) => (
              <Image key={img.id} imageUrl={img.largeImageURL} />
            ))
          : imageData.map((img) => (
              <Image key={img.id} imageUrl={img.largeImageURL} />
            ))}
      </div>
    </div>
  );
}

export default App;
