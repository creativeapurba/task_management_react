import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserCrud() {

    const [tasks, setTasks] = useState([]);
    const tasksUrl = "http://localhost:3333/tasks";

    const navigate = useNavigate();

    const fetchTasks = async (taskUrl) => {
        try {
            const response = await fetch(taskUrl);
            const data = await response.json();
            console.log(data);
            if (data.length > 0) {
                setTasks(data);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchTasks(tasksUrl);
    }, [])
    function handleUpdate(task){
        navigate('/updatetask', {state: {task:task}})
    }
    function handleDelete(_id){
        const requestOptions = {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({_id:_id})
		};
		const url = 'http://localhost:3333/deletetask';

        fetch(url, requestOptions)
			.then(console.log)
        alert("Deleted");
        const newTasks = tasks.filter(task=>task._id !== _id);
        setTasks(newTasks);
        // navigate("/tasks");

    }

    function createTaskRow(task) {
        // console.log(task.title);

        return (
            <div className="row" style={{ padding: "10px" }} key={task._id}>
                <h4 className="col">{task.title}</h4>
                <h4 className="col">{task.desc}</h4>
                <h4 className="col">{task.dueDate}</h4>
                <h4 className="col">{task.status}</h4>
                <h4 className="col">{task.assignedUser}</h4>
                <div className="col">
                    <button type="button" className="btn btn-outline-info" onClick={e=>handleUpdate(task)}>Update</button>
                    <button type="button" className="btn btn-danger" onClick={e=>handleDelete(task._id)}>Delete</button>
                </div>
                <hr />

            </div>

        )
    }


    return (
        <div className="container">
            <div className="">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Task <b>Details</b></h2></div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i><Link to="/addtask"> Add New</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ padding: "10px" }}>
                        <h4 className="col">Title</h4>
                        <h4 className="col">Description</h4>
                        <h4 className="col">Due Date</h4>
                        <h4 className="col">Status</h4>
                        <h4 className="col">Assigned User</h4>
                        <h4 className="col">Action</h4>
                        <hr />
                    </div>
                    {tasks.map(task => createTaskRow(task))}
                </div>
            </div>
        </div>
    )
}
export default UserCrud;