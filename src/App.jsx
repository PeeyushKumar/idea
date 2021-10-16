import { useEffect, useState } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';
import db from './firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import NoteBoard from './components/NoteBoard';
import Nav from './components/Nav';
import Welcome from './components/Welcome/Welcome';
import './App.css';


const App = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => (
      onSnapshot( collection(db, "ideas"), snapshot => {
        setData(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})));
        setLoading(false);
      })
  ), []);

  useEffect(() => {
    if (data) {
      const newData = data.filter(note => searchText ? note.title.toLowerCase().includes(searchText.toLowerCase()) || note.body.includes(searchText) : true);
      setFilteredData(newData);
    }
  } ,[searchText, data]);

  return (
    <div className="App">
      <Nav searchText={searchText} setSearchText={setSearchText} />
      {
        loading ?
        <h1 className="no-data">Loading</h1> :
        data.length === 0 ?
        <Welcome /> :
        filteredData.length === 0 ?
        <FontAwesomeIcon icon={faGhost} style={{position:"absolute", top:"50%", left:"50%", transform:"translateX(-50%) translateY(-50%)", fontSize:"20rem", color:"#dedede"}}/> :
        <NoteBoard filteredData={filteredData} />
      }
    </div>
  );
}

export default App;
