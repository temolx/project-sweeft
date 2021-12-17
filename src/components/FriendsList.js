import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner.gif';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import BackTop from './BackTop';

function FriendsList({ userIndex, history }) {

    const[friends, setFriends] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[pageTracker, setPageTracker] = useState({
        currentPage: 1,
        size: 20,
      })

    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userIndex}/friends/${pageTracker.currentPage}/20`)
          .then((res) => {
              setFriends((prev) => [...prev, ...res.data.list])
              setIsLoading(false)
              
              console.log(res.data)
          })
      }, [pageTracker]) // eslint-disable-line react-hooks/exhaustive-deps


      window.onscroll = () => {
        const bottomPosition = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    
        if (bottomPosition) {
            setIsLoading(true)
            
            setPageTracker({
              ...pageTracker,
              currentPage: pageTracker.currentPage + 1
            })
        }
      }
      

    return (
        <div className="friendsList">
            <div className="historySection">
                {history.map((view) =>
                    <div className="historyContainer" key={ view.id }>
                        <p className="viewHistory" onClick={() => navigate("/UserInfo", {state: {userIndex: view.id}})} >{ view.prefix + " " + view.name + " " + view.lastName }</p> {/* navigates to the user's profile and passes down its value */}
                        <p> { '>' } </p>
                    </div> )}
            </div>

            <h1>Friends:</h1>
            <BackTop />

            <div className="usersPage">

                {friends && friends.map((friend) => 
                    <div className="userList" key={ friend.id }>

                        <img className="animalImage" src={ friend.imageUrl + "/" + friend.id } onClick={() => navigate("/UserInfo", {state: { 
                                userIndex: friend.id }
                                })} alt="animal" /> {/* navigates to the user's profile and passes down its id value */}
                        
                        <h3 onClick={() => navigate("/UserInfo", {state: { 
                                userIndex: friend.id }
                                })}>{ friend.prefix + " " + friend.name + " " + friend.lastName }</h3>   

                        <h4>{ friend.title }</h4>      
                    </div>
                )}

                {isLoading && <img className="spinnerGif" src={ Spinner } alt="Loading..." />}
            </div>
        </div>
    )
}

export default FriendsList
