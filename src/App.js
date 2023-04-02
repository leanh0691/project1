import React,{ useState } from 'react';
import './App.css';
import List from './Components/List';
import Data from './Data';
function App() {
  const [people,setPeople] = useState(Data)
  return (
    <div className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={()=>setPeople([])}>Clear All </button>
      
    </div>
  )}

export default App;
