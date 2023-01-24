// import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function useImageSearch(query, pageNumber) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [image, setImage] = useState([])
    const [hasMore, setHasMore] = useState(false)
    
    useEffect(()=>{
        setImage([])
    }, [query])

    useEffect(() => {
        setLoading(false)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'https://api.unsplash.com/search/photos/?client_id=dEt1q5MCaOJw-7oXpCCvNYA4gQMwgzcOZVSkWRjR3n4',
            params: {query: query, page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)

        }).then(res => {
            setImage(previmg =>{
                return [...previmg, ...res.data.results]
            })
            // console.log(res);
            setHasMore(res.data.results.length > 0)
            setLoading(true)

        }).catch(e => {
            if(axios.isCancel(e)) return
            setError(true) 
        })
        return () => cancel()
    },[query, pageNumber])
    
    return {loading, error ,image, hasMore}
}

export default useImageSearch