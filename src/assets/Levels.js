import lvl1 from '../img/maps/lvl-1.jpg';
import lvl2 from '../img/maps/lvl-2.jpg';
import lvl3 from '../img/maps/lvl-3.jpg';
import lvl4 from '../img/maps/level-4.jpg';
import lvl5 from '../img/maps/lvl-5.jpg';
import lvl6 from '../img/maps/lvl-6.jpg';
import { Chars } from './Chars';

const getCharactersByName = (arr) => {
  const charArr = Chars.filter((x) => arr.indexOf(x.char) !== -1);
  return charArr;
};

export const levels = [
  {
    src: lvl1,
    title: 'Level 1',
    chars: getCharactersByName(['Waldo', 'Wizard', 'Odlaw']),
  },
  {
    src: lvl2,
    title: 'Level 2',
    chars: getCharactersByName(['Waldo']),
  },
  {
    src: lvl3,
    title: 'Level 3',
    chars: getCharactersByName(['Waldo', 'Wizard', 'Odlaw', 'Wenda']),
  },
  {
    src: lvl4,
    title: 'Level 4',
    chars: getCharactersByName(['Waldo', 'Odlaw']),
  },
  {
    src: lvl5,
    title: 'Level 5',
    chars: getCharactersByName(['Waldo', 'Wizard', 'Odlaw', 'Wenda']),
  },
  {
    src: lvl6,
    title: 'Level 6',
    chars: getCharactersByName(['Waldo']),
  },
];
