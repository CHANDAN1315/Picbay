import axios from 'axios'
// import React from 'react'
import { useState, useEffect } from 'react'

function RandomImg() {
    const [data, setData] = useState('')

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`
        }).then(res => {
            setData(previmg =>{
                return [...previmg, ...res.data.results]
            })
        }).catch(e => {
            if (axios.isCancel(e)) return
        })

    }, [])
    console.log(data);
    return {data}
}

export default RandomImg