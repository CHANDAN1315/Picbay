import { useState, useEffect } from "react";
import axios from "axios";
// function LoadImage() {
//   const [page, setPage] = useState(1);
//   const [state, setState] = useState([]);

//   const fetchImage = () =>{
//     axios
//     .get(
//       "https://api.unsplash.com/photos/?client_id=dEt1q5MCaOJw-7oXpCCvNYA4gQMwgzcOZVSkWRjR3n4"
//     )
//     .then((data) => {
//       setState([...state,...data.data]);
//     });
//     setPage(page +1);
//   }
//   // const count = 2;
//   useEffect(() => {
      
//   });
  
//   return state;
// }

function SearchImage(query) {
  const [state, setState] = useState([]);
  // const count = 1;
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos/?query="+query+" &client_id=dEt1q5MCaOJw-7oXpCCvNYA4gQMwgzcOZVSkWRjR3n4"
      )
      .then((data) => {
          setState(data.data.results);
      });
  }, [query]);

  return state;
}

export {SearchImage };
