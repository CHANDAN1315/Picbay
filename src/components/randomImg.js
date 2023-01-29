import axios from 'axios'
// import React from 'react'
import { useState, useEffect } from 'react'

// function RandomImg() {
//     const [data, setData] = useState(['car'])
//     useEffect(() => {

//         let cancel
//         axios({
//             method: 'GET',
//             // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
//             url: `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`,
//             cancelToken: new axios.CancelToken(c => cancel = c)
//         }).then(res => {
//             setData(res.data.result)

//         }).catch(e => {
//             if (axios.isCancel(e)) return
//         })
//         return () => cancel()
//     }, [])
//     console.log(data);
//     return {data}
// }
function LoadImage() {
  const [page, setPage] = useState(1);
  const [state, setState] = useState([]);

  const fetchImage = () =>{
    axios
    .get(
      `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => {
      setState([...state,...data.data]);
    });
    setPage(page +1);
  }
  // const count = 2;
  useEffect(() => {
    fetchImage();
  },[]);
  
  return state;
}
export default LoadImage