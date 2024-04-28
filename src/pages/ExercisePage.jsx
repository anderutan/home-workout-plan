import { MdArrowBackIos } from 'react-icons/md';
import weightIcon from '../assets/icon/weight.svg';
import setsIcon from '../assets/icon/repeat.svg';
import repsIcon from '../assets/icon/arm.svg';
import timeIcon from '../assets/icon/timer.svg';
import { useState } from 'react';
import gif from '../assets/images/gif/monday/chest-press.gif';

export default function ExercisePage() {
  const [showGif, setShowGif] = useState(true);

  return (
    <div className='relative pt-16 pb-10'>
      <MdArrowBackIos className='text-arrow text-2xl absolute top-6 left-6' />
      <div className='w-full h-72 bg-bg-main rounded-xl flex justify-center'>
        {showGif ? (
          <img src={gif} alt='' className='h-72' />
        ) : (
          <iframe
            width='375'
            height='288px'
            src='https://www.youtube.com/embed/YA-h3n9L4YU'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
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
        <p className='text-3xl font-bold mb-2'>Chest Press</p>
        <div className='flex items-center gap-3 my-3'>
          <img src={weightIcon} alt='' className='h-10' />
          <p> 2 plate / 1 plate</p>
        </div>
        <div className='flex items-center gap-3 my-3'>
          <img src={setsIcon} alt='' className='h-10' />
          <p>3 sets</p>
        </div>
        <div className='flex items-center gap-3 my-3'>
          <img src={repsIcon} alt='' className='h-10' />
          <p>15 reps</p>
        </div>
        <div className='flex items-center gap-3 my-3'>
          <img src={timeIcon} alt='' className='h-10' />

          <p>Rest 60 seconds</p>
        </div>
      </div>
    </div>
  );
}
