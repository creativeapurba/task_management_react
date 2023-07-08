import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        // console.log(email);
        // console.log(password);
        const user = {
            email: email,
            password: password
        }
        const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		};
		const url = 'http://localhost:3333/login';

        fetch(url, requestOptions)
			.then(console.log)
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
        // console.log(event.target.value);

    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
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
                                <input type="email" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    onChange={(event)=>handleEmailChange(event)} value={email}
                                />
                                <label className="form-label" >Email address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={(event)=>handlePasswordChange(event)} value={password}
                                />
                                <label className="form-label" >Password</label>
                            </div>


                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                    style={{ "paddingLeft": "2.5rem", "paddingRight": "2.5rem" }} onClick={login}>
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Login;