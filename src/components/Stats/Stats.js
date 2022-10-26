import React from 'react';

const Stats = ({count}) => {
    return (
       <div className='d-flex justify-content-center'>
         <div class="card mt-2" style={{ width: '18rem' }}>
          <div class="card-body p-5">
            <h3>Total Count : {count}</h3>
          </div>
        </div>
       </div>
    );
};

export default Stats;