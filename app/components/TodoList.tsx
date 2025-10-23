'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TodoList = () => {
  const [todo, setTodo] = useState(""); // for input value
  const [todos, setTodos] = useState([]); // for todo list

  const handleAdd = () => {
    if (todo.trim() === "") return; // prevent empty todo
    setTodos([...todos, todo]); // add new todo to list
    setTodo(""); // clear input
  };

  return (
    <Card className="w-[400px] mx-auto mt-10 p-4">
      <CardHeader>
        <CardTitle>Todo App</CardTitle>
        <CardDescription>Manage your daily tasks</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            className="flex-1"
            placeholder="Enter Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={handleAdd}>Add</Button>
        </div>

        <ul className="space-y-1 text-sm list-disc pl-4">
          {todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <p className="text-xs text-muted-foreground">
          You have {todos.length} task{todos.length !== 1 && "s"}
        </p>
      </CardFooter>
    </Card>
  );
};

export default TodoList;
