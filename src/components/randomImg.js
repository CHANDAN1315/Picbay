import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

function randomImg() {
    const [data, setData] = useState('')

    useEffect(() =>{
        axios({
            method: 'GET',
            url:'https://api.unsplash.com/photos/?client_id=dEt1q5MCaOJw-7oXpCCvNYA4gQMwgzcOZVSkWRjR3n4'
        }).then(res =>{
            setData(previmg =>{
                return [previmg, res.data.results]
            })
        })
    })
  return (

  )
}

export default randomImg