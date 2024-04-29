import exerciseIcon from '../../public/icon/thunder.svg';
import timeIcon from '../../public/icon/timer-1.svg';
import { MdArrowBackIos } from 'react-icons/md';
import bgImg from '../../public/images/background-2.jpg';
import { Link, useParams } from 'react-router-dom';
import workoutData from '../workout.json';
import { useEffect, useState } from 'react';

export default function WorkoutListHero() {
  const { day } = useParams();
  const [workoutByDay, setWorkoutByDay] = useState(null);

  useEffect(() => {
    setWorkoutByDay(workoutData.filter((workout) => workout.day === day));
  }, []);

  return (
    <div
      className=' bg-hd-second py-16 px-10 relative'
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 bg-hd-second opacity-90'></div>
      <Link to='/'>
        <MdArrowBackIos className='text-arrow text-2xl absolute top-6 left-6' />
      </Link>
      {workoutByDay ? (
        <div to={`/`} className='relative'>
          <h1 className='text-3xl font-bold text-hd-main tracking-wider '>
            {workoutByDay[0].day} Workout
          </h1>
          <p className='text-xl font-bold text-f-second tracking-wide mt-1'>
            {workoutByDay[0].type}
          </p>
          <div className='flex gap-5 mt-5'>
            <div className='bg-hd-main px-3 py-1 font-bold text-sm rounded-3xl flex items-center gap-2'>
              <img src={exerciseIcon} alt='' className='h-5' />
              <p>{workoutByDay[0].noOfExercise} exercise</p>
            </div>
            <div className='bg-hd-main px-3 py-1 font-bold text-sm rounded-3xl flex items-center gap-2'>
              <img src={timeIcon} alt='' className='h-5' />
              <p>{workoutByDay[0].duration} mins</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
