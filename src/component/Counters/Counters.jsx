import Counter from "../Counter/Counter"
import React from 'react';
class Counters extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            size:1
        }
    }

    changeSize=()=>{
        let size = document.getElementById("size").value;
        console.log(size);
        
        this.setState({
            size:parseInt(size)
        })
    }
    render() {
        return (
            <div>
                <input id="size" type="text"/><input type="button" onClick={this.changeSize} value="确定"/>
                {new Array(this.state.size).fill(0).map((value,index) => <Counter key={index}></Counter>)}
            </div>
        );
    }
}
export default Counters;