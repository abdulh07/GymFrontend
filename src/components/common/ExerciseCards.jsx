const ExerciseCard = ({ title, exercises }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 my-4 h-full">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc pl-5 space-y-2">
        {exercises.map((exercise, index) => (
          <li key={index} className="font-medium">{exercise}</li>
        ))}
      </ul>
    
    </div>
  );
};

export default ExerciseCard;
