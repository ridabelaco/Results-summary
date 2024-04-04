import { useEffect, useState } from "react";
import SummarySection from '../components/SummarySection.jsx';
import { summarySectionData } from '../summarySectionData.jsx';
import scores from '../scores.json';

export default function ResultsSummary() {

  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    // Calculate average score when component mounts
    const totalScores = Object.values(scores[0]).reduce((acc, curr) => acc + curr, 0);
    const numScores = Object.keys(scores[0]).length;
    const average = totalScores / numScores;
    setAverageScore(average.toFixed(0));
  }, []);

  return (

    <>
      <div className="md:flex md:flex-row bg-white md:rounded-3xl shadow-md shadow-slate-300 ">
        <div className='bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue w-full md:w-[300px] h-full flex flex-col items-center justify-center rounded-b-3xl md:rounded-3xl px-12 md:px-10 py-8'>
          <p className="text-lightLavender font-bold text-lg ">Your Result</p>
          <div className='flex flex-col items-center justify-center bg-gradient-to-b from-violetBlue to-persianBlue w-36 h-36 rounded-full my-6'>
            <h1 className='text-white font-bold text-5xl mb-2'>{averageScore}</h1>
            <p className='text-lightLavender font-bold text-sm'>
              of 100
            </p>
          </div>
          <p className='text-white font-bold text-3xl mb-3'>Great</p>
          <p className='text-lightLavender  text-center'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className='flex flex-col p-6 md:w-[300px] md:h-[300px]'>
          <h2 className='text-lg font-bold mb-6'>Summary</h2>
          {summarySectionData.map((data) => {
            return <SummarySection key={data.id} {...data} />;
          })}
          <button className='bg-darkGrayBlue text-lg text-white p-4 md:p-2 rounded-full font-bold hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue duration-300'>Continue</button>
        </div>
      </div>
    </>
  )
}
