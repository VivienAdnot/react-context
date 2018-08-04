import React, { Component } from 'react';
import './components.css';

const AppContext = React.createContext();

class AppProvider extends Component {

    state = {
        number: 10,
        incrementNumber: () => {
            this.setState({number: this.state.number + 1})
        }
    }

    render() {

        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>

    }

}

const Green = () => (
    <div className="square green">
        <AppContext.Consumer>
            {(context) => context.number}
        </AppContext.Consumer>
    </div>
);

const Blue = () => (
    <div className="square blue">
        <AppContext.Consumer>
            {(context) => <button onClick={context.incrementNumber}>INCREMENT</button>}
        </AppContext.Consumer>
        <Green />
    </div>
);

class Red extends Component {

    render() {

        return <AppProvider>
            <div className="square red">
                <AppContext.Consumer>
                    {(context) => context.number}
                </AppContext.Consumer>
                <Blue />
            </div>
        </AppProvider>

    }

}

export default Red;