import React from 'react'
import { View, Text, Button } from 'react-native'
import TodoTask from '../lib/TodoTask'

type TodoTaskItemProps = {
  task: TodoTask
  onEdit?: (task: TodoTask) => void
}

export default function TodoTaskItem({ task, onEdit }: TodoTaskItemProps) {
  return (
    <View style={{ borderColor: '#aaa', borderWidth: 1, flexDirection: 'row' }}>
      <Text
        style={{
          flexGrow: 1,
          fontSize: 16,
          textAlignVertical: 'center',
          paddingHorizontal: 10
        }}
      >
        {task.title}
      </Text>
      {onEdit ? (
        <View style={{ width: 30 }}>
          <Button title="✏️" onPress={() => onEdit(task)} />
        </View>
      ) : null}
    </View>
  )
}
