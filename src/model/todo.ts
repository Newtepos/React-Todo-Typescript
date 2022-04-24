export default interface todo {
    name: string;
    isCheck?: boolean
}
export interface loadedData {
    id: string;
    todo: string;
  }

export type TodoType = "CREATED" | "DOING" | "DONE"