import React from 'react'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

class AlertMessage extends React.Component {
    render() {
        let Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
        })
        if (this.props.common.message) {
            Toast.fire({
                type: this.props.common.type,
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