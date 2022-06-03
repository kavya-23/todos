import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTasks } from "@fortawesome/free-solid-svg-icons";
function Todolist({todos}){
    return(
        <div>
            <h3>
                
            <FontAwesomeIcon icon={faTasks} />
                todolist is</h3>
            {
                todos.map((task,index)=><h3 className="text-info" key={index}>{task}</h3>)
            }

        </div>
    );
}
 export default Todolist;