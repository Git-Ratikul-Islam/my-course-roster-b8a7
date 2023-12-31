/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import Swal from 'sweetalert2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


const Home = () => {
      const [course, setCourse] = useState([]);
      const [selectedCourse, setSelectedCourse] = useState([]);
      const [remaining, setRemaining] = useState(20);
      const [totalCost, setTotalCost] = useState(0);
      useEffect(() => {
            fetch('course.json')
                  .then(res => res.json())
                  .then(data => setCourse(data));
      }, []);
      // console.log(course);



      const haldleSelectCourse = (course) => {

            const isExist = selectedCourse.find((item) => item.id == course.id);
            let count = course.credit;

            if (isExist) {
                  Swal.fire(
                        "Oops...",
                        "Can't select course twice!",
                        'error'
                  );
            }
            else {
                  selectedCourse.forEach((course) => {
                        count = count + course.credit;
                  });

                  const totalRemaining = 20 - count;
                  if (count > 20) {
                        Swal.fire(
                              'Error!',
                              'Your out of credit',
                              'error'
                        );
                  } else {
                        setTotalCost(count);
                        setRemaining(totalRemaining);
                        setSelectedCourse([...selectedCourse, course]);
                  }



            }
      };
      // console.log(selectedCourse);

      return <>
            <h1 className='text-4xl text-center m-8  font-bold'>Course Registration</h1>
            <div className='lg:flex'>
                  <div className='w-4/6 gap-3 mx-10 flex flex-wrap'>
                        {
                              course.map(course => (
                                    <div key={course.id} className="card w-96 bg-base-100 shadow-xl ml-6">
                                          <figure className="px-10 pt-10">
                                                <img src={course.img} />
                                          </figure>
                                          <div className="card-body text-start space-y-2">
                                                <h2 className="card-title ml-6">{course.title}</h2>
                                                <p className='ml-6 pr-[8px]'>{course.description}</p>
                                                <div className='flex space-x-12 justify-evenly'>
                                                      <h4> <FontAwesomeIcon icon={faDollarSign} />  Price: {course.price}</h4>
                                                      <h4><FontAwesomeIcon icon={faBookOpen} /> Credit: {course.credit}</h4>
                                                </div>
                                                <div className="card-actions mx-auto ">
                                                      <button onClick={() => haldleSelectCourse(course)} className="btn btn-primary px-[110px] text-white bg-[#2F80ED] border-none">Select</button>
                                                </div>
                                          </div>

                                    </div>
                              ))
                        }
                  </div>
                  <Cart selectedCourse={selectedCourse} remaining={remaining}
                        totalCost={totalCost}
                  ></Cart>

            </div>



      </>;

};

export default Home;
