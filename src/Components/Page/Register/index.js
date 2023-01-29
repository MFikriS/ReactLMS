import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import './index.css';


const Register = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [url, setUrl ] = useState("http://localhost:8088/api/user-management/register");

    useEffect( () => {
        
        
    })
    
    const regis = (e) => {
        console.log(email);
        console.log(password);
        console.log(birthdate);
        console.log(fullname);
        console.log(address);
        e.preventDefault();
        axios.post(url, {
            id: null,
            email: email,
            password: password,
            birthDate: birthdate,
            fullName: fullname,
            address: address
        }).then(res => console.log(res.data))
    }

    return (
               <>
               <section id="wrapper" class="login-register login-sidebar">
                <div class="login-box card">
                        <div class="card-body">
                        <form class="form-horizontal form-material" id="loginform">
                            <h3>Learning Management System</h3>  
                            <h4 class="box-title m-t-40 m-b-0">Register Employee</h4> 
                            <div class="form-group m-t-20">
                                <div class="col-xs-12">
                                    <input class="form-control" type="text" required="" placeholder="Fullname"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <input class="form-control" type="email" required="" placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <input class="form-control" type="text" required="" placeholder="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group ">
                                <label for="birthdate">Birthdate</label><br></br>
                                    <div class="col-xs-12">
                                        <input class="form-control" type="date" required="" placeholder="Birthdate"
                                        value={birthdate}
                                        onChange={(e) => setBirthdate(e.target.value)}
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
                            <div class="form-group text-center m-t-20">
                                <div class="col-xs-12">
                                    <button class="btn btn-success btn-lg btn-block text-uppercase waves-effect waves-light" type="submit"
                                    onClick={regis}
                                    >Sign Up</button>
                                </div>
                            </div>
                            <div class="form-group m-b-0">
                                <div class="col-sm-12 text-center">
                                    <p>Already have an account? <a href="/login" class="text-primary m-l-5"><b>Sign In</b></a></p>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </section>
               </> 
    )
}

export default Register;