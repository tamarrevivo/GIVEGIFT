import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getCategory } from "../../actions/category";
import { connect } from "react-redux";
import axios from "axios"
import { expressionStatement } from "@babel/types";
const SerchByCategoryChild = (props) => {

    const [arr, setArr] = useState(null);
    //פונקציה שמביאה מהשרת את כל התתי קטגוריות
    const GetAllCategoriesChild=()=>{
        axios.get("http://localhost:5000/categories/"+props.idCategoryChild).then(succ=>setArr(succ.data));
    }
    useEffect(() => { 
        //props.getCategory() 
        GetAllCategoriesChild();
    }, [])
    return (<><Router>
        <div>
            {arr?arr.map((item) => {
                return (<div key={item._id}>
                    <nav className="nav-wrap">
                        <div className="nav-item">
                            <Link to={{ pathname: `/serchByCategoryChild/${item._id} ` }}>{item.nameCategory} </Link>
                        </div>
                    </nav>
                    <Switch>
                        <Route path={{ pathname: `/serchByCategoryChild/${item._id} ` }}>
                        </Route>
                    </Switch>
                </div>)
            }):null}
        </div>
    </Router></>
    );
}

const myMapToProps = (state) => {
    return {  }
}
export default connect(myMapToProps, { getCategory })(SerchByCategoryChild);
