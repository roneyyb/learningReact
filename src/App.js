import React, { Component } from "react";
import NavBar from "../src/components/navbarComponent";
import Counters from "./components/counters";
import "./App.css";

export default class App extends Component {

	state = {
        counters: [
            {id: 1, value: 0, _id:"123"},
            {id: 2, value: 0, _id:"345"},
            {id: 3, value: 0, _id:"678"},
            {id: 4, value: 0, _id:"890"},
        ],
    };

    handleCounterEvent = (event,id) => {
        const counters = [...this.state.counters];
        switch (event) {
            case "Increment":
                counters[id].value++;
                break;
            case "Decrement":
                counters[id].value--;
                break;
            default:
                break;
        }
        this.setState({ counters });
    };

    handleDelete = (id) => {
        const counters = this.state.counters.filter(
            (counter) => counter.id !== id,
        );
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
	};

	render() {
		return (
			<React.Fragment>
				<NavBar counter={this.state.counters.filter(c => c.value>0).length}/>
				<main className="container">
					<Counters
						onReset={this.handleReset}
						onDelete={this.handleDelete}
						onEventCall={this.handleCounterEvent}
						counters={this.state.counters}
					/>
				</main>
			</React.Fragment>
		);
	}
}

