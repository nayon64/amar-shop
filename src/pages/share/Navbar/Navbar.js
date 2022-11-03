import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
    <div className="text-2xl font-bold text-center flex justify-center list-none my-10">
      <li className='mr-6'>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/productcreate">Post</Link>
      </li>
    </div>
  );
};

export default Navbar;