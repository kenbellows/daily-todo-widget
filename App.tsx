import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import TodoTaskList from './components/TodoTaskList'
import TodoTask from './types/TodoTask'
import styles from './styles'

export default function App() {
  return (
    <View style={styles.fullScreen}>
      <TodoTaskList tasks={testTasks} />
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}

const testTasks = [
  'Test basic tasklist view',
  'Add nicer styling to the tasklist',
  "Try scrolling when there's many tasks",
  'Implement an "Add Task" component/view',
  'Implement add task functionality',
  'Persistent storage'
].map((task) => new TodoTask(task))
