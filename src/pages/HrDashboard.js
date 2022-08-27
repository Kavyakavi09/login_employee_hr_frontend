import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HrDashboard() {
  let navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem('name'));
  return (
    <div className='container'>
      <Navbar />
      <div className='row mt-5 text-white'>
        <div className='col-lg-10 mx-auto mt-5'>
          <h1 className='text-center'>Welcome to Hr Dashboard</h1>
          <div className='mt-5 text-center'>
            <h3>Hi, {name}😊</h3>
          </div>
        </div>
      </div>
      <button
        className='btn btn-primary'
        onClick={() => {
          navigate('/');
        }}>
        Go back
      </button>
    </div>
  );
}

export default HrDashboard;
