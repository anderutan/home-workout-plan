import exerciseIcon from '../assets/icon/thunder.svg';
import timeIcon from '../assets/icon/timer-1.svg';
import { MdArrowBackIos } from 'react-icons/md';
import bgImg from '../assets/images/background-2.jpg';

export default function WorkoutListHero() {
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
      <MdArrowBackIos className='text-arrow text-2xl absolute top-6 left-6' />
      <div className='relative'>
        <h1 className='text-4xl font-bold text-hd-main tracking-wider '>
          Monday Workout
        </h1>
        <p className='text-xl font-bold text-f-second tracking-wide mt-2'>
          Chest - Tricep
        </p>
        <div className='flex gap-5 mt-5'>
          <div className='bg-hd-main px-3 py-1 font-bold rounded-3xl flex items-center gap-2'>
            <img src={exerciseIcon} alt='' className='h-5' />
            <p>6 exercises</p>
          </div>
          <div className='bg-hd-main px-3 py-1 font-bold rounded-3xl flex items-center gap-2'>
            <img src={timeIcon} alt='' className='h-5' />
            <p>45 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
