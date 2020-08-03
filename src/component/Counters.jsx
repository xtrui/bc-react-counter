import Counter from "./Counter"
import React from 'react';
class Counters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {new Array(this.props.size).fill(0).map((value,index) => <Counter key={index}></Counter>)}
            </div>
        );
    }
}
export default Counters