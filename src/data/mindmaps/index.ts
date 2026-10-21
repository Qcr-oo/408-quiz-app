import { MindMapNode } from '../../types'
import { ch1 } from './ch1'
import { ch2 } from './ch2'
import { ch3 } from './ch3'
import { ch4 } from './ch4'
import { ch5 } from './ch5'
import { ch6 } from './ch6'
import { ch7 } from './ch7'

const mindMaps: Record<number, MindMapNode> = {
  1: ch1,
  2: ch2,
  3: ch3,
  4: ch4,
  5: ch5,
  6: ch6,
  7: ch7,
}

export function getMindMap(chapter: number): MindMapNode | null {
  return mindMaps[chapter] || null
}
