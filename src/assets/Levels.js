// import lvl1 from '../img/maps/lvl-1.jpg';
// import lvl2 from '../img/maps/lvl-2.jpg';
// import lvl3 from '../img/maps/lvl-3.jpg';
// import lvl4 from '../img/maps/lvl-4.jpg';
// import lvl5 from '../img/maps/lvl-5.jpg';
// import lvl6 from '../img/maps/lvl-6.jpg';
import { Chars } from './Chars';

import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

const getCharactersByName = (arr) => {
  const charArr = Chars.filter((x) => arr.indexOf(x.char) !== -1);
  return charArr;
};

const overviewRef = ref(storage, `images`);
listAll(overviewRef)
  .then((res) => {
    let promises = res.items.map((imageRef) => getDownloadURL(imageRef));
    Promise.all(promises).then((urls) => {
      levels.map((x, index) => (x.src = urls[index]));
    });
    letFinished = true;
  })
  .catch((err) => {
    console.log(err);
  });

export let letFinished = false;

export const levels = [
  {
    src: '',
    title: 'Level 1',
    chars: getCharactersByName(['Waldo', 'Wizard', 'Odlaw']),
  },
  {
    src: '',
    title: 'Level 2',
    chars: getCharactersByName(['Waldo']),
  },
  {
    src: '',
    title: 'Level 3',
    chars: getCharactersByName(['Waldo', 'Wizard', 'Odlaw', 'Wenda']),
  },
  {
    src: '',
    title: 'Level 4',
    chars: getCharactersByName(['Waldo', 'Odlaw', 'Wenda']),
  },
  {
    src: '',
    title: 'Level 5',
    chars: getCharactersByName(['Waldo', 'Wizard', 'Odlaw', 'Wenda']),
  },
  {
    src: '',
    title: 'Level 6',
    chars: getCharactersByName(['Waldo']),
  },
];
