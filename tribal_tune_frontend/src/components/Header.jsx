// components/Header.jsx
import React from 'react';

const Header = ({ title }) => {
  return (
    <h1 className="text-5xl font-bold text-gray-800 text-center mb-10">{title}</h1>
  );
};

export default Header;

