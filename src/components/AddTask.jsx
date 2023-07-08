import { useState } from "react";

function AddTask() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState("Select One");
    const [assignedUser, setAssignedUser] = useState("Select One");

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


    function addTask() {
        // console.log(title);
        // console.log(desc);
        // console.log(dueDate);
        // console.log(status);
        // console.log(assignedUser);
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
			.then(console.log)
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
                        <option>User 1</option>
                        <option>User 2</option>
                        <option>User 3</option>
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