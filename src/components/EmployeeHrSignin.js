import React from 'react';
import EmployeeLogin from './EmployeeSignin';
import HrLogin from './HrSignin';

function EmployeeHrSignin() {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-xl-10  mx-auto'>
            <div className='card card-tab'>
              <div className='card-body'>
                <ul
                  className='nav nav-tabs justify-content-center'
                  id='myTab'
                  role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active'
                      id='hr-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#hr'
                      type='button'
                      role='tab'
                      aria-controls='hr'
                      aria-selected='true'>
                      Hr Login
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='employee-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#employee'
                      type='button'
                      role='tab'
                      aria-controls='employee'
                      aria-selected='false'>
                      Employee Login
                    </button>
                  </li>
                </ul>
                <div className='tab-content' id='myTabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='hr'
                    role='tabpanel'
                    aria-labelledby='hr-tab'>
                    <HrLogin />
                  </div>
                  <div
                    className='tab-pane fade'
                    id='employee'
                    role='tabpanel'
                    aria-labelledby='employee-tab'>
                    <EmployeeLogin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeHrSignin;
