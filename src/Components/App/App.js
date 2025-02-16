import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import React, {Component} from "react";
import './App.css'

class App extends Component{

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, done: true, id: Math.random()*10000},
            {label: 'Build App', important: true, done: false, id: Math.random()*10000},
            {label: 'Have a lunch', important: false, done: false, id: Math.random()*10000},
            {label: 'Have a lunch', important: false, done: false, id: Math.random()*10000},
            {label: 'Have a lunch', important: false, done: false, id: Math.random()*10000},
            {label: 'Build App', important: true, done: false, id: Math.random()*10000},
            {label: 'Build App', important: true, done: false, id: Math.random()*10000},
        ],
        filterStatus: "All",
        searchWord: ""
    }


    changeFilterStatus = (status) => {
        this.setState((state)=>{return {filterStatus: status}});

}

    changeSearchWord = (word) => {
        this.setState((state)=>{return {searchWord: word}})
    }

    deleteTask = (id) => {
        const idx = this.state.todoData.findIndex((el) => {return el.id === id})
        let newMas= [];
        let mas1 = this.state.todoData.slice(0, idx);
        let mas2 = this.state.todoData.slice(idx+1, this.state.todoData.length);
        newMas = [...mas1, ...mas2];
        this.setState((state)=>{return {todoData: newMas}});
    }

    addTask = (text) => {
        const newTaskLabel = text;
        const newTaskImportantStatus = false;
        const newTaskId = Math.random()*10000;
        let newMas = [];
        newMas = [...this.state.todoData, {label: newTaskLabel, important: newTaskImportantStatus, id: newTaskId, done: false}];
        this.setState((state) => {
            return {todoData: newMas}
        });
    }

    onChangeDone = (id) => {
        const idx = this.state.todoData.findIndex((el) => {return el.id === id})
        let newMas= [];
        let mas1 = this.state.todoData.slice(0, idx);
        let mas2 = this.state.todoData.slice(idx+1, this.state.todoData.length);

        const updatedTask = {  ...this.state.todoData[idx] , done: !this.state.todoData[idx].done };

        newMas = [...mas1, updatedTask , ...mas2];
        this.setState((state)=>{return {todoData: newMas}});
    }

    onChangeImportant = (id) => {
        const idx = this.state.todoData.findIndex((el) => {return el.id === id})
        let newMas= [];
        let mas1 = this.state.todoData.slice(0, idx);
        let mas2 = this.state.todoData.slice(idx+1, this.state.todoData.length);

        const updatedTask = { ...this.state.todoData[idx] , important: !this.state.todoData[idx].important };

        newMas = [...mas1, updatedTask , ...mas2];
        this.setState((state)=>{return {todoData: newMas}});
    }


render() {
        let style = {width: "350px"};

        const todo = this.state.todoData.filter((el) => {return el.done===false}).length;
            const done = this.state.todoData.length - todo;



            let afterSearchTasks = this.state.todoData.filter((el)=>{return el.label.toUpperCase().includes(this.state.searchWord.toUpperCase())});



            let filteredTasks = afterSearchTasks;

            if(this.state.filterStatus==="Active") filteredTasks = afterSearchTasks.filter((el)=>{return el.done===false;});
            else if(this.state.filterStatus==="Done") filteredTasks = afterSearchTasks.filter((el)=>{return el.done===true;});


    return (
        <div style={style}>
            <AppHeader todo={todo} done={done}/>
            <SearchPanel changeFilterStatus = {this.changeFilterStatus} changeSearchWord={this.changeSearchWord}/>
            <TodoList todoData={filteredTasks}
                      onChangeDone={(n)=>{this.onChangeDone(n)}}
                      onChangeImportant={(n)=>{this.onChangeImportant(n)}}
                      deleteTask={(n)=>{this.deleteTask(n)}} />
            <ItemAddForm addTask={this.addTask}/>
        </div>
    );
}
}

export default App;
