function UserCrud() {

    return (
        <div className="container-lg">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Task <b>Details</b></h2></div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Assigned User</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Task 1</td>
                                <td>Task 1 desc</td>
                                <td>22.11.2023</td>
                                <td>Pending</td>
                                <td>Omprakash</td>
                                <td>
                                    <button type="button" className="btn btn-outline-info">Update</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default UserCrud;