import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "./All.css"

const All = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default All