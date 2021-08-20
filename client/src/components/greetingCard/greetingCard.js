import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getGreetingCard } from "../../actions/greetingCard";
import BusinessOwner from "../businessOwner/businessOwner";
import { connect } from "react-redux";
// import SerchByCategoryChild from '../serchByCategoryChild/serchByCategoryChild';
import About from "../about/about";

const GreetingCard = (props) => {
    useEffect(() => { props.getGreetingCard() }, [])
    console.log("oooooooooooo")

    return (<><Router>
        <div>
            {props.arr.map((item) => {
                console.log("oooooooooo")
                console.log(item.nameLetter)
                return (<div key={item._id}>
                
                    <nav className="nav-wrap">
                        <div className="nav-item">
                            <Link to={`/GreetingCard/${item.nameLetter} `}>{item.nameLetter} </Link>
                        </div>
                    </nav>
                    <Switch>
                        <Route path={`/GreetingCard/${item.nameLetter} `}> <About/> </Route>
                    </Switch>
                </div>)

            })}
        </div>
    </Router></>
    );
}

const myMapToProps = (state) => {
    console.log("llllllllllllllll");
    debugger;
    return { arr: state.greetingCardPart.greetingCardArr }
}
export default connect(myMapToProps, { getGreetingCard })(GreetingCard);



// const GreetingCard = () => {
//     return ( <div>

//     </div> );
// }
 
// export default GreetingCard;