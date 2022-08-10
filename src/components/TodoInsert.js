import React from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

function TodoInsert() {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력해주세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
