import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('name');
    navigate('/');
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container px-4 px-lg-5'>
        <a className='navbar-brand' href='#!'>
          Dashboard
        </a>

        <form className='d-flex justify-content-end'>
          <div className='me-2'>
            <button className='btn btn-warning rounded-pill' onClick={logout}>
              SignOut
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
