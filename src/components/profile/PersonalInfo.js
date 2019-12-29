import React from 'react'
import Axios from 'axios';
import { API_URL } from '../../store/actions/types';
import { connect } from 'react-redux';
import { updateProfilePhoto } from '../../store/actions/profileActions'
import Edit from './Edit';


class PersonalInfo extends React.Component {
    state = {
        id: '',
        full_name: '',
        email: '',
        contact_no: '',
        address: '',
        gender: '',
        age: '',
        image: '',
        isUpload: false,
        isModalOpen: false,
    }
    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
        this.getProfileInfo()
    }
    componentDidMount() {
        this.getProfileInfo()
    }
    getProfileInfo = () => {
        Axios.get(`${API_URL}api/profile/${this.props.auth.token}`)
            .then(res => {
                if (Object.keys(res.data).length !== 0) {
                    this.setState({
                        id: res.data[0]['id'],
                        full_name: res.data[0]['full_name'],
                        email: res.data[0]['email'],
                        contact_no: res.data[0]['contact_no'],
                        address: res.data[0]['address'],
                        gender: res.data[0]['gender'],
                        age: res.data[0]['age'],
                        image: res.data[0]['image'] && API_URL + res.data[0]['image'],
                    })
                }
            })
            .catch(err => console.log(err.response))
    }
    fileUploadHandler = event => {
        let reader = new FileReader()
        let _this = this
        reader.onload = function (r) {
            _this.setState({
                image: r.target.result,
                isUpload: true,
            });
        }
        reader.readAsDataURL(event.target.files[0]);
    }
    fileSubmitHandler = () => {
        this.props.updateProfilePhoto({ image: this.state.image }, this.props.auth.user.id)
        this.setState({
            isUpload: false,
        });
    }
    render() {
        let { full_name, email, contact_no, address, gender, age, image, isUpload } = this.state
        return (
            <div className="profile-area">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <div className="profile-img">
                            <img src={image ? image : `https://dummyimage.com/300/09f/fff.png`} alt="ProfileImage" />
                            <div className="file btn btn-lg btn-primary"> <i className="fa fa-image" /> Change Photo
                                    <input type="file" name="file" onChange={this.fileUploadHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <div className="profile-data-tab-content">
                            <div className="table-content">
                                <h3>Personal Information :</h3>
                                <div className="row">
                                    <div className="col-md-6"> <label>Email Address</label> </div>
                                    <div className="col-md-6">
                                        <p>{email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6"> <label>Contact Number</label> </div>
                                    <div className="col-md-6">
                                        <p>{contact_no}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6"> <label>Gender</label> </div>
                                    <div className="col-md-6">
                                        <p>{gender}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6"> <label>Age</label> </div>
                                    <div className="col-md-6">
                                        <p>{age}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6"> <label>Address</label> </div>
                                    <div className="col-md-6">
                                        <p>{address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row user-short-description">
                    <div className="col-md-8 col-lg-8">
                        <div className="profile-head">
                            <h5>{full_name}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        {isUpload ?
                            <button type="submit" className="profile-edit-btn" onClick={this.fileSubmitHandler}><i className="fa fa-upload" /> Upload</button>
                            : <button type="submit" className="profile-edit-btn" onClick={() => this.openModal()}><i className="fa fa-pencil-square-o" /> Edit Profile</button>
                        }
                        <Edit
                            isOpen={this.state.isModalOpen}
                            isClose={this.closeModal}
                            data={this.state}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { updateProfilePhoto })(PersonalInfo)
