import { collection, onSnapshot } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import NoteBoard from './components/NoteBoard';
import db from './firebase';
import Nav from './components/Nav';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => (
      onSnapshot( collection(db, "ideas"), snapshot => {
        setData(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})));
      })
  )
, []);

  return (
    <div className="App">
      <Nav></Nav>
      <NoteBoard data={data}/>
    </div>
  );
}

export default App;
