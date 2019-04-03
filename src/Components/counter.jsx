import React, { Component } from "react";
class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handelIncrement = this.handelIncrement.bind(this);
  // }

  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul> //Works like *ngFor for Rendering Lists
    );
  }

  getBadgeClasses() {
    var classes = "badge m-2 badge-";
    classes += this.state.count > 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handelIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handelIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <br />
        {this.state.tags.length === 0 && "Please enter Tags !"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
