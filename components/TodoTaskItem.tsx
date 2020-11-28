import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import TodoTask from '../types/TodoTask'

type TodoTaskItemProps = {
  task: TodoTask
  onEdit?: (task: TodoTask) => void
}

export default function TodoTaskItem({ task, onEdit }: TodoTaskItemProps) {
  return (
    <View style={{ borderColor: '#aaa', borderWidth: 1, flexDirection: 'row' }}>
      <Text style={{ flexGrow: 1 }}>{task.title}</Text>
      {onEdit ? (
        <View style={{ width: 30 }}>
          <Button title="✏️" onPress={() => onEdit(task)} />
        </View>
      ) : null}
    </View>
  )
}
