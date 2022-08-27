import React from 'react';
import EmployeeSignUp from './EmployeeSignUp';
import HrSignUp from './HrSignUp';

function EmployeeHrSignUp() {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-xl-10 mx-auto'>
            <div className='card card-tab bg-hero1 border-0'>
              <div className='card-body'>
                <ul
                  class='nav nav-tabs justify-content-center'
                  id='myTab'
                  role='tablist'>
                  <li class='nav-item' role='presentation'>
                    <button
                      class='nav-link active'
                      id='home-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#home'
                      type='button'
                      role='tab'
                      aria-controls='home'
                      aria-selected='true'>
                      Hr SignUp
                    </button>
                  </li>

                  <li class='nav-item' role='presentation'>
                    <button
                      class='nav-link'
                      id='contact-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#contact'
                      type='button'
                      role='tab'
                      aria-controls='contact'
                      aria-selected='false'>
                      Employee SignUp
                    </button>
                  </li>
                </ul>
                <div class='tab-content' id='myTabContent'>
                  <div
                    class='tab-pane fade show active'
                    id='home'
                    role='tabpanel'
                    aria-labelledby='home-tab'>
                    <HrSignUp />
                  </div>

                  <div
                    class='tab-pane fade'
                    id='contact'
                    role='tabpanel'
                    aria-labelledby='contact-tab'>
                    <EmployeeSignUp />
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

export default EmployeeHrSignUp;
