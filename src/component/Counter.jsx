import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    add = () => {
        
        this.setState(
            {   
                number: this.state.number + 1
            }
        )
    }

    sub = () => {
        this.setState(
            { number: this.state.number - 1 }
        );
    }

    render() {
        return (
            <div >
                <button onClick={this.add}>+</button>
                {this.state.number}
                {this.props.name}
                <button onClick={this.sub}>-</button>
            </div>
        );
    }
}

export default Counter;