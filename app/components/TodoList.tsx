'use client'

import { useState, useEffect, ChangeEvent } from "react";
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

const TodoList: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  // Load todos from localStorage when component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (): void => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
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
            onChange={handleChange}
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
