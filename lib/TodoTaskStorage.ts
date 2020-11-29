import { deflate, unzip } from 'react-zlib-js'
import { Buffer } from 'buffer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TodoTaskList from './TodoTaskList'

const STORAGE_KEY = '@todo_task_list'

export async function storeTasks(tasks: TodoTaskList): Promise<void> {
  const jsonValue = tasks.toString()
  const b64 = await compress(jsonValue)
  return AsyncStorage.setItem(STORAGE_KEY, b64)
}

export async function loadTasks(): Promise<TodoTaskList> {
  const b64 = await AsyncStorage.getItem(STORAGE_KEY)
  if (b64 === null) {
    return new TodoTaskList()
  } else {
    const serialized = await expand(b64)
    return TodoTaskList.fromString(serialized)
  }
}

async function compress(s: string): Promise<string> {
  return new Promise((resolve, reject) => {
    deflate(s, (err: Error, buffer: Buffer) => {
      if (err) {
        reject(err)
      } else {
        resolve(buffer.toString('base64'))
      }
    })
  })
}

async function expand(z: string): Promise<string> {
  return new Promise((resolve, reject) => {
    unzip(Buffer.from(z, 'base64'), (err: Error, buffer: Buffer) => {
      if (err) {
        reject(err)
      } else {
        resolve(buffer.toString('utf-8'))
      }
    })
  })
}
