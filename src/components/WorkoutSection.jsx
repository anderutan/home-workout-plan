import { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import workoutList from '../workout.json';

export default function WorkoutSection() {
  const [workoutData, setWorkoutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHover, setIsHover] = useState(null);

  function handleHover(itemId) {
    setIsHover(itemId);
  }

  useEffect(() => {
    try {
      setWorkoutData(workoutList);
    } catch (error) {
      console.error('Failed to fetch workout data:', error);
      setError('An error occurred while loading workouts.');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {loading && <p>Loading workouts...</p>}
      {error && <p>{error}</p>}
      {workoutData && workoutData.length > 0
        ? workoutData.map((workout, index) => (
            <Link
              to={`/${workout.day}`}
              key={workout.id}
              className={`flex items-center py-5  px-5 rounded-2xl ${
                isHover === workout.id
                  ? 'bg-hd-second'
                  : index % 2 === 0
                  ? 'bg-bg-main'
                  : 'bg-bg-second'
              }`}
              onMouseEnter={() => handleHover(workout.id)}
              onMouseOut={() => setIsHover(null)}
              onClick={() => handleHover(workout.id)}
            >
              <img
                src={workout.coverPicture}
                alt=''
                className='h-16 rounded-lg'
              />
              <div className='ml-4'>
                <p
                  className={`text-lg  font-bold tracking-wide ${
                    isHover === workout.id ? 'text-white' : 'text-f-main'
                  }`}
                >
                  {workout.day} Workout
                </p>
                <p className='text-sm text-f-second font-semibold '>
                  {workout.type}
                </p>
              </div>
              <FaArrowCircleRight
                className={`ml-auto mr-2 text-xl  ${
                  isHover === workout.id ? 'text-hd-main' : 'text-arrow'
                }`}
              />
            </Link>
          ))
        : null}
    </div>
  );
}
