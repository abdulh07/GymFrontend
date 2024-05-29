import { useState } from 'react';
import { FaPlus, FaTrash,  } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";

function ExerciseForm({ onClose ,sessionID}) {
  const [title, setTitle] = useState('');
  const [exerciseInput, setExerciseInput] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || exercises.length === 0){
        toast.error("Add Exercises..!")
      return
    }
    // onAddPlan({ title, exercises });
   

  const payload= { title, exercises,sessionID }
  console.log('payload: ', payload);
    try {
      const response = await fetch(`http://localhost:5000/api/v1/user/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'  // This line is crucial
        },
        body:  JSON.stringify( payload),
       
      });

      if (response.ok) {
        const result = await response.json();
        console.log('result: ', result);
        toast.success("Exercises Added..!")
        setTitle('');
        setExercises([]);
        setExerciseInput('');
        onClose()
       
    }} catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddExercise = () => {
    if (exerciseInput) {
      setExercises([...exercises, exerciseInput]);
      setExerciseInput('');
    }
  };

  const handleDeleteExercise = (index) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-[30vw] h-[50vh] mx-auto my-4 p-4 text-left ">
      <IoMdClose className="absolute -top-3 right-3 text-2xl text-gray-600 cursor-pointer" onClick={onClose} />
      <div className="mb-3">
        <label htmlFor="title" className="block font-bold mb-2">Title</label>
        <input
        required
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter the title of the exercise plan"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exercise" className="block font-bold mb-2">Add Exercise</label>
        <div className="flex items-center gap-4">
          <input
            type="text"
            id="exercise"
            value={exerciseInput}
            onChange={(e) => setExerciseInput(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter an exercise"
          />
          <FaPlus className="text-lg text-green-700 cursor-pointer" onClick={handleAddExercise} />
        </div>
      </div>
      <div className="h-[40%] overflow-y-scroll my-4">
        <ul className="list-disc pl-5">
          {exercises.map((exercise, index) => (
            <li key={index} className="flex justify-between items-center">
              {exercise}
              <FaTrash className="text-red-500 cursor-pointer ml-2" onClick={() => handleDeleteExercise(index)} />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center">
        <button type="submit" className="bg-blue-500 w-72 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ExerciseForm;
