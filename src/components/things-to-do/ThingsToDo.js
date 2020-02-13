import React from 'react'
import Axios from 'axios'
import CircleShape from './CircleShape'
import Item from './Item'
import { API_URL } from '../../store/actions/types'
import Loading from './../layout/Loading';

class ThingsToDo extends React.Component {
    state = {
        rides: {},
        services: {},
        loading: true
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get(`${API_URL}api/service`)
            .then(res => {
                this.setState({
                    services: res.data
                })
            })
        Axios.get(`${API_URL}api/ride`)
            .then(res => {
                this.setState({
                    rides: res.data,
                    loading: false
                })
            })
    }
    render() {
        let { rides, services, loading } = this.state
        return (
            <div>
                {/* <InnerSearch className="fantasy" /> */}
                <section className="things-to-do-page-content-area section-padding relative">
                    <CircleShape />

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title fantasy-section-title mb-30">
                                    <h2>Things To Do</h2>
                                </div>
                            </div>
                        </div>
                        {loading ? <Loading /> :
                            Object.keys(services).length !== 0 &&
                            services.map(service => (
                                <div key={service.id}>
                                    <div className="row advanture-ride-area pb-3">
                                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                            <div className="thing-to-title text-center mb-30 pt-3">
                                                <h3 className="advanture-ride-title">{service.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {Object.keys(rides).length !== 0 &&
                                            rides.map(item => (
                                                Number(service.id) === Number(item.service_id) &&
                                                <Item data={item} key={item.id} />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        )
    }
}
export default ThingsToDo
