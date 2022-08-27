import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HrDashboard() {
  let navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem('name'));
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-10 mx-auto'>
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
