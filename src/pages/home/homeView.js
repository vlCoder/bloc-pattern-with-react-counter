import React from "react";
import CounterView from "../../components/counter/CounterView.jsx";

class Home extends React.Component {
  componentDidMount() {
    this.props.bloc.counter.subscribe({
      next: _ => {
        this.setState({});
      }
    });
  }

  componentWillUnmount() {
    this.props.bloc.counter.unsubscribe();
  }

  propCollection() {
    return {
      save: () => this.props.bloc.save(),
      reload: () => this.props.bloc.reload(),
      increment: () => this.props.bloc.increment(),
      decrement: () => this.props.bloc.decrement(),
      reset: () => this.props.bloc.reset(),
      count: this.props.bloc.counter.value
    };
  }

  render() {
    return <CounterView {...this.propCollection()} />;
  }
}

export default Home;
