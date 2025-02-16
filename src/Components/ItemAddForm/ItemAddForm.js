import './ItemAddForm.css'
import {Component} from "react";

class ItemAddForm extends Component{

    state = {
        label: ""
    }

onInputChange = (e) => {
  this.setState({label: e.target.value })
}

onSubmit = (e) => {
        e.preventDefault();
     this.props.addTask(this.state.label);
     this.setState( {label: ""});
}

render() {
    return (
        <div className = 'item-add-form-wrapper' >
        <form className="item-add-form" onSubmit={this.onSubmit}>
            <input type="text"
                   onChange={this.onInputChange}
                   value={this.state.label}
                   placeholder="What needs to be done"></input>
            <button>Add Item</button>
        </form>
        </div>
    );
}
}

export default ItemAddForm;