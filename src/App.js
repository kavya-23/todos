import Todostate from './todo/Todostate';
import Todolist from './todo/Todolist';
import Todocount from './todo/Todocount';
import {useState} from "react";
import './App.css';


function App() {
  
  const[todos, setTodos]=useState([])


 const onform=(todoobj)=>{
     console.log(todoobj)
     setTodos([...todos,todoobj.todo])
     {/*...todos is not there then it replaces the previous values so spread syntax is need in order have track of pervious activities to be known  */}
 }
  return (
    <div className='row container text-center'>
      <div className='col-sm-4'>
             <Todostate onform={onform}/>
      </div>


        <div className='col-sm-4'>
             <Todolist todos={todos}/>
        </div>
        
        <div className='col-sm-4'>
            <Todocount todos={todos}/>
        </div>
        

   
    
    </div>
  );
}

export default App;
