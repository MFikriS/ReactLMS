import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import './index.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    
    const navigate = useNavigate();
    const [url, setUrl ] = useState("http://localhost:8088/api/user-management/login");

    useEffect( () => {
        
        
    })
    
    const auth = (e) => {
        console.log(email);
        console.log(password);
        e.preventDefault();
        axios.post(url, {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response.status)
            if(response.status === 200){
                alert('Login success');
                localStorage.setItem("authenticated", true);
                navigate("/dashboard");
            } else {
                alert('Login failed');
                navigate("/login");
            }
        })
    }

    return (
        <>
        <section id="wrapper" class="login-register login-sidebar">
            <div class="login-box card">
                <div class="card-body">
                <form class="form-horizontal form-material" id="loginform" action="index.html">
                        <h1>Learning Management System</h1>
                        <div class="form-group m-t-20">
                                <div class="col-xs-12">
                                    <input class="form-control" type="text" required="" placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <input class="form-control" type="password" required="" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>  
                            
                            <div class="form-group">
                                <div class="col-md-12">
                                    <div class="checkbox checkbox-primary pull-left p-t-0">
                                        <input id="checkbox-signup" type="checkbox"/>
                                        <label for="checkbox-signup"> Remember me </label>
                                    </div>
                                    <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right"><i class="fa fa-lock m-r-5"></i> Forgot password?</a> </div>
                                </div>
                            <div class="form-group text-center m-t-20">
                                <div class="col-xs-12">
                                    <button class="btn btn-success btn-lg btn-block text-uppercase waves-effect waves-light" type="submit"
                                    onClick={auth}
                                    >Log In</button>
                                </div>
                            </div>
                            <div class="form-group m-b-0">
                                <div class="col-sm-12 text-center">
                                    <p>Don't have an account? <a href="register2.html" class="text-primary m-l-5"><b>Sign Up</b></a></p>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default Login;