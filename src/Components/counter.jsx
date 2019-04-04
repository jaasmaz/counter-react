import React, { Component } from "react";
class Counter extends Component {
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul> //Works like *ngFor for Rendering Lists
  //   );
  // }

  getBadgeClasses() {
    var classes = "badge m-2 badge-";
    classes += this.props.counter.value > 0 ? "primary" : "warning";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  handelDelete;

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        {/* {this.state.tags.length === 0 && "Please enter Tags !"} */}
      </div>
    );
  }
}

export default Counter;
