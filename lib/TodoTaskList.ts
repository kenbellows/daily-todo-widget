import TodoTask from './TodoTask'

export default class TodoTaskList {
  public active: TodoTask[]
  public completed: TodoTask[]
  constructor(active: TodoTask[] = [], completed: TodoTask[] = []) {
    this.active = active
    this.completed = completed
  }

  toString(): string {
    return JSON.stringify({
      active: this.active.map((t) => t.title),
      completed: this.completed.map((t) => t.title)
    })
  }

  static fromString(json: string) {
    const { active, completed } = JSON.parse(json)
    return new TodoTaskList(
      active.map((s: string) => new TodoTask(s)),
      completed.map((s: string) => new TodoTask(s))
    )
  }
}
