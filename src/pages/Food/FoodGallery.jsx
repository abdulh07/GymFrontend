
import  { useState } from 'react';
import axios from 'axios';

const FoodGallery = () => {
    const [foodData, setFoodData] = useState(null);
    const [query, setQuery] = useState('');

    const fetchFoodData = async () => {
        const app_id = "d8eea4dd"; // Replace with your actual App ID
        const app_key = "7690c7cfde9eb0d00f1d8dad22dddd1c"; // Replace with your actual App Key
        const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${query}`;

        try {
            const response = await axios.get(url);
            setFoodData(response.data);
        } catch (error) {
            console.error("Error fetching food data:", error);
            setFoodData(null);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchFoodData();
    };

    return (
        <div className='mt-36  mx-28 max-md:mx-5'>
        <h1 className='text-2xl font-semibold text-center my-5'>Food</h1>
            <form onSubmit={handleSearch}>
            <div className='flex gap-3 justify-center'>
             <input
                    type="text"
                    // required
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Enter a food item..."
                    className='p-2 border w-72  rounded-lg  focus:outline-none'
                />
                <button type="submit" className='px-4 bg-green-600 text-white rounded-md' >Search</button></div>
               
            </form>

            {foodData && (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {foodData.hints.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
                src={item.food.image || "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"} 
                alt={item.food.label}
                className="w-full h-48 object-cover" // Adjust height as needed
            />
            <div className="p-4">
                <h4 className="font-bold text-lg mb-2">{item.food.label}</h4>
                <p className="text-gray-700">Calories: {Number(item.food.nutrients.ENERC_KCAL).toFixed(2)}</p>
                <p className="text-gray-700">Protein: {Number(item.food.nutrients.PROCNT).toFixed(2)} g</p>
                <p className="text-gray-700">Fat: {Number(item.food.nutrients.FAT).toFixed(2)} g</p>
                <p className="text-gray-700">Carbs: {Number(item.food.nutrients.CHOCDF).toFixed(2)} g</p>
            </div>
        </div>
    ))}
</div>

                </div>
            )}
        </div>
    );
};

export default FoodGallery;

