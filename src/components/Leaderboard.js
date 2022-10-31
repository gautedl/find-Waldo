import { useParams } from 'react-router-dom';
import Header from './Header';
import { firestore } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Leaderboard = () => {
  const { id } = useParams();
  const data = firestore.collection(`leaderboard-${id}`);
  const query = data.orderBy('time');
  const [scores] = useCollectionData(query, { idField: 'user' });

  console.log(scores);
  return (
    <>
      <Header inGame={false} chars={undefined} goHome={true} />
      <div className="leaderboard-table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
