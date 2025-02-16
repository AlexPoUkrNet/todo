import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../src/Components/App/App";
import {jsx} from "react/jsx-runtime";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);




const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};


const personClone = {
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age
}

const personClone2 = {
    ...person
}



