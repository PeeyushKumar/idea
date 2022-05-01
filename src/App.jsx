import { useEffect, useState } from 'react';

import { collection, onSnapshot, query, where, doc, getDoc } from '@firebase/firestore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { db, auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";

import Nav from './components/Nav';
import Welcome from './components/Welcome/Welcome';
import SignIn from './components/SignIn/SignIn';
import NoteBoard from './components/NoteBoard';

import './App.css';


let unsubscribeListener = null;

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
  
    onAuthStateChanged(auth, user => {

      if (user) {
  
        const ideasCollection = collection(db, `/users/${user.uid}/ideas`);

        unsubscribeListener = onSnapshot(ideasCollection, snapshot => {
          setData(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})));
          setLoading(false);
        })
      }

      setCurrentUser(user)
    })

  }, []);
  
  useEffect(() => {
    if (data) {
      const newData = data.filter(note => searchText ? note.title.toLowerCase().includes(searchText.toLowerCase()) || note.body.includes(searchText) : true);
      setFilteredData(newData);
    }
  } ,[searchText, data]);

  return (
    <div className="App">
      <Nav searchText={searchText} setSearchText={setSearchText} currentUser={currentUser} unsubscribeListener={unsubscribeListener} />
      <div className='main-container'>
      {
        auth.currentUser ?
        <>{
          loading ? 
            <h1 className="no-data">Loading</h1> :
            data.length === 0 ?
            <Welcome /> :
            filteredData.length === 0 ?
            <FontAwesomeIcon icon={faGhost} style={{position:"absolute", top:"50%", left:"50%", transform:"translateX(-50%) translateY(-50%)", fontSize:"20rem", color:"#dedede"}}/> :
            <NoteBoard filteredData={filteredData} />
        }</>
          :
        <SignIn />
      }
      </div>
    </div>
  );
}

export default App;
