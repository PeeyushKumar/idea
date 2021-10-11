import './App.css';
import NoteBoard from './components/NoteBoard';
import { useEffect, useState } from 'react';

const App = () => {

  const [columns, setColumns] = useState(1);

  useEffect(() => {

    const calculateColumns = () => {
      const noteWidth = 220;
      const margin = 20;

      const columns = Math.min(5, Math.floor(window.innerWidth / (noteWidth+margin)));
      setColumns(columns);

      const r = document.querySelector(':root');
      r.style.setProperty('--note-width', `${noteWidth}px`);
    }

    window.addEventListener('resize', calculateColumns);
    calculateColumns();

  }, []);
  

  return (
    <div className="App">
      <NoteBoard columns={columns} />
    </div>
  );
}

export default App;
