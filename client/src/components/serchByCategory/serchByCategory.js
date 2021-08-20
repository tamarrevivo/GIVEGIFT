import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getCategory } from "../../actions/category";
import BusinessOwner from "../businessOwner/businessOwner";
import { connect } from "react-redux";
import SerchByCategoryChild from '../serchByCategoryChild/serchByCategoryChild';

const SerchByCategory = (props) => {
    useEffect(() => { props.getCategory() }, [])
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk")

    return (<><Router>
        <div>
            {props.arr.map((item) => {
                console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk")
                console.log(item.parentCategories)
                return (<div key={item._id}>
              
                    <nav className="nav-wrap">
                        <div className="nav-item">
                            <Link to={`/SerchByCategory/${item.nameCategory} `}>{item.nameCategory} </Link>
                        </div>
                    </nav>
                    <Switch>
                        <Route path={`/SerchByCategory/${item.nameCategory} `}> <SerchByCategoryChild idCategoryChild={item.nameCategory}/> </Route>
                    </Switch>
                </div>)

            })}
        </div>
    </Router></>
    );
}

const myMapToProps = (state) => {
    return { arr: state.categoryPart.categoryArr }
}
export default connect(myMapToProps, { getCategory })(SerchByCategory);












// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { getCategory } from "../../actions/category";
// import BusinessOwner from "../businessOwner/businessOwner";
// import { connect } from "react-redux";

// const SerchByCategory = (props) => {

//     useEffect(() => { props.getCategory() }, [])
//     var x = undefined
//     return (<><Router>
//         <div>
//             {/* {x = undefined} */}
//             {props.arr.map((item) => {
//                 console.log(item);

//                 if (item.parentCategories[0].nameCategory != x)
//                     if (x == undefined) {
//                         x = item.parentCategories[0].nameCategory;
//                         console.log(x);
//                     }
//                 if (x == item.parentCategories[0].nameCategory) {
//                     return (<div key={item._id}>
//                         <nav className="nav-wrap">
//                             <div className="nav-item">
//                                 <Link to={{ pathname: `/SerchByCategory/${item._id} ` }}>{item.parentCategories[0].nameCategory} </Link>
//                             </div>
//                         </nav>
//                         <Switch>
//                             <Route path={{ pathname: `/SerchByCategory/${item._id} ` }}>
//                             </Route>

//                         </Switch>

//                     </div>)
//                 }
//                 var x = item.parentCategories[0].nameCategory
//             })}
//         </div>
//     </Router></>
//     );
// }

// const myMapToProps = (state) => {
//     return { arr: state.categoryPart.categoryArr }
// }
// export default connect(myMapToProps, { getCategory })(SerchByCategory);
