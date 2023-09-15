/* eslint-disable react/prop-types */

const Cart = ({ selectedCourse, remaining, totalCost }) => {
      console.log(selectedCourse);

      return (
            <div className='w-1/6 sm:items-center '>
                  <div className='card p-5 bg-base-100 shadow-xl mt-5 pb-22' >
                        <h1 className=' text-[#2F80ED] font-semibold text-start'>Credit Hour Remaining {remaining} hr   <hr className="h-px w-66 my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr></h1>
                        <div className="mt-4 space-y-1">
                              <h1 className='text-xl font-bold mb-3'>
                                    Course Name
                              </h1>
                              {
                                    selectedCourse.map((course) => (
                                          <li key={course.id} className="list-decimal">{course.title}</li>
                                    ))
                              }


                              <hr className="h-px w-66 my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        </div>


                        <h1 className="py-3">Total Credit Hour : {totalCost}
                        </h1>


                        <hr className="h-px w-66 my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className="mt-5">
                              <p className="">Total Price: 00 USD</p>

                        </div>



                  </div>
            </div>
      );
};

export default Cart;