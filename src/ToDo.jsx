import React,{useState} from 'react'

function ToDo(){
    const [tasks,setTasks]=useState(["Eat Breakfast","Walk the dog"]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newTask.trim()!="") {//SO THAT THEY DONT ENTER " " AS A TASK
            setTasks(
                t=>[...t,newTask]
            );
            setNewTask("");
        }
        
    }

    function clearList(){
        const updatedTasks=[];
        setTasks(updatedTasks);
    }

    function deleteTask(index){
        const updatedTasks=tasks.filter((elements,i)=>(i!=index))
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
        
    }

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index+1]]=[updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return (
        <>
            <div className="to-do-list">
                <h1>To-Do-List</h1>
                <div>
                    <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}></input>
                    <button className="add-button" onClick={addTask}>Add</button>
                    <button className="del-button" onClick={clearList}>Clear All</button>
                </div>
                <ol>
                    {tasks.map((tasks,index)=>
                        <li key={index}>
                            <span className="text">{tasks}</span>
                            <button className="delete-btn" onClick={(()=>deleteTask(index))}>Delete</button>
                            <button className="move-btn" onClick={(()=>moveTaskUp(index))}>☝️</button>
                            <button className="move-btn" onClick={(()=>moveTaskDown(index))}>👇</button>
                        </li>
                    )}
                </ol>
            </div>
        </>
    )

}

export default ToDo