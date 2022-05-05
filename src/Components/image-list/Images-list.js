import React from 'react';
import ImageCard from './Image-Card';
import './Image-list.css'


/**
 * 
 * @param {here we are mapping through the image, 'image id', 'image description', 'image url'} props 
   
 * @returns  the key element must be assigned to the root element we are returning.
 */
const ImageList = props => {
  const images = props.images.map((image) => {
  return <ImageCard key={image.id} image={image} />
});

  return(
    <div className='image-list'> Image List {images} </div>
  )
}



export default ImageList;