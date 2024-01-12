import React from "react"

const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-white bg-red-300 hover:bg-red-400 rounded-md"
    >
      Delete
    </button>
  )
}

export default DeleteButton
