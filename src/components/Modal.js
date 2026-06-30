import React, { Component } from "react";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      value = checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;
    const { activeItem } = this.state;

    return (
      <>
        {/* backdrop */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1040,
          }}
          onClick={toggle}
        />

        {/* modal */}
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            width: "500px",
            maxWidth: "90%",
            zIndex: 1050,
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="m-0">Todo Item</h5>
            <button className="btn btn-sm btn-outline-secondary" onClick={toggle}>
              ×
            </button>
          </div>

          <div className="mb-3">
            <label htmlFor="todo-title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="todo-title"
              name="title"
              value={activeItem.title}
              onChange={this.handleChange}
              placeholder="Enter Todo Title"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="todo-description" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="todo-description"
              name="description"
              value={activeItem.description}
              onChange={this.handleChange}
              placeholder="Enter Todo description"
              className="form-control"
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="todo-completed"
              name="completed"
              checked={activeItem.completed}
              onChange={this.handleChange}
              className="form-check-input"
            />
            <label htmlFor="todo-completed" className="form-check-label">
              Completed
            </label>
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-secondary me-2" onClick={toggle}>
              Cancel
            </button>
            <button
              className="btn btn-success"
              onClick={() => onSave(activeItem)}
            >
              Save
            </button>
          </div>
        </div>
      </>
    );
  }
}