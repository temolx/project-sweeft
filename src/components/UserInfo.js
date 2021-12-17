import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner.gif';
import axios from 'axios';
import homePage from '../images/homePage.png'
import { useLocation } from 'react-router-dom'
import FriendsList from './FriendsList';

function UserInfo() {

    const location = useLocation(); // "catches" the property of id we passed down using useNavigate() in UsersPage
    const[singleUser, setSingleUser] = useState({});
    const[isLoading, setIsLoading] = useState(true); 
    const[history, setHistory] = useState([]); // keeps track of the profiles the user viewed

useEffect(() => {
    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${location.state.userIndex}`)
      .then((res) => {
          setSingleUser(res.data)
          setIsLoading(false)
          setHistory((prev) => [...prev, res.data]) // adds new data to the view history while also keeping the previous ones

          console.log(res.data)
      })
  }, [location.state.userIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!isLoading) {
    return (
        <div>
            {singleUser && <div className="mainInfoContainer">
                <img className="personalPageImage" src={ singleUser.imageUrl + "/" + singleUser.id } alt="animal" />

                <div className="fieldContainer">
                    <fieldset className="infoField">
                        <legend>Info</legend>
                        <h3 className="userName">{ singleUser.prefix + " " + singleUser.name + " " + singleUser.lastName}</h3>
                        <h3 className="positionTitle">{ singleUser.title }</h3>
                        <h3 className="personalInfo">Email: { singleUser.email }</h3>
                        <h3 className="personalInfo">IP Address: { singleUser.ip }</h3>
                        <h3 className="personalInfo">Job Area: { singleUser.jobArea }</h3>
                        <h3 className="personalInfo">Job Type: { singleUser.jobType }</h3>
                    </fieldset>

                    <fieldset className="addressField">
                        <legend>Address</legend>
                        <h3>{ singleUser.company.name + " " + singleUser.company.suffix }</h3>
                        <h3 className="personalInfo">City: { singleUser.address.city }</h3>
                        <h3 className="personalInfo">Country: { singleUser.address.country }</h3>
                        <h3 className="personalInfo">State: { singleUser.address.state }</h3>
                        <h3 className="personalInfo">Street Address: { singleUser.address.streetAddress }</h3>
                        <h3 className="personalInfo">ZIP: { singleUser.address.zipCode }</h3>
                    </fieldset>
                </div>
            </div>}
            
            <FriendsList userIndex={ singleUser.id } key={ singleUser.id } history={ history } /> {/* The friends list component */}
        </div>
    )
  }
  
  else {
    return <img className="spinnerGif" src={ Spinner } alt="Loading..." />
  }
}


export default UserInfo
