/* eslint-disable react/jsx-key */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


const Home = () => {
      const [course, setCourse] = useState([]);
      useEffect(() => {
            fetch('course.json')
                  .then(res => res.json())
                  .then(data => setCourse(data));
      });
      // console.log(setCourse);






      return (<>
            <div className='lg:flex'>
                  <div className='w-5/6 gap-3 mx-10 flex flex-wrap'>
                        {
                              course.map(course => (
                                    <div key={course.id} className="card w-96 bg-base-100 shadow-xl ml-6">
                                          <figure className="px-10 pt-10">
                                                <img src="https://i.ibb.co/8D3bPrv/Rectangle-2-6.png" />
                                          </figure>
                                          <div className="card-body text-start space-y-2">
                                                <h2 className="card-title ml-6">Basic Data Structures</h2>
                                                <p className='ml-6'>It is a long established fact that a reader br will be distracted by the readable content of a page when looking at its layout.</p>
                                                <div className='flex space-x-12 justify-evenly'>
                                                      <h4> <FontAwesomeIcon icon={faDollarSign} />  Price: 2900</h4>
                                                      <h4><FontAwesomeIcon icon={faBookOpen} /> Credit: 2</h4>
                                                </div>
                                                <div className="card-actions mx-auto ">
                                                      <button className="btn btn-primary px-[105px] text-white bg-[#2F80ED] border-none">Buy Now</button>
                                                </div>
                                          </div>

                                    </div>
                              ))
                        }
                  </div>
                  <div className='w-1/6 ' >
                        <h1 className='text-4xl'>card</h1>
                  </div>

            </div>



      </>
      );
};

export default Home;
