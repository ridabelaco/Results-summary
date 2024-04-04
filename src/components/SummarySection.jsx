const Scores = ({icon, subject, score, textColor, bgColor}) => {

  return (
    <div className={`${bgColor} flex flex-row relative p-4 md:p-3 mb-4 rounded-xl`}>
      <img src={icon} alt="subject icon" />
      <p className={`${textColor} font-bold`}>&nbsp;&nbsp;{subject}</p>
      <p className='absolute right-4 font-bold'>{score} <span className='text-gray-400'>/ 100</span></p>
    </div>
  )
}

export default Scores