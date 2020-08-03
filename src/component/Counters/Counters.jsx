import Counter from "../Counter/Counter"
import React from 'react';
import store from '../../Store'
class Counters extends React.Component {
    children = [];
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
            //循环置零
            if (store.getState() !== 0) {
                this.children.forEach((value,index)=>{
                    value();
                });
            }
            this.setState({
                size: parseInt(size),
                total: 0
            })
            store.dispatch({ type: 'RESET' });
            this.forceUpdate();
        }
    }
    sumTotal = () => {
        // this.setState({
        //     total: this.state.total += num
        // })
        this.forceUpdate();
    }
    onRef = (child) => {
        this.children.push(child.reset);
    }

    render() {
        return (
            <div>
                <input id="size" type="text" /><input type="button" onClick={this.changeSize} value="确定" />
                <h2>{store.getState()   }</h2>
                {new Array(this.state.size).fill(0).map((value, index) => <Counter parent={this} onRef={this} key={index}/>)}
            </div>
        );
    }
}
export default Counters;