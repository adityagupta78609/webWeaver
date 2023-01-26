import React from 'react'
import { useState ,useEffect} from 'react';
import Cards from './Cards'

const Section = ({key}) => {

    const API = "https://jsonplaceholder.typicode.com/photos";
    const searchKey = API + key;
    let currentImages;


    useEffect (() => {
        fetch(API)
        .then(response => response.json())
        .then((response) => {
          // console.log(response);
          currentImages = response;
          
        }) },[searchKey] )

  return (
    <>
    <div className="flex flex-wrap">
      {
  // cards for renderingthe details
  currentImages.map((post) =>(
    <>
  <Cards title={post.title} url={post.url}/>
  </>
  )) 
}
</div>
    </>
  )
}

export default Section
