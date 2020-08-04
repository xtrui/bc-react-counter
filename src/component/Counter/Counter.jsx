import React from 'react';
import store from '../../Store'
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    componentDidMount(){
        this.props.onRef.onRef(this);
    }

    add = () => {

        this.setState(
            {   
                number: this.state.number + 1
            }
        )
        store.dispatch({ type: 'INCREMENT' });
        this.callParent();
        // this.props.onRef.onRef(this);
    }

    sub = () => {
        this.setState(
            { number: this.state.number - 1 }
        );
        store.dispatch({ type: 'DECREMENT' });
        this.callParent();
        // this.props.onRef.onRef(this);
    }

    callParent=(num)=>{
        this.props.parent.sumTotal(num)
    }
    reset=()=>{
        this.setState({
            number:0
        })
    }

    render() {
        return (
            <div >
                <button onClick={this.sub}>-</button>
                {this.state.number}
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default Counter;