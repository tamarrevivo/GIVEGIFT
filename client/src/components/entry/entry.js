import { connect } from 'react-redux';
import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import NewUser from "../newUser/newUser";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import giveGift from './giveGift.png'
import './entry.scss'

let nameUser;
let password;
const createUser = () => {
  let newUser = { nameUser, password };
  //props.postBusinessOwner(newUser);
  alert("הכנניסה עברה בהצלחה!!!")
}

const Entry = () => {
  return(<div className="DivAll">
  <div className="div1">
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='rigth'
            label='שם משתמש'
            placeholder='שם משתמש'
            onChange={(e) => { nameUser = e.target.value }}
          />
          <Form.Input
            icon='lock'
            iconPosition='rigth'
            label='סיסמה '
            placeholder='סיסמה '
            type='password'
            onChange={(e) => { password = e.target.value }}

          />

          <Router>
            <Link to="/NewUser">

              <h4>אין לך חשבון? - הרשמה</h4>
            </Link>
            <Route path="/NewUser">
              <NewUser></NewUser>
            </Route>
            <br></br></Router>
          <Button content='כניסה' primary onClick={createUser} />
        </Form>
      </Grid.Column>

    </Grid>
    </div>
    <div className="div2"> <img className="giveGift" src={giveGift}></img> </div> 
     

  </div>

  )
  

  


}
export default Entry
