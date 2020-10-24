import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Sidebar.css";
import profilePic from "../../images/Profile_pic.jpg";

const pages = [
    {
        buttonText: 'Home',
        route: '/'
    },
    {
        buttonText: 'Education',
        route: '/education'
    }
]

export const Sidebar = () => {
    const history = useHistory();
    const routeToPage = (route) => {
        history.push(route)
    };

    return <div>
        <img src={profilePic} alt="Profile" className="profilePic" />
        <div className="navButtons">
            {pages.map(page => <button key={page.route} className="navButton" onClick={() => routeToPage(page.route)}>{page.buttonText}</button>)}
        </div>
    </div>
}