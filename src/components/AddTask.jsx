import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {

    const navigate = useNavigate();
    
    const [users, setUsers] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState("Select One");
    const [assignedUser, setAssignedUser] = useState("Select One");

    const url = "http://localhost:3333/users";

    const fetchUsers = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            if (data.length > 0) {
                setUsers(data);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchUsers(url);
    }, [])


    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    function handleDescChange(event) {
        setDesc(event.target.value);
    }
    function handleDueDateChange(event) {
        setDueDate(event.target.value);
    }
    function handleStatusChange(event) {
        setStatus(event.target.value);
    }
    function handleAssignedUserChange(event) {
        setAssignedUser(event.target.value);
    }

    function createUserOption(user){
        return(
            <option key={user._id}>{user.name}</option>
        )
    }


    function addTask() {
        
        const newTask = {
            title: title,
            desc: desc,
            dueDate: dueDate,
            status: status,
            assignedUser: assignedUser
        };
        const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTask)
		};
		const url = 'http://localhost:3333/addtask';

        fetch(url, requestOptions)
			.then(()=>{
                alert("Task added")
            })
        navigate("/tasks");
    }

    return (
        <div style={{ padding: "50px" }}>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>Task Title</label>
                    <input type="text" className="form-control" placeholder="Task Title"
                        onChange={(event) => { handleTitleChange(event) }} value={title}
                    />
                </div>
            </div>
            <div className="form-group">
                <label>Task Description</label>
                <input type="text" className="form-control"
                    onChange={(event) => { handleDescChange(event) }} value={desc}
                />
            </div>
            <div className="row">
                <div className="form-group col-md-4">
                    <label>Due Date</label>
                    <input type="date" className="form-control"
                        onChange={(event) => { handleDueDateChange(event) }} value={dueDate}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label>Status</label>
                    <select id="inputStatus" className="form-control"
                        onChange={(event) => { handleStatusChange(event) }} value={status}
                    >
                        <option>Select One</option>
                        <option>Done</option>
                        <option>Partially</option>
                        <option>Pending</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label>Assigned User</label>
                    <select className="form-control"
                        onChange={(event) => { handleAssignedUserChange(event) }} value={assignedUser}
                    >
                        <option>Select One</option>
                        {users.map(user=>createUserOption(user))}
                    </select>
                </div>
            </div>
            <button className="btn btn-primary"
                style={{ marginTop: "20px" }} onClick={addTask}
            >Add Task</button>
        </div>
    )
}
export default AddTask;