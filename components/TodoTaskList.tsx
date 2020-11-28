import React, { useState } from 'react'
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native'
import TodoTask from '../types/TodoTask'
import InlineTextForm from './InlineTextForm'
import TodoTaskItem from './TodoTaskItem'
import style from '../styles'

type TodoTaskListProps = {
  tasks: TodoTask[]
}

export default function TodoTaskList({ tasks }: TodoTaskListProps) {
  const [addingTask, setAddingTask] = useState(false)
  const [editingTask, setEditingTask] = useState<TodoTask | null>(null)
  return (
    <View style={style.container}>
      <Text style={style.viewHeading}>Tasks</Text>

      <View style={style.innerContainer}>
        <ScrollView>
          {tasks.map((task, key) => (
            <TodoTaskItem
              {...{ task, key }}
              onEdit={() => setEditingTask(task)}
            />
          ))}
        </ScrollView>
      </View>

      {addingTask ? (
        <InlineTextForm
          style={{ width: '100%' }}
          onSubmit={(task) => {
            tasks.push(new TodoTask(task))
            setAddingTask(false)
          }}
          onCancel={() => setAddingTask(false)}
        />
      ) : editingTask != null ? (
        <InlineTextForm
          style={{ width: '100%' }}
          initialValue={editingTask!.title}
          onSubmit={(task) => {
            editingTask.title = task
            setEditingTask(null)
          }}
          onCancel={() => setEditingTask(null)}
        />
      ) : (
        <TouchableOpacity
          accessibilityLabel="Add a new task to the list"
          onPress={() => setAddingTask(true)}
          style={style.footerButton}
        >
          <Text
            style={{
              fontSize: 24
            }}
          >
            Add Task
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
