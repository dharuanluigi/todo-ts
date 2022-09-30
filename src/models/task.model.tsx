export class TaskModel {
  constructor(
    public id: number,
    public name: string,
    public isDone = false,
    public description?: string
  ) {
    this.id = id;
    this.name = name;
    this.isDone = isDone;
    this.description = description;
  }
}
