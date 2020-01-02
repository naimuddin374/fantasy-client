import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'

// Load Component
import Menu from './layout/Menu'
import FooterPage from './layout/FooterPage'

import Faq from '../page/Faq';
import FantasyKingdom from './fantasy-kingdom/FantasyKingdom';
// import RidePage from './ride/RidePage';
import ThingsToDo from './things-to-do/ThingsToDo';
import Ticket from './ticket/Ticket';
import Checkout from './checkout/Checkout';
import WaterKingdom from './water-kingdom/WaterKingdom';
import ExtremeKingdom from './extreme-kingdom/ExtremeKingdom';
import HomePage from './home/HomePage';
import FoysLake from './foys-lake/FoysLake';
import HeritagePark from './heritage-park/HeritagePark';
import Atlantis from './atlantis/Atlantis';
import NewsEvents from './../page/NewsEvents';
import NewsEventDetail from '../page/NewsEventDetail';
import AlertMessage from './layout/AlertMessage';
import Register from './profile/Register';
import Login from './profile/Login'
import Profile from './profile/Profile';
import ForgotPassword from './profile/ForgotPassword';
import SetNewPassword from './profile/SetNewPassword';
import PageNotFound from '../page/PageNotFound';
import Maps from './fantasy-kingdom/Maps';


class MainApp extends React.Component {
    render() {
        return (
            <div className="main-div">
                <AlertMessage />
                <Menu history={this.props.history} />
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/maps`} component={Maps} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/forgot-password`} component={ForgotPassword} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/set-password`} component={SetNewPassword} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/profile`} component={Profile} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/faq`} component={Faq} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/ticket/:id`} exact component={Ticket} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/ticket`} exact component={Ticket} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/register`} component={Register} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/atlantis`} component={Atlantis} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/things-to-do`} component={ThingsToDo} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/water-kingdom`} component={WaterKingdom} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/fantasy-kingdom`} component={FantasyKingdom} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/xtreme-racing`} component={ExtremeKingdom} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/foys-lake`} component={FoysLake} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/heritage-park`} component={HeritagePark} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/news-events`} component={NewsEvents} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/news-event-detail/:id`} component={NewsEventDetail} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/`} exact component={HomePage} history={this.props.history} />
                    <Route path={`${process.env.PUBLIC_URL}/*`} component={PageNotFound} history={this.props.history} />
                </Switch>
                <FooterPage />
            </div>
        )
    }
}
export default MainApp