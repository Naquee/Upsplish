import React from 'react'
import './Header.css' 

const Header = ({brand,className,children}) => {
    // console.log(brand)
  return (
    <div className='header'>
    <div className={className}>
    <h3>{brand}</h3>
    {children}
    </div>
    </div>
  )
}

export default Header