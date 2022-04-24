export default interface todo {
    name: string;
    isCheck?: boolean
}

export type TodoType = "CREATED" | "DOING" | "DONE"
export interface loadedData {
    id: string;
    todo: string;
    status: TodoType;
  }

