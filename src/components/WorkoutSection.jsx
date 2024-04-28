import cover from '../assets/images/cover-picture/monday.jpg';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function WorkoutSection() {
  return (
    <div className='flex items-center my-3 px-5'>
      <img src={cover} alt='' className='h-20 rounded-lg' />
      <div className='ml-4'>
        <p className='text-xl text-f-main font-bold tracking-wide'>
          Monday Workout
        </p>
        <p className='text-sm text-f-second font-semibold '>Chest - Tricep</p>
      </div>
      <FaArrowCircleRight className='ml-auto mr-2 text-2xl text-arrow' />
    </div>
  );
}
