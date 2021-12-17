import React, { useState } from 'react';
import Spinner from '../Spinner.gif';
import { useNavigate } from 'react-router-dom';
import BackTop from './BackTop';

function UsersPage({ users, isLoading }) {

const[search, setSearch] = useState('');
const navigate = useNavigate();


return (
    <div className="usersContainer">
        <input type="text" placeholder="Search by job title!" className="inputSearch" onChange={(e) => setSearch(e.target.value)}/>
        <BackTop />

            <div className="usersPage">
                {users && users.filter((value) => { // checks if the value given in the search input is the same as the job title
                    if (search === '') {
                        return value;
                    }

                    else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                        return value;
                    }

                }).map((user) => // maps through the users
                        <div className="userList" key={ user.id }>
                                <img className="animalImage" src={ user.imageUrl + "/" + user.id } onClick={() => navigate("/UserInfo", {state: { 
                                    userIndex: user.id }}) } alt="animal" /> {/* navigates to the user's profile and passes down its id value */}

                                <h3 onClick={() => navigate("/UserInfo", {state: { 
                                    userIndex: user.id }
                                    })}>{ user.prefix + " " + user.name + " " + user.lastName }</h3>

                                <h4>{ user.title }</h4>
                        </div>
                )}

            {isLoading && <img className="spinnerGif" src={ Spinner } alt="Loading..." />} {/* shows the loading gif whenever isLoading is true */}
        </div>
    </div>
  )
}

export default UsersPage
