import React, { useState } from 'react'
import { useRef ,useCallback } from 'react'
import useImageSearch from './components/useImageSearch'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')

  const {
    loading,
    error,
    image,
    hasMore

  } = useImageSearch(search, pageNumber)

  const observer = useRef()
  const lastImageRef = useCallback(node => {
    // if(loading) return 
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting && hasMore){
          setPageNumber(prePageNum => prePageNum + 1)
        }
    })
    if(node) observer.current.observe(node)

    
  }, [hasMore])
  
  useEffect(() =>{
    setSearch('')
  },[query])

  function handleSearch() {
    setSearch(query)
    setPageNumber(1)
  }


  return (
    <>
      <div className="input">
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="contain">
        {/* {console.log(image.length)} */}
        {search ? image.map((res, index) => {
          if(image.length === index + 1){
            return <img src={res.urls.thumb} ref = {lastImageRef} alt="imge" key={res.urls.thumb}/>
          }
          else {return <img src={res.urls.thumb} alt="imge" key={res.urls.thumb}/>}

        }): <div></div>}
      </div>
      <div className="input">{loading && '~ By chandan kumar'}</div>
      <div>{error && ''}</div>

      {/* <img src={this.props.src} alt= "imge"/>; */}
    </>
  )
}

export default App



