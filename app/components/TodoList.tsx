"use client";

import { useEffect, useState } from "react";
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

export default function TodoList() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);

  // Add todo
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodo((prev) => [...prev, input]);
    setInput("");
  };

  // Load todos from localStorage
  useEffect(() => {
    const savedTodo = localStorage.getItem("todos");
    if (savedTodo) setTodo(JSON.parse(savedTodo));
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  // Remove todo
  const handleRemove = (id: number) => {
    setTodo(todo.filter((_, index) => index !== id));
  };

  return (
    <Card className="w-[400px] mx-auto mt-10 p-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Todo App</CardTitle>
        <CardDescription>Manage your daily tasks</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Input and Button Section */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
            placeholder="Enter a task..."
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {/* Todo List Section */}
        {todo.length > 0 ? (
          <ul className="space-y-3">
            {todo.map((item, id) => (
              <li
                key={id}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-lg"
              >
                <span className="text-sm font-medium">{item}</span>
                <button
                  onClick={() => handleRemove(id)}
                  className="text-red-600 font-medium hover:text-red-800 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-sm text-muted-foreground">
            No tasks yet ✨
          </p>
        )}
      </CardContent>

      <CardFooter className="text-xs text-muted-foreground justify-center">
        ✅ {todo.length} task{todo.length !== 1 && "s"} pending
      </CardFooter>
    </Card>
  );
}
