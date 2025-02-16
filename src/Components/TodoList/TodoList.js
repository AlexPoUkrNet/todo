import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'

const TodoList = ({todoData, deleteTask, onChangeDone, onChangeImportant}) => {

    const elements = todoData.map((el)=>{
        const {id, ...itemProps} = el;
        return <div key={el.id} className='list-item'><TodoListItem {...el}
                                                                    onChangeDone={()=>onChangeDone(id)}
                                                                    onChangeImportant={()=>onChangeImportant(id)}
                                                                    deleteTask={()=>deleteTask(id)}/></div>
    });



    return (
        <div className="todo-list">
            {elements}
        </div>
    );
}

export default TodoList;