import { useState } from "react";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }


    function register() {

        const user = {
            name: name,
            email: email,
            password: password
        }
        const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		};
		const url = 'http://localhost:3333/register';

        fetch(url, requestOptions)
			.then(console.log)

    }

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <div className="form-outline mb-4">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="Enter your Name"
                                    onChange={(event) => { handleNameChange(event) }} value={name}
                                />
                                <label className="form-label">Name</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    onChange={(event) => handleEmailChange(event)} value={email}
                                />
                                <label className="form-label">Email address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={(event) => handlePasswordChange(event)} value={password}
                                />
                                <label className="form-label">Password</label>
                            </div>


                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                    style={{ "paddingLeft": "2.5rem", "paddingRight": "2.5rem" }} onClick={register}>
                                    Register
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Register;