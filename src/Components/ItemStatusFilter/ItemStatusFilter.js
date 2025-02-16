import './ItemStatusFilter.css'
import {Component} from "react";

class ItemStatusFilter extends Component{

   buttonAllClass = "active";
   buttonActiveClass = "inactive";
   buttonDoneClass = "inactive";

   onClickAll = () => {this.props.changeFilterStatus("All")
   this.buttonAllClass = "active";
   this.buttonActiveClass = this.buttonDoneClass = "inactive";
   };

   onClickActive = () => {this.props.changeFilterStatus("Active")
       this.buttonActiveClass = "active";
       this.buttonAllClass = this.buttonDoneClass = "inactive";
   };

   onClickDone = () => {this.props.changeFilterStatus("Done")
       this.buttonDoneClass = "active";
       this.buttonActiveClass = this.buttonAllClass = "inactive";
   };


  render() {
    return (

        <div className="filter">
          <button onClick={this.onClickAll} type="button" className={this.buttonAllClass}>All</button>
          <button onClick={this.onClickActive} type="button" className={this.buttonActiveClass}>Active</button>
          <button onClick={this.onClickDone} type="button" className={this.buttonDoneClass}>Done</button>
        </div>

    );
  }
};

export default ItemStatusFilter;