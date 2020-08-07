import React, { Component } from 'react';
import CounterComponent from './counterComponent';

class Counters extends Component {


    componentDidUpdate(prevProps, prevState) {
    }

    renderCounter() {
        return this.props.counters.map((counter, index) => (
            <CounterComponent
                key={index}
                counter={counter}
                selected={true}
                index={index}
                deleteCounter={this.props.onDelete}
                onEventCall={this.props.onEventCall}
            >
                {<h4>{`Counter #${index}`}</h4>}
            </CounterComponent>
        ));
    }

    renderResetButton() {
        return <button onClick={() => {this.props.onReset()}} className="btn btn-primary sm m-2">Reset Value</button>
    }

    render() {
        return (
            <div>
                {this.renderCounter()}
                {this.renderResetButton()}
            </div>
        );
    }
}
 
export default Counters;