import { MindMapNode } from '../../types'

export const ch2: MindMapNode = {
  id: 'ch2',
  label: '线性表',
  children: [
    {
      id: 'ch2-1',
      label: '定义与基本操作',
      children: [
        {
          id: 'ch2-1-1',
          label: '定义',
          detail: '具有相同数据类型的 n(n≥0) 个数据元素的有限序列，n=0 时为空表',
        },
        {
          id: 'ch2-1-2',
          label: '基本操作',
          detail: 'InitList、DestroyList、LocateElem、GetElem、ListInsert、ListDelete、PrintList、Empty、Length',
        },
      ],
    },
    {
      id: 'ch2-2',
      label: '顺序表（顺序存储）',
      children: [
        {
          id: 'ch2-2-1',
          label: '地址公式',
          detail: 'LOC(aᵢ) = LOC(a₁) + (i-1) × L，L 为每个元素所占存储空间',
        },
        {
          id: 'ch2-2-2',
          label: '随机存取',
          detail: '可按序号直接访问任意元素，时间复杂度 O(1)',
        },
        {
          id: 'ch2-2-3',
          label: '插入操作',
          detail: '第 i 个位置插入需移动 n-i 个元素，平均移动 n/2 次',
        },
        {
          id: 'ch2-2-4',
          label: '删除操作',
          detail: '删除第 i 个位置元素需移动 n-i-1 个元素，平均移动 (n-1)/2 次',
        },
        {
          id: 'ch2-2-5',
          label: '动态分配',
          detail: '用 malloc/new 动态申请空间，可扩容但需复制原数据，时间 O(n)',
        },
      ],
    },
    {
      id: 'ch2-3',
      label: '链表（链式存储）',
      children: [
        {
          id: 'ch2-3-1',
          label: '单链表',
          children: [
            {
              id: 'ch2-3-1-1',
              label: '结构',
              detail: '每个结点含数据域 data 和指针域 next，只能从头向后遍历',
            },
            {
              id: 'ch2-3-1-2',
              label: '头插法',
              detail: '新结点插入头结点之后，生成的链表与输入顺序相反',
            },
            {
              id: 'ch2-3-1-3',
              label: '尾插法',
              detail: '新结点插入表尾，需维护尾指针 r，生成顺序与输入一致',
            },
            {
              id: 'ch2-3-1-4',
              label: '按序号查找',
              detail: '只能顺序遍历，时间复杂度 O(n)',
            },
          ],
        },
        {
          id: 'ch2-3-2',
          label: '双链表',
          detail: '每个结点有 prior 和 next 两个指针，可双向遍历，插入删除需修改两个指针',
        },
        {
          id: 'ch2-3-3',
          label: '循环链表',
          children: [
            {
              id: 'ch2-3-3-1',
              label: '循环单链表',
              detail: '尾结点 next 指向头结点，判空条件：L->next == L',
            },
            {
              id: 'ch2-3-3-2',
              label: '循环双链表',
              detail: '头结点 prior 指向尾结点，尾结点 next 指向头结点，判空：L->next == L && L->prior == L',
            },
          ],
        },
        {
          id: 'ch2-3-4',
          label: '静态链表',
          detail: '用数组描述，以游标（整型下标）代替指针，适用于不支持指针的语言',
        },
      ],
    },
    {
      id: 'ch2-4',
      label: '头结点的作用',
      detail: '①使第一个元素的操作与其他位置统一，无需特判；②空表时头指针仍指向头结点，便于处理',
    },
    {
      id: 'ch2-5',
      label: '顺序表 vs 链表',
      children: [
        {
          id: 'ch2-5-1',
          label: '存取方式',
          detail: '顺序表可随机存取 O(1)；链表只能顺序存取 O(n)',
        },
        {
          id: 'ch2-5-2',
          label: '插入删除',
          detail: '顺序表需移动大量元素；链表只需修改指针',
        },
        {
          id: 'ch2-5-3',
          label: '空间分配',
          detail: '顺序表需预分配，可能浪费或不够；链表按需分配，但有指针额外开销',
        },
        {
          id: 'ch2-5-4',
          label: '存储密度',
          detail: '顺序表存储密度 = 1；链表存储密度 < 1（含指针域）',
        },
      ],
    },
  ],
}
