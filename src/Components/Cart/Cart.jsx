
const Cart = ({ selectedCourse }) => {
      console.log(selectedCourse);

      return (
            <div className='w-1/6 sm:items-center '>
                  <div className='card p-5 bg-base-100 shadow-xl mt-5 pb-40' >
                        <h1 className=' text-[#2F80ED] font-semibold text-start'>Credit Hour Remaining  hr {selectedCourse.length}  <hr className="h-px w-66 my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr></h1>
                        <div>
                              <h1 className='text-xl font-bold'>
                                    Course Name
                              </h1>
                              {
                                    selectedCourse.map(course => (
                                          <ol key={course.id} className="list-decima"><li>{course.title}</li></ol>
                                    ))
                              }


                              <hr className="h-px w-66 my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        </div>

                        {selectedCourse.map(course => (
                              <h1 key={course.id}>Total Credit Hour : {course.credit}
                              </h1>

                        ))}
                        <hr className="h-px w-66 my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>


                  </div>
            </div>
      );
};

export default Cart;