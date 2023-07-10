import { useEffect, useState } from "react";
import TaskTree from "./TaskTree";

function AdminDashboard(){
    const [tasks, setTasks] = useState([]);
    const tasksUrl = "http://localhost:3333/tasks";

    const fetchTasks = async (taskUrl) => {
        try {
            const response = await fetch(taskUrl);
            const data = await response.json();
            // console.log(data);
            if (data.length > 0) {
                setTasks(data);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchTasks(tasksUrl);  
    },[])
    return (
        <TaskTree 
            task = {tasks}
        />
    )
}

export default AdminDashboard;