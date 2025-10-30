"use client";

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
import { useEffect, useState } from "react";

export default function TodoList() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const savedTodo = localStorage.getItem("todos");
    if (savedTodo) setTodo(JSON.parse(savedTodo));
  }, []);

  // ✅ Save to localStorage whenever todo changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  // ✅ Add
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodo((prev) => [...prev, input.trim()]);
    setInput("");
  };

  // ✅ Delete
  const handleRemove = (id: number) => {
    setTodo(todo.filter((_, index) => index !== id));
  };

  // ✅ Start Editing
  const handleEdit = (id: number) => {
    setEditIndex(id);
    setEditValue(todo[id]);
  };

  // ✅ Save Edited Todo
  const handleSave = (id: number) => {
    const updated = [...todo];
    updated[id] = editValue.trim();
    setTodo(updated);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <Card className="w-[400px] mx-auto mt-10 p-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Todo App</CardTitle>
        <CardDescription>Manage your daily tasks (CRUD)</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Input Section */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1"
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {/* Todo List */}
        {todo.length > 0 ? (
          <ul className="space-y-3">
            {todo.map((item, id) => (
              <li
                key={id}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-lg"
              >
                {editIndex === id ? (
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 mr-2"
                  />
                ) : (
                  <span className="text-sm font-medium">{item}</span>
                )}

                <div className="flex gap-2">
                  {editIndex === id ? (
                    <Button size="sm" onClick={() => handleSave(id)}>
                      Save
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEdit(id)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleRemove(id)}
                  >
                    Delete
                  </Button>
                </div>
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
        ✅ {todo.length} task{todo.length !== 1 && "s"} total
      </CardFooter>
    </Card>
  );
}
