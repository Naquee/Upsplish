import React from 'react'
import "./galary.css"

const Galary = ({photos,loading}) => {
    // console.log(loading)
    console.log(photos)
  return (
    <div className='galary'>
    {!loading ?
    photos.map((photo)=>(
      <div>
        <img src={photo.urls.regular} alt={photo.all_description} className="grid-img"
            key={photo.id}    
        />
        </div>
        
        

    )): <div className="loader"></div>}
    </div>
  )
}

export default Galary;