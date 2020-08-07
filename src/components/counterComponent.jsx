import React, {Component} from "react";

class Counter extends Component {
    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    componentDidUpdate() {
        console.log("Component Did Update counter Component", this.props);
    }

    render() {
        const {children, deleteCounter, counter, onEventCall, index} = this.props;

        return (
            <div>
                {children}
                <div className={"row"}>
                    <div className="col">
                        <span className={this.getBadgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="col">
                        <button
                            onClick={() => onEventCall("Increment", index)}
                            className="btn btn-secondary btn-sm m-2"
                        >
                            +
                        </button>
                        <button
                            onClick={() => onEventCall("Decrement", index)}
                            disabled={counter.value === 0}
                            className="btn btn-secondary btn-sm m-2"
                        >
                            -
                        </button>
                        <button
                            onClick={() => deleteCounter(counter.id)}
                            className="btn btn-danger btn-sm m-2"
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
