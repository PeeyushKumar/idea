import { collection, onSnapshot } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import NoteBoard from './components/NoteBoard';
import db from './firebase';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => (
      onSnapshot( collection(db, "ideas"), snapshot => {
        setData(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})));
      })
  )
, []);

//   let data = [
//     {
//         title: 'Dream',
//         body: 'my drean beautiful'
//     },
//     {
//         title: 'Stigme tools',
//         body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos rem repellat mollitia id deleniti unde vitae adipisci soluta assumenda corporis! Ipsum aspernatur ab ducimus. Perferendis non repellat doloribus quasi quae consectetur, magnam impedit sunt! A doloremque harum nemo iusto optio.'
//     },
//     {
//         title: 'Novarak',
//         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos in cum accusamus maiores consequatur tenetur voluptatem labore voluptas. Blanditiis?'
//     },
//     {
//         title: 'Dream of wonderland',
//         body: 'my drean beautifdul and powerful'
//     },
//     {
//         title: 'Stigme tools',
//         body: 'Lorem ipsum dolor repellat mollitia id deleniti unde vitae adipisci soluta assumenda corporis! Ipsum aspernatur ab ducimus. Perferendis non repellat doloribus quasi quae consectetur, magnam impedit sunt! A doloremque harum nemo iusto optio.'
//     },
//     {
//         title: 'Novarak',
//         body: 'Lorem ipsum dolor saiores consequatur tenetur voluptatem labore voluptas. Blanditiis?'
//     },
//     {
//         title: 'Dream of wonderland',
//         body: 'my drean beautifdul and powerful'
//     },
//     {
//       body: 'my safl erful'
//     },
//     {
//       title: 'Novarak',
//     },
// ]

  return (
    <div className="App">
      <NoteBoard data={data}/>
    </div>
  );
}

export default App;
