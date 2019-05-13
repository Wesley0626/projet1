import React from 'react';
import AddPost from './Components/AddPost'
import Panel from './Components/Panel'
import './App.css';


function App() {
  return (
    <div className="App">
     <Panel />
     <AddPost />
     <Panel />
    </div>
  );
}

export default App;
