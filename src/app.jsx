import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';

const props = {
    name: 'viking', age: 20
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Profile {...props} />
        )
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);