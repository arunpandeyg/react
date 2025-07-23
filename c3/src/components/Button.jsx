import React from "react";

function Button() {
  return (
    <button
      onClick={'/signin'}
      className="button px-4 py- bg-blue-500 text-white rounded hover:bg-blue-600"
    >
       <span className="ml-2 text- ">&rarr;</span>
    </button>
  );
}

export default Button;
