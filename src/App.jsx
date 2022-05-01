import { useEffect, useState } from 'react';

import { collection, onSnapshot, query, where, doc, getDoc, getDocs } from '@firebase/firestore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { db, auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";

import Nav from './components/Nav';
import Welcome from './components/Welcome/Welcome';
import SignIn from './components/SignIn/SignIn';
import NoteBoard from './components/NoteBoard';

import './App.css';


let unsubscribeListeners = [];

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [users, setUsers] = useState([]);

  const [userIdeas, setUserIdeas] = useState([]);
  const [sharedIdeas, setSharedIdeas] = useState([]);

  const [data, setData] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {    
  
    onAuthStateChanged(auth, user => {

      if (user) {

        const usersCollection = collection(db, `/users`);
  
        let unSub = onSnapshot(usersCollection, snapshot => {
          setUsers(snapshot.docs.map(doc =>  doc.data()));
        })

        unsubscribeListeners.push(unSub)
  
        
        const ideasCollection = collection(db, `/users/${user.uid}/ideas`);

        unSub = onSnapshot(ideasCollection, snapshot => {
          setUserIdeas(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})));
          setLoading(false);
        })

        unsubscribeListeners.push(unSub)


        const sharedIdeasCollection = collection(db, `/users/${user.uid}/sharedIdeas`);

        unSub = onSnapshot(sharedIdeasCollection, snapshot => {
          setSharedIdeas(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})));
        })

        unsubscribeListeners.push(unSub)
      }

      setCurrentUser(user)
    })

  }, []);


  useEffect(() => {
    setData([...userIdeas, ...sharedIdeas])
  }, [userIdeas, sharedIdeas])

  
  useEffect(() => {
    if (data) {
      const newData = data.filter(note => searchText ? note.title.toLowerCase().includes(searchText.toLowerCase()) || note.body.includes(searchText) : true);
      setFilteredData(newData);
    }
  } ,[searchText, data]);

  return (
    <div className="App">
      <Nav searchText={searchText} setSearchText={setSearchText} currentUser={currentUser} unsubscribeListeners={unsubscribeListeners} />
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
            <NoteBoard filteredData={filteredData} users={users}/>
        }</>
          :
        <SignIn />
      }
      </div>
    </div>
  );
}

export default App;
