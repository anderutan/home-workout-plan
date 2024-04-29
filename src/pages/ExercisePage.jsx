import { MdArrowBackIos } from 'react-icons/md';
import weightIcon from '../assets/icon/weight.svg';
import setsIcon from '../assets/icon/repeat.svg';
import repsIcon from '../assets/icon/arm.svg';
import timeIcon from '../assets/icon/timer.svg';
import toolIcon from '../assets/icon/tool.svg';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import workoutList from '../workout.json';

export default function ExercisePage() {
  const { day, exercise } = useParams();
  const [showGif, setShowGif] = useState(true);
  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    const filterList = workoutList.filter((workout) => workout.day === day)[0]
      .exercises;
    setWorkoutData(
      filterList.filter((exercises) => exercises.name === exercise)[0]
    );
  }, [day]);

  console.log(workoutData);

  return (
    <>
      {workoutData ? (
        <div className='relative pt-16 pb-10'>
          <Link to={`/${day}`}>
            <MdArrowBackIos className='text-arrow text-2xl absolute top-6 left-6' />
          </Link>
          <div className='w-full h-72 bg-bg-main rounded-xl flex justify-center'>
            {showGif ? (
              <img src={workoutData.gifImage} alt='' className='h-72' />
            ) : (
              <iframe
                width='375'
                height='288px'
                src={`https://www.youtube.com/embed/${workoutData.videoLink}`}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowfullscreen
              ></iframe>
            )}
          </div>
          <div className='flex gap-5 justify-center mt-5'>
            <div
              className={`w-28 py-1  rounded-3xl font-bold text-center ${
                showGif ? 'bg-bg-main' : 'bg-hd-second text-white'
              }`}
              onClick={() => setShowGif(false)}
            >
              Video
            </div>
            <div
              className={`w-28 py-1  rounded-3xl font-bold text-center ${
                showGif ? 'bg-hd-second text-white' : 'bg-bg-main'
              }`}
              onClick={() => setShowGif(true)}
            >
              GIF
            </div>
          </div>

          <div className='px-10 py-5'>
            <p className='text-3xl font-bold mb-2'>{workoutData.name}</p>
            <div className='flex items-center gap-3 my-4'>
              <img src={weightIcon} alt='' className='h-10' />
              <p>
                {' '}
                {workoutData.weightFather} plate / {workoutData.weightMother}{' '}
                plate
              </p>
            </div>
            <div className='flex items-center gap-3 my-4'>
              <img src={toolIcon} alt='' className='h-10' />
              <p>{workoutData.tool || 'No Tool'}</p>
            </div>
            <div className='flex items-center gap-3 my-4'>
              <img src={setsIcon} alt='' className='h-10' />
              <p>{workoutData.sets} sets</p>
            </div>
            <div className='flex items-center gap-3 my-4'>
              <img src={repsIcon} alt='' className='h-10' />
              <p>{workoutData.reps} reps</p>
            </div>
            <div className='flex items-center gap-3 my-4'>
              <img src={timeIcon} alt='' className='h-10' />
              <p>Rest {workoutData.rest} seconds</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
