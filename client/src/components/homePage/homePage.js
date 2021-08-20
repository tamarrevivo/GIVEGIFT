import businessOwner from "../businessOwner/businessOwner"
import NewUser from "../newUser/newUser"
// import { Link } from 'react-router-dom'
// import { Route, BrowserRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../header/header"
import menWithGifts from './photoHomePage/menWithGifts.jpg'
import partGreen from './photoHomePage/partGreen.png'
import Entry from "../entry/entry"
import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './homePage.scss'

const HomePage = () => {

    const button = {
        "backgroundColor": "#81005F", "color": "white", "minWidth": "128px", "lineHeight": "1.50", "borderRadius": "30px"
        , "marginLeft": "7.2vw", "marginTop": "22vh", "fontFamily": "guttmanYadBrush"
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));
    return (<div>
        <Header></Header>
        <div className="imgPartGreen">
            <div className="arrowLeft"></div>

            <p className="p"> רכישת רעיונות למתנה בצורה הכי יעילה ואפקטיבית
        <br />
                כדי שרק תרצו לתת</p>

            <Router>
                <div>
                    <nav>
                        <Link to="/Entry" >
                            <Button style={button}>כניסה</Button>
                        </Link>
                        <Link to="/NewUser">
                            <Button style={button}>הרשמה</Button>
                        </Link>
                    </nav>
                    <Switch>
                        <Route path="/Entry">
                            <Entry></Entry>
                        </Route>
                        <Route path="/NewUser">
                            <NewUser></NewUser>
                        </Route>
                    </Switch>
                </div>
            </Router>

            {/* 
            <Router>
                <Link to="/Entry"  target="_blank">
                    <Button style={button}>כניסה</Button>
                </Link>
                <Route path="/Entry">
                    <Entry></Entry>
                </Route>

                <Link to="/NewUser"  target="_blank">
                    <Button style={button}>הרשמה</Button>
                </Link>
                <Route path="/NewUser">
                    <NewUser></NewUser>
                </Route>
            </Router> */}

        </div>

        <img className="imgMenWithGift" src={menWithGifts}></img>

    </div>
    )
}
export default HomePage;




