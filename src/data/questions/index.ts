import { Question } from '../../types'
import { ch1Questions } from './ch1'
import { ch2Questions } from './ch2'
import { ch3Questions } from './ch3'
import { ch4Questions } from './ch4'
import { ch5Questions } from './ch5'
import { ch6Questions } from './ch6'
import { ch7Questions } from './ch7'

const questionBank: Record<number, Question[]> = {
  1: ch1Questions,
  2: ch2Questions,
  3: ch3Questions,
  4: ch4Questions,
  5: ch5Questions,
  6: ch6Questions,
  7: ch7Questions,
}

export function getQuestions(chapter: number): Question[] {
  return questionBank[chapter] || []
}

export function getAllQuestions(): Question[] {
  return Object.values(questionBank).flat()
}
