import React from 'react';
import { useState } from 'react';
import '../../../public/assets/css/volt.css';
import Api from '../../api';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

export default function Login() {
    document.title = "Login - NewsApp Administrator";
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const login = async (e) => {
        e.preventDefault();

        try {
            const response = await Api.post('/api/login', {
                email: email,
                password: password
            });

            Cookies.set('token', response.data.token);
            Cookies.set('user', JSON.stringify(response.data.user));
            Cookies.set('permissions', JSON.stringify(response.data.permissions));

            toast.success('Login Successfully!', {
                position: "top-right",
                duration: 4000,
            });

            navigate("/dashboard");
        } catch (error) {
            setErrors(error.response.data);
        }
    }

    if (Cookies.get("token")) {
        return navigate("/dashboard");
    }

    return (
        <div className="login-page bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 mt-7">
                        <div className="bg-white shadow rounded">
                            <div className="row">
                                <div className="col-md-4 d-none d-md-block ">
                                    <div className=" h-100 bg-primary text-white text-center d-flex align-items-center justify-content-center  " style={{  }}>
                                        <img src="/assets/images/login.png" width="200" className="mb-3" alt="login-image" />
                                    </div>
                                </div>
                                <div className="col-md-8 pe-0">
                                    <div className="form-left h-100 py-6 px-9">
                                        {errors.message && (
                                            <div className="alert alert-danger">
                                                {errors.message}
                                            </div>
                                        )}
                                        <form onSubmit={login} className="row g-4">
                                            <div className="judul-login"> 
                                                <h2 className='text-center'>Login</h2>
                                            </div>
                                            <div className="col-12">
                                                <label>Email Address</label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="fa fa-envelope"></i></div>
                                                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" />
                                                </div>
                                                {errors.email && (
                                                    <div className="alert alert-danger mt-2">
                                                        {errors.email[0]}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col-12">
                                                <label>Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="fa fa-lock"></i></div>
                                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                                                </div>
                                                {errors.password && (
                                                    <div className="alert alert-danger mt-2">
                                                        {errors.password[0]}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col-sm-6 col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                                    <label className="form-check-label" htmlFor="inlineFormCheck">Remember me</label>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-6">
                                                <button type="submit" className="btn btn-primary px-4 float-end">LOGIN</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
