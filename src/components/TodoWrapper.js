import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [editedTaskId, setEditedTaskId] = useState(null); // Define editedTaskId state

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setEditedTaskId(id); // Set editedTaskId when editing
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos)); // Save updated todos to localStorage
    console.log("Task edited successfully"); // Log a specific message to the console
  };

  const markTodoAsDone = (id) => {
    // Implement logic for marking todo as done
    console.log("Todo marked as done:", id);
  };

  return (
    <div className="TodoWrapper">
      <h1>TO-DO LIST!</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            editedTaskId={editedTaskId} // Pass editedTaskId as a prop
            markTodoAsDone={markTodoAsDone} // Pass markTodoAsDone as a prop
            key={todo.id}
          />
        )
      )}
    </div>
  );
};


















// import React, { useState } from "react";
// import { Todo } from "./Todo";
// import { TodoForm } from "./TodoForm";
// import { v4 as uuidv4 } from "uuid";
// import { EditTodoForm } from "./EditTodoForm";

// export const TodoWrapper = () => {
//   const [todos, setTodos] = useState([]);
//   const [editedTaskId, setEditedTaskId] = useState(null);

 

//   const addTodo = (todo) => {
//     setTodos([
//       ...todos,
//       { id: uuidv4(), task: todo, completed: false, isEditing: false },
//     ]);
//   }

//   const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   }

//   // const editTodo = (id) => {
//   //   setTodos(
//   //     todos.map((todo) =>
//   //       todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
//   //     )
//   //   );
//   // }

//   const editTodo = (id) => {
//     setEditedTaskId(id);
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
//       )
//     );
//   }

//   const editTask = (task, id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
//       )
//     );
//   };

//   return (
//     <div className="TodoWrapper">
//       <h1>Task List !</h1>
//       <TodoForm addTodo={addTodo} />
//       {/* display todos */}
//       {todos.map((todo) =>
//         todo.isEditing ? (
//           <EditTodoForm editTodo={editTask} task={todo} />
//         ) : (
//           <Todo
//             task={todo}
//             deleteTodo={deleteTodo}
//             editTodo={editTodo}
//             toggleComplete={toggleComplete}
//             markTodoAsDone={markTodoAsDone}
//         />
//         )
//       )}
//     </div>
//   );
// };
