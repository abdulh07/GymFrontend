import { useParams } from 'react-router-dom'
import ExerciseCards from '../../components/common/ExerciseCards';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Exercises = () => {

    const {id}=useParams()
    const [exercisePlans,setExercisePlans]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
if(id){
  fetch(`http://localhost:5000/api/v1/user/getExercises/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    setLoading(()=>false)

    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    setLoading(()=>false)

    setExercisePlans(data.details)
  })
  .catch(error => {
    console.error('Error:', error);
    setLoading(()=>false)
 
  });
}

    },[id])
   
  return (
    <div className='my-36 mx-20 max-sm:mx-10'>
    <div className='flex justify-center'><p className='font-semibold text-2xl'>Exercises</p></div>
   {loading?
    <div className='flex justify-center place-items-center'> <ClipLoader className="mr-5 " color="blue" size={25} /></div>
   :exercisePlans.length==0?
   <div className='flex justify-center place-items-center'>
    No Exercise Found
   </div>: 
   <div className='grid grid-cols-12'>

       {exercisePlans?.map((plan, index) => (
       <div className='min-xl:col-span-3   lg:col-span-3   md:col-span-6  max-sm:col-span-12  max-xs:col-span-12 p-3'  key={index} > <ExerciseCards {...plan} /></div>
      ))}
      </div>}
    </div>
  )
}

export default Exercises