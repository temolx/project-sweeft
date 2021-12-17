import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, HashRouter } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import UserInfo from './components/UserInfo';

function App() {

  const[users, setUsers] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  const[pageTracker, setPageTracker] = useState({ // keeps track of page numbers
    currentPage: 1,
    size: 20,
  })


  useEffect(() => {
    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageTracker.currentPage}/20`)
      .then((res) => {
          setUsers((prev) => [...prev, ...res.data.list]) // adds information to the array while also keeping the previous ones
          setIsLoading(false)
          
          console.log(res.data)
      })
  }, [pageTracker])


  window.onscroll = () => { // page number increments when user reaches the bottom of the page
    const bottomPosition = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight; // bottom reached.

    if (bottomPosition) {
        setIsLoading(true) // we set isLoading to true before useState() function sets it to false once again (once the new data is fetched)
        
        setPageTracker({
          ...pageTracker,
          currentPage: pageTracker.currentPage + 1
        })
    }
  }


  return (
    <HashRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<UsersPage users={users} isLoading={isLoading} />} />
          <Route path="/UserInfo" element={<UserInfo />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;