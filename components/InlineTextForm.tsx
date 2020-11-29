import React, { useState } from 'react'
import { Button, TextInput, ToastAndroid, View } from 'react-native'
import TodoTask from '../lib/TodoTask'

type InlineTextFormProps = {
  onSubmit: (text: string) => void
  onCancel: () => void
  initialValue?: string
  style?: { [key: string]: string | number }
}

export default function InlineTextForm({
  onSubmit,
  onCancel,
  initialValue,
  style = {}
}: InlineTextFormProps) {
  const [text, setText] = useState(initialValue ?? '')
  function submit() {
    if (text.length > 0) onSubmit(text)
    else ToastAndroid.show('Please enter some text', ToastAndroid.SHORT)
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        ...style
      }}
    >
      <TextInput
        placeholder="Enter task"
        defaultValue={text}
        onChangeText={setText}
        onSubmitEditing={submit}
        style={{
          flexGrow: 1,
          fontSize: 16,
          paddingHorizontal: 20
        }}
        autoFocus
        enablesReturnKeyAutomatically
      />
      <View
        style={{
          width: 60,
          flexDirection: 'row'
        }}
      >
        <Button title="✔" onPress={submit} />
        <Button title="&times;" onPress={onCancel} />
      </View>
    </View>
  )
}
