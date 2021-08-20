import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import BusinessOwner from './businessOwner/businessOwner';
import Category from './category';


import DropdownExampleRemote from './functions/DropdownExampleRemote';
import category from './category';
import businessOwner from './businessOwner/businessOwner';
import NewUser from './newUser/newUser';
import HomePage from './homePage/homePage';
import ASW from './header/header';
import Entry from './entry/entry';
import About from './about/about';
import greetingCard from './greetingCard/greetingCard';

//function App(props) {
function App() {
  return (

//       {/* {props.dialoge && <Dialoge />} 
// <BusinessOwner/>  
//  <Category/>    
//  <User></User>  
//  <NewUser></NewUser>
  <HomePage></HomePage> 
//  <Entry></Entry>
// <About></About> 
// <greetingCard></greetingCard>

  );
}
// const myStateToProps = state => {
//    return {
//     dialoge: state
//   }
//  }
//  export default connect(myStateToProps)(App)
export default App;