import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/todo/actions/action";

function Form({ editFormVisibility, editTodo, cancelUpdate }) {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");
  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
    cancelUpdate();
  };

  const devalue = () => {
    cancelUpdate();
    setEditValue(editTodo.todo);
  };

  return (
    <>
      {editFormVisibility === false ? (
        <form className="form-group custom-group" onSubmit={handleSubmit}>
          <label style={{ marginTop: "9px", marginBottom: "3px" }}>
            Add your Todo Items
          </label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              style={{ marginBottom: "4px" }}
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary btn-md"
              style={{ marginLeft: "4px", marginBottom: "3px" }}
            >
              ADD
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custom-group" onSubmit={editSubmit}>
          <label style={{ marginTop: "9px", marginBottom: "3px" }}>
            Update your Todo Items
          </label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              style={{ marginBottom: "4px" }}
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary btn-md"
              style={{ marginLeft: "4px", marginBottom: "3px" }}
            >
              UPDATE
            </button>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-md back-btn"
            onClick={devalue}
          >
            CANCEL UPDATE
          </button>
        </form>
      )}
    </>
  );
}

export default Form;
