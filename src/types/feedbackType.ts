interface IFeedbackReactions {
  up: number,
  comment: number
}

export interface IFeedback {
  title: string
  summary: string
  tags: string[]
  reactions: IFeedbackReactions[]
}
