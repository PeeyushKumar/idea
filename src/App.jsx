import { collection, onSnapshot } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import NoteBoard from './components/NoteBoard';
import db from './firebase';
import Nav from './components/Nav';

const App = () => {

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => (
      onSnapshot( collection(db, "ideas"), snapshot => {
        setData(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})));
      })
  )
, []);

  useEffect(() => {
    const newData = data.filter(note => searchText ? note.title.includes(searchText) || note.body.includes(searchText) : true);
    setFilteredData(newData);
  } ,[searchText, data]);

  return (
    <div className="App">
      <Nav searchText={searchText} setSearchText={setSearchText} />
      <NoteBoard filteredData={filteredData} />
    </div>
  );
}

export default App;
