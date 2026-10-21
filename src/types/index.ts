export interface MindMapNode {
  id: string
  label: string
  detail?: string
  children?: MindMapNode[]
}

export interface Question {
  id: string
  chapter: number
  type: 'single' | 'multiple' | 'fill'
  content: string
  options?: string[]
  answer: number | number[] | string
  explanation: string
  tags: string[]
}

export interface ChapterInfo {
  id: number
  title: string
  shortTitle: string
}

export interface QuizRecord {
  questionId: string
  correct: boolean
  timestamp: number
}

export interface ChapterProgress {
  total: number
  correct: number
  attempted: number
}
