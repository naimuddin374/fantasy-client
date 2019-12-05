import React from 'react'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

class AlertMessage extends React.Component {
    render() {
        if (this.props.common.message) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: this.props.common.type,
                title: this.props.common.message
            })
        }
        return <div></div>
    }
}

const mapStateToProps = state => ({
    common: state.common
})
export default connect(mapStateToProps)(AlertMessage)