import { useState } from 'react';
import img from '../assets/images/gif/monday/chest-press.gif';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';

export default function WorkoutList() {
  const [isHover, setIsHover] = useState(false);

  function handleHover() {
    setIsHover(true);
  }

  function handleMouseOut() {
    setIsHover(false);
  }

  return (
    <div
      className={`px-10 py-3 flex rounded-2xl items-center ${
        isHover ? 'bg-hd-second' : 'bg-bg-main'
      }`}
      onMouseEnter={handleHover}
      onMouseOut={handleMouseOut}
      onClick={handleHover}
    >
      <img src={img} alt='' className='h-16 w-20 rounded-lg' />
      <div className='ml-4 self-start'>
        <p className='text-sm font-bold text-f-second tracking-wider'>
          Exercise 1:
        </p>
        <p
          className={`text-xl font-bold  -mt-1 ${
            isHover ? 'text-white' : 'text-f-main'
          }`}
        >
          Chest Press
        </p>
      </div>
      <IoArrowForwardCircleSharp
        className={`ml-auto mr-2 text-2xl  ${
          isHover ? 'text-hd-main' : 'text-arrow'
        }`}
      />
    </div>
  );
}
