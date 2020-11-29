import React, { useState } from 'react'
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native'
import TodoTask from '../lib/TodoTask'
import InlineTextForm from './InlineTextForm'
import TodoTaskItem from './TodoTaskItem'
import style from '../styles'
import TodoTaskList from '../lib/TodoTaskList'
import { storeTasks } from '../lib/TodoTaskStorage'

type TodoTaskListViewProps = {
  taskList: TodoTaskList
}

export default function TodoTaskListView({ taskList }: TodoTaskListViewProps) {
  const [addingTask, setAddingTask] = useState(false)
  const [editingTask, setEditingTask] = useState<TodoTask | null>(null)
  return (
    <View style={style.container}>
      <Text style={style.viewHeading}>Tasks</Text>

      <View style={style.innerContainer}>
        <ScrollView>
          {taskList.active.map((task, key) => (
            <TodoTaskItem
              {...{ task, key }}
              onEdit={() => setEditingTask(task)}
            />
          ))}
        </ScrollView>
      </View>

      {addingTask ? (
        <InlineTextForm
          style={{ width: '100%', paddingVertical: 10, paddingHorizontal: 20 }}
          onSubmit={(task) => {
            taskList.active.push(new TodoTask(task))
            storeTasks(taskList)
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
            storeTasks(taskList)
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
