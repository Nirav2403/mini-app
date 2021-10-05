import React from 'react'
import '../MyComponentCSS/SignUp.css'

export default function SignUp() {
    return (
        <div>
            <div className="container">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
                        <p>
                            <a href className="btn btn-block btn-twitter mx-1"> <i className="fa fa-twitter" /> &nbsp; Login via Twitter</a>
                            <a href className="btn btn-block btn-facebook"> <i className="fa fa-facebook-f" /> &nbsp; Login via facebook</a>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
                        <form>
                            <div className="form-group input-group my-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize:"2rem"}}> <i className="fa fa-user" /> </span>
                                </div>
                                <input name className="form-control" placeholder="Full name" type="text" />
                            </div> {/* form-group// */}
                            <div className="form-group input-group my-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize:"2rem"}}> <i className="fa fa-envelope" /> </span>
                                </div>
                                <input name className="form-control" placeholder="Email address" type="email" />
                            </div> {/* form-group// */}
                            <div className="form-group input-group my-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize:"2rem"}}> <i className="fa fa-phone" /> </span>
                                </div>
                                <select className="form-control " style={{ maxWidth: '120px' }}>
                                    <option selected>+91</option>
                                    <option value={1}>+85</option>
                                    <option value={2}>+198</option>
                                    <option value={3}>+701</option>
                                </select>
                                <input name  placeholder="Phone number" type="text" />
                            </div> 
                            <div className="form-group input-group my-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize:"2rem"}}> <i className="fa fa-building" /> </span>
                                </div>
                                <select className="form-control">
                                    <option selected> Select job type</option>
                                    <option>Designer</option>
                                    <option>Manager</option>
                                    <option>Accaunting</option>
                                </select>
                            </div> 
                            <div className="form-group input-group my-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize:"2rem"}}> <i className="fa fa-lock" /> </span>
                                </div>
                                <input className="form-control" placeholder="Create password" type="password" />
                            </div> {/* form-group// */}
                            <div className="form-group input-group my-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize:"2rem"}}> <i className="fa fa-lock" /> </span>
                                </div>
                                <input className="form-control" placeholder="Repeat password" type="password" />
                            </div> 
                            <div className="form-group ">
                                <button type="submit" className="btn btn-primary btn-block w-10 mx-auto" > Create Account</button>
                            </div>
                            <p className="text-center">Have an account? <a href>Log In</a> </p>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    )
}
