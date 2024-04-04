import reaction from './assets/icon-reaction.svg';
import memory from './assets/icon-memory.svg';
import verbal from './assets/icon-verbal.svg';
import visual from './assets/icon-visual.svg';
import score from './scores.json';

export const summarySectionData = [ 

  {
    id: 1,
    icon: reaction,
    subject: "Reaction",
    score: score[0].Reaction,
    textColor: "text-lightRed",
    bgColor: "bg-red-50",
  },

  {
    id: 2,
    icon: memory,
    subject: "Memory",
    score: score[0].Memory,
    textColor: "text-orangeyYellow",
    bgColor: "bg-yellow-50",
  },

  {
    id: 3,
    icon: verbal,
    subject: "Verbal",
    score: score[0].Verbal,
    textColor: "text-greenTeal",
    bgColor: "bg-green-50",
  },

  {
    id: 4,
    icon: visual,
    subject: "Visual",
    score: score[0].Visual,
    textColor: "text-cobaltBlue",
    bgColor: "bg-blue-50",
  },

];