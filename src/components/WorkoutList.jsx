import { useEffect, useState } from 'react';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import workoutList from '../workout.json';

export default function WorkoutList() {
  const { day } = useParams();
  const [isHover, setIsHover] = useState(false);
  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    setWorkoutData(
      workoutList.filter((workout) => workout.day === day)[0].exercises
    );
  }, [day]);

  function handleHover(index) {
    setIsHover(index);
  }

  return (
    <div className='h-full bg-bg-main pt-2'>
      {workoutData
        ? workoutData.map((workout, index) => (
            <Link
              to={`/${day}/${workout.name}`}
              key={index}
              className={`px-10 py-5 flex rounded-2xl items-center ${
                isHover === index
                  ? 'bg-hd-second'
                  : index % 2 === 1
                  ? 'bg-bg-main'
                  : 'bg-bg-second'
              }`}
              onMouseEnter={() => handleHover(index)}
              onMouseOut={() => setIsHover(null)}
              onClick={() => handleHover(index)}
            >
              <img
                src={workout.gifImage}
                alt=''
                className='h-16 w-20 rounded-lg'
              />
              <div className='ml-4 self-start'>
                <p className='text-sm font-bold text-f-second tracking-wider'>
                  Exercise {index + 1}:
                </p>
                <p
                  className={`text-lg font-bold leading-5 w-[170px] ${
                    isHover === index ? 'text-white' : 'text-f-main'
                  }`}
                >
                  {workout.name}
                </p>
              </div>
              <IoArrowForwardCircleSharp
                className={`ml-auto text-2xl  ${
                  isHover === index ? 'text-hd-main' : 'text-arrow'
                }`}
              />
            </Link>
          ))
        : null}
    </div>
  );
}
