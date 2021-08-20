import Header from "../header/header"
import giveGift from './giveGift.png'



const About = () => {
    return ( <div>
    <Header></Header>
    <div className="div2"> <img className="giveGift" src={giveGift}></img> </div> 

    <h3>give gift</h3>
    </div> );
}
 
export default About;