import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import MainApp from './components/MainApp';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainApp />
            </BrowserRouter>
        )
    }
}
export default App