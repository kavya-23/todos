import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
function Todocount({todos}){
    return(
        <div>
             <h5>no.of tasks to be done </h5>
             <h2>{todos.length}</h2>
        </div>
    );
}
 export default Todocount;