import { MindMapNode } from '../../types'

export const ch3: MindMapNode = {
  id: 'ch3',
  label: '栈、队列和数组',
  children: [
    {
      id: 'ch3-1',
      label: '栈',
      children: [
        {
          id: 'ch3-1-1',
          label: '定义与特性',
          detail: '只允许在一端（栈顶）进行插入和删除的线性表，后进先出（LIFO）',
        },
        {
          id: 'ch3-1-2',
          label: '顺序栈',
          children: [
            {
              id: 'ch3-1-2-1',
              label: '结构',
              detail: '用数组实现，设栈顶指针 top，初始 top = -1（或 top = 0 表示下一种方案）',
            },
            {
              id: 'ch3-1-2-2',
              label: '判空/判满',
              detail: 'top == -1 为空；top == MaxSize-1 为满（以初始 top=-1 为例）',
            },
            {
              id: 'ch3-1-2-3',
              label: '进栈/出栈',
              detail: '进栈：先 top++ 再赋值；出栈：先取值再 top--',
            },
          ],
        },
        {
          id: 'ch3-1-3',
          label: '链栈',
          detail: '用链表实现，通常将栈顶设在链表头部，便于操作',
        },
        {
          id: 'ch3-1-4',
          label: '共享栈',
          detail: '两个栈共享一维数组空间，栈底分别在两端，栈满条件：top0 + 1 == top1',
        },
      ],
    },
    {
      id: 'ch3-2',
      label: '栈的应用',
      children: [
        {
          id: 'ch3-2-1',
          label: '括号匹配',
          detail: '遇左括号入栈，遇右括号弹栈匹配，最终栈空则匹配成功',
        },
        {
          id: 'ch3-2-2',
          label: '逆波兰表达式（后缀表达式）',
          detail: '运算符在操作数之后，无需括号即可无歧义求值',
        },
        {
          id: 'ch3-2-3',
          label: '中缀转后缀',
          detail: '操作数直接输出；运算符与栈顶比较优先级，优先级≤栈顶则弹栈输出，否则入栈；括号特殊处理',
        },
        {
          id: 'ch3-2-4',
          label: '递归',
          detail: '系统用栈保存递归调用的现场信息（返回地址、参数、局部变量）',
        },
      ],
    },
    {
      id: 'ch3-3',
      label: '队列',
      children: [
        {
          id: 'ch3-3-1',
          label: '定义与特性',
          detail: '只允许在一端插入（队尾 rear）、另一端删除（队头 front）的线性表，先进先出（FIFO）',
        },
        {
          id: 'ch3-3-2',
          label: '循环队列',
          children: [
            {
              id: 'ch3-3-2-1',
              label: '取模运算',
              detail: 'rear = (rear + 1) % MaxSize; front = (front + 1) % MaxSize',
            },
            {
              id: 'ch3-3-2-2',
              label: '判空',
              detail: 'front == rear',
            },
            {
              id: 'ch3-3-2-3',
              label: '判满（牺牲一个单元）',
              detail: '(rear + 1) % MaxSize == front，最多存 MaxSize-1 个元素',
            },
            {
              id: 'ch3-3-2-4',
              label: '队列长度',
              detail: '(rear - front + MaxSize) % MaxSize',
            },
          ],
        },
        {
          id: 'ch3-3-3',
          label: '链队列',
          detail: '用链表实现，设队头指针和队尾指针，无队满问题（除内存不足）',
        },
      ],
    },
    {
      id: 'ch3-4',
      label: '双端队列',
      detail: '允许两端都可以进行入队和出队操作的队列',
      children: [
        {
          id: 'ch3-4-1',
          label: '输出受限双端队列',
          detail: '允许一端插入和删除，另一端只允许插入',
        },
        {
          id: 'ch3-4-2',
          label: '输入受限双端队列',
          detail: '允许一端插入和删除，另一端只允许删除',
        },
      ],
    },
    {
      id: 'ch3-5',
      label: '队列的应用',
      children: [
        {
          id: 'ch3-5-1',
          label: '树的层序遍历',
          detail: '逐层访问，用队列保存待访问的下一层结点',
        },
        {
          id: 'ch3-5-2',
          label: '图的广度优先搜索(BFS)',
          detail: '访问顶点后将其邻接点依次入队',
        },
        {
          id: 'ch3-5-3',
          label: '缓冲区管理',
          detail: '解决速度不匹配问题，如打印机缓冲、消息队列',
        },
      ],
    },
    {
      id: 'ch3-6',
      label: '数组',
      children: [
        {
          id: 'ch3-6-1',
          label: 'n 维数组',
          detail: '数组是线性表的推广，n 维数组是一种"元素为 (n-1) 维数组"的线性表',
        },
        {
          id: 'ch3-6-2',
          label: '存储方式',
          children: [
            {
              id: 'ch3-6-2-1',
              label: '行优先',
              detail: 'C/C++ 采用，先存完一行再存下一行',
            },
            {
              id: 'ch3-6-2-2',
              label: '列优先',
              detail: 'Fortran 采用，先存完一列再存下一列',
            },
          ],
        },
        {
          id: 'ch3-6-3',
          label: '地址计算',
          detail: '二维行优先：LOC(aᵢⱼ) = LOC(a₀₀) + (i×n + j) × L',
        },
      ],
    },
    {
      id: 'ch3-7',
      label: '特殊矩阵压缩存储',
      children: [
        {
          id: 'ch3-7-1',
          label: '对称矩阵',
          detail: 'aᵢⱼ = aⱼᵢ，只存下三角（含对角线），共 n(n+1)/2 个元素',
        },
        {
          id: 'ch3-7-2',
          label: '三角矩阵',
          detail: '上/下三角区为常数 c，存下三角 + 常数 c，共 n(n+1)/2 + 1 个元素',
        },
        {
          id: 'ch3-7-3',
          label: '三对角矩阵（带状矩阵）',
          detail: '非零元素集中在主对角线及其相邻两条对角线上，共 3n-2 个非零元素',
        },
        {
          id: 'ch3-7-4',
          label: '稀疏矩阵',
          children: [
            {
              id: 'ch3-7-4-1',
              label: '三元组顺序表',
              detail: '用 (行号, 列号, 值) 三元组按行优先存储非零元素',
            },
            {
              id: 'ch3-7-4-2',
              label: '十字链表（正交链表）',
              detail: '每个非零元素既是行链表结点又是列链表结点，便于插入删除',
            },
          ],
        },
      ],
    },
  ],
}
