import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {useForm} from 'react-hook-form';

function Todostate({onform}){
   
    const{register, handleSubmit, formState:{errors}}=useForm()
    
        {/*...todos is not there then it replaces the previous values so spread syntax is need in order have track of pervious activities to be known  */}
    
    
    
    return(
        <div className="row-11 row-sm-10 row-md-7">
            <form onSubmit={handleSubmit(onform)}>
                 <div className="mb-3">
                     <lable htmlFor="todo">enter the task  </lable>
                     <input type="text" id="todo" className="form-control" {...register("todo", {required:true})}/>
                     {errors.todo?.type === 'required' && <p className="text-danger">task is required</p>}
                 </div>

                 <button className="btn btn-info w-50">add task </button>
            </form>
                     
            <div className="mt-4">
                <p className="display-4">
                    tasks are!

                </p>
                {/**{
                    todos.map((todo,index) => <h3 className=" text-secondary" key={(index)}>{todo}</h3>)
                } */}
                

                 
            </div>
        </div>
    );
}
 export default Todostate;