import React from 'react'
import { Link } from 'react-router-dom';

class Register extends React.Component {
    render() {
        return (
            <div className="modal fade registermodal" id="modalJoin" tabIndex="-1" role="dialog" aria-labelledby="modalJoin" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header loginregisteration-modal-header">
                            <h5 className="modal-title registeration-modal-title">Register Your Account</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="loginregisteration-group">
                                            <button type="submit" className="google-submit"><i className="fa fa-facebook" aria-hidden="true"></i>Sign Up With Facebook</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="login-registeration-or-shape">
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="or-shape"> <span>Or</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form action="#">
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="loginregisteration-group">
                                            <button type="submit" className="email-submit"><i className="fa fa-envelope-o" aria-hidden="true"></i>Sign Up With Email</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="have-an-account">
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="loginregisteration-group p-2"> <span>Already have an account <Link to="#">Login</Link></span>
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
}
export default Register
