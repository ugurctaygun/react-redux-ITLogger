import React, {useEffect} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/Logs/Logs'
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/Logs/AddLogModal';
import EditLogModal from './components/Logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

function App() {
  useEffect(() => {
    //init materialize js
    M.AutoInit();
  });

  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <Logs />
        <AddBtn />
        <AddTechModal />
        <TechListModal />
        <EditLogModal />
        <AddLogModal />
      </div>
    </div>
  );
}

export default App;
