import { MindMapNode } from '../../types'

export const ch4: MindMapNode = {
  id: 'ch4',
  label: '串',
  children: [
    {
      id: 'ch4-1',
      label: '基本概念',
      children: [
        {
          id: 'ch4-1-1',
          label: '串的定义',
          detail: '由零个或多个字符组成的有限序列，是特殊的线性表（元素限定为字符）',
        },
        {
          id: 'ch4-1-2',
          label: '空串与空格串',
          detail: '空串长度为 0，不含任何字符；空格串由一个或多个空格组成，长度不为 0',
        },
        {
          id: 'ch4-1-3',
          label: '子串与主串',
          detail: '串中任意个连续字符组成的子序列称为子串，包含子串的串称为主串',
        },
        {
          id: 'ch4-1-4',
          label: '位置',
          detail: '字符在串中的序号（从 1 开始），子串的位置是子串第一个字符在主串中的位置',
        },
      ],
    },
    {
      id: 'ch4-2',
      label: '串的存储',
      children: [
        {
          id: 'ch4-2-1',
          label: '定长顺序存储',
          detail: '用固定长度数组存储，超出部分截断，存在"截断"问题',
        },
        {
          id: 'ch4-2-2',
          label: '堆分配存储',
          detail: '用动态数组（malloc/new）分配空间，长度可变，C 语言中常用',
        },
        {
          id: 'ch4-2-3',
          label: '块链存储',
          detail: '用链表存储，每个结点可存一个或多个字符（块），存储密度 = 字符数/结点数',
        },
      ],
    },
    {
      id: 'ch4-3',
      label: 'BF 算法（朴素模式匹配）',
      children: [
        {
          id: 'ch4-3-1',
          label: '基本思想',
          detail: '主串和模式串逐字符比较，失配时主串回退到本次匹配起点的下一位，模式串回退到第 1 位',
        },
        {
          id: 'ch4-3-2',
          label: '时间复杂度',
          detail: '最坏 O(m×n)，m 为模式串长度，n 为主串长度；平均 O(m+n)',
        },
        {
          id: 'ch4-3-3',
          label: '缺点',
          detail: '存在大量回溯，主串指针 i 需要回退，效率低',
        },
      ],
    },
    {
      id: 'ch4-4',
      label: 'KMP 算法',
      children: [
        {
          id: 'ch4-4-1',
          label: '核心思想',
          detail: '利用已匹配信息，失配时主串指针 i 不回退，仅模式串指针 j 回退到 next[j]',
        },
        {
          id: 'ch4-4-2',
          label: 'next 数组',
          children: [
            {
              id: 'ch4-4-2-1',
              label: '定义',
              detail: 'next[j] = 模式串前 j-1 个字符组成的子串的最长相等前后缀长度 + 1',
            },
            {
              id: 'ch4-4-2-2',
              label: 'next[1] = 0',
              detail: '第一个字符失配时，模式串整体后移一位',
            },
            {
              id: 'ch4-4-2-3',
              label: '递推求法',
              detail: '若 pⱼ == pₖ 则 next[j+1] = k+1；否则令 k = next[k] 继续比较',
            },
          ],
        },
        {
          id: 'ch4-4-3',
          label: 'nextval 优化',
          detail: '若 pⱼ == p_{next[j]}，则 nextval[j] = nextval[next[j]]，避免多余比较',
        },
        {
          id: 'ch4-4-4',
          label: '时间复杂度',
          detail: '匹配过程 O(m+n)，求 next 数组 O(m)，总体 O(m+n)',
        },
      ],
    },
  ],
}
