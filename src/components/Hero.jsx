import bgImg from '../../public/images/background-1.jpg';

export default function Hero() {
  return (
    <div
      className={`relative mx-5 px-5 pt-12 pb-5 rounded-b-lg`}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 bg-hd-main opacity-80'></div>
      <h1 className='text-4xl font-bold text-f-main relative drop-shadow-[0_3px_3px_rgba(255,255,255,1)] tracking-wide'>
        Home <br />
        Workout Plan
      </h1>
    </div>
  );
}
