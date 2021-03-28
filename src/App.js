import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  //  console.log("💣", input);
  const addTodo = (event) => {
    event.preventDefault(); // stop the refresh everytime button is hit
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); // Clearing the input after hitting the button
  };
  return (
    <div className="App">
      <h1>Hello Fellas!🚀</h1>

      <form>
        {/* <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> */}
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
