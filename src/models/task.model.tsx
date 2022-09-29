export class TaskModel {
  constructor(
    public id: number,
    public content: string,
    public isDone = false,
    public description?: string
  ) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
    this.description = description;
  }
}
