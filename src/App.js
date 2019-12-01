import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import MainApp from './components/MainApp';
import History from './util/History'


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainApp history={History} />
            </BrowserRouter>
        )
    }
}
export default App