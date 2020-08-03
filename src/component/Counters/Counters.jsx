import Counter from "../Counter/Counter"
import React from 'react';
class Counters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 1,
            total: 0
        }
    }

    changeSize = () => {
        let size = document.getElementById("size").value;
        if (size === '') size = 1;
        
        if (this.state.size !== size) {
            if (this.state.total !== 0) {
                this.child();
            }
            this.setState({
                size: parseInt(size),
                total: 0
            })
        }
    }
    sumTotal = (num) => {
        this.setState({
            total: this.state.total += num
        })
    }
    onRef = (child) => {
        this.child = child.reset;
    }
    render() {
        return (
            <div>
                <input id="size" type="text" /><input type="button" onClick={this.changeSize} value="确定" />
                <h3>{this.state.total}</h3>
                {new Array(this.state.size).fill(0).map((value, index) => <Counter parent={this} onRef={this} key={index}></Counter>)}
            </div>
        );
    }
}
export default Counters;