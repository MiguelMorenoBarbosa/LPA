export interface ICard {
  dados: {
    id?: number,
    title?: string,
    message?: string,
    created_at?: string,
    user?: {
      name: string,
    }
    messageTopic?: {
      id: number,
      name: string
    }[]
  }
}