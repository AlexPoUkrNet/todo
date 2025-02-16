import './TodoListItem.css';
import {Component} from "react";

export default class TodoListItem extends Component{


     render() {

         const {label, deleteTask} = this.props;
         let clazz = "todo-list-item";


         if(this.props.done)
             clazz = clazz + " done";

         if(this.props.important)
             clazz = clazz + " important";



         return (
             <div className={clazz}>
                 <div onClick={this.props.onChangeDone} >
                     {label}
                 </div>
                 <div>
                     <button type="button" onClick={deleteTask}  className="delete">Delete</button>
                     <button type="button" onClick={this.props.onChangeImportant} className="imp">Important</button>

                 </div>
             </div>
         );
     }

};
