export const TodoForm = () => {
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="Please enter a task"
      />
      <button type="submit" className="todo-btn" />
    </form>
  )
}

export default TodoForm
