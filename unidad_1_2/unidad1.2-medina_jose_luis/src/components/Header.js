import React from 'react';
import Title from './Title';
import './Header.css';

const Header = ({title}) => {
  return (
    <div>
      <h1 className='title'>
      <Title title={title}/>
      </h1>        
    </div>
  );
};

export default Header;