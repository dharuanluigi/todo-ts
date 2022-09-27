export class TaskModel {
  constructor(
    public id: number,
    public content: string,
    public isDone = false
  ) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
  }
}
