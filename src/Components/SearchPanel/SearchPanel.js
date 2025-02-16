import React from "react";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import './SearchPanel.css'

const SearchPanel = (props) => {

    let onInputChange = (e) => {

        props.changeSearchWord(e.target.value);
    }

    return (
        <div className="search-panel">

        <div><input placeholder="search" onChange={onInputChange}/></div>

        <div><ItemStatusFilter changeFilterStatus={props.changeFilterStatus}/></div>
        </div>
    );
}

export default SearchPanel;