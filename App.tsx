import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import TodoTaskListView from './components/TodoTaskListView'
import TodoTask from './lib/TodoTask'
import TodoTaskList from './lib/TodoTaskList'
import { loadTasks } from './lib/TodoTaskStorage'
import styles from './styles'

export default function App() {
  const [tasks, setTasks] = useState<TodoTaskList>()
  useEffect(() => {
    loadTasks().then(setTasks)
  }, [])

  return (
    <View style={styles.fullScreen}>
      {tasks ? <TodoTaskListView taskList={tasks} /> : <Text>Loading...</Text>}
    </View>
  )
}
