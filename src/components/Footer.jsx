import React from 'react'

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className='text-center p-5 border-t'>@{year} All Rights Reserved</footer>
  )
}

export default Footer