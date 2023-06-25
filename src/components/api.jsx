import { useState, useEffect } from "react";
const count = 1;

function LoadImages() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=37784043-6d7a50cd1a0bd8a3ed9269224`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setState(data.hits);
      });
  }, [count]);
  return state;
}
function searchImages(query) {
  const [searchVal, setSearchVal] = useState([]);
  //   let searchVal = [];
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=37784043-6d7a50cd1a0bd8a3ed9269224&q=${query}&image_type=photo&pretty=true`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchVal(data.hits);
      });
  }, [query]);
  return searchVal;
}

export { LoadImages, searchImages };
