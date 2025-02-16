import React from "react";
import './AppHeader.css'

const AppHeader = (props) =>{
    return (

        <div className="app-header">
            <div>
                <h1>My Todo List</h1>
            </div>
            <div>
                <h1>{props.todo} more to do, {props.done} done</h1>
            </div>

        </div>

    );
}

export default AppHeader;