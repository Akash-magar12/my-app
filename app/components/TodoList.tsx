import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from 'react'

const TodoList = () => {
  return (

    <Card className="w-[400px] mx-auto mt-10 p-4">
  <CardHeader>
    <CardTitle>Todo App</CardTitle>
    <CardDescription>Manage your daily tasks</CardDescription>
  </CardHeader>

  <CardContent className="space-y-4">
    <div className="flex gap-2">
      <Input className="flex-1" placeholder="Enter Todo" />
      <Button>Add</Button>
    </div>

    <ul className="space-y-1 text-sm">
      <li>Sample Todo Item 1</li>
      <li>Sample Todo Item 2</li>
    </ul>
  </CardContent>

  <CardFooter>
    <p className="text-xs text-muted-foreground">You have 2 tasks</p>
  </CardFooter>
</Card>


   
  )
}

export default TodoList
