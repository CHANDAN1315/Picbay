// import React from "react";
// // import { LoadImage, SearchImage } from "./components/api";
// import Images from "./components/images";
// import InfiniteScroll from "react-infinite-scroll-component";
// import "./App.css"
// import axios from "axios";
// import { useState, useEffect } from "react";



// function App() {
//   const [query, setQuery] = useState("car");
//   const [searchq, setSearchq] = useState();
//   const [hasMore, setHasMore] = useState(true);
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);

//   // console.log(query);

//   // const data = LoadImage();
//   // const data2 = LoadImage();
//   // const data3 = data.concat(data2);
  
//   //search method
//   const client_id = "dEt1q5MCaOJw-7oXpCCvNYA4gQMwgzcOZVSkWRjR3n4";
//   const fetchUrl = `https://api.unsplash.com/photos/?client_id=${client_id}&query=${query}&page=${page}`;
//   const fetchImages = () =>{
//     axios
//     .get(
//       fetchUrl
//     )
//     .then((response) => {
//       setData([...data,...response.data]);
//     });
//     setPage(page +1);
//   }
//   // const count = 2;
//   // useEffect hook take a function and a dependency , the function is called every time when the dependency in changed
//   useEffect(() => {
//     fetchImages();
//   }, [query]);



//   // data for specific search is stored here
//   // const searchData = SearchImage(searchq);



//     const search = () => {
//       setSearchq(query);
//     };




//   // console.log(searchData);
//   return (
//     <>
//       <div>
//         {/*taking the query and store it in query*/}
//         <input type="text" onChange={(event) => setQuery(event.target.value)} />
//         <button onClick={search}>Search</button>
//       </div>
//       {/*data display*/}
//       <InfiniteScroll

//         dataLength={data.length}
//         next={fetchImages}
//         hasMore={hasMore}
//         loader={<p>Load more...</p>}
//         endMessage={
//           <p style={{ textAlign: "center" }}>
//             <b>Yay! You have seen it all</b>
//           </p>
//         }
//       >
//       <div className="contain"> 
//         {searchq
//           ? state.map((img, key) => (<Images key={key} src={img.urls.thumb} />))

//           : data.map((img, key) => <Images key={key} src={img.urls.thumb} />)
//           }

//       </div>
//       </InfiniteScroll>
//     </>
//   );
// }

// export default App;