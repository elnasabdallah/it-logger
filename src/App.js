import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import 'materialize-css/dist/css/materialize.min.css';
import AddBtn from './components/layout/AddBtn';
import M from 'materialize-css/dist/js/materialize.min.js';
import Logs from './components/Logs/Logs';
import AddLogModal from './components/Logs/AddLogModal';
import EditLogModal from './components/Logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  useEffect(() => {
    //this initailizes JS of materialize
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <React.Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </React.Fragment>
    </Provider>
  );
};

export default App;
