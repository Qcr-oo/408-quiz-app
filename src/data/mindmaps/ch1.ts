import { MindMapNode } from '../../types'

export const ch1: MindMapNode = {
  id: 'ch1',
  label: '绪论',
  children: [
    {
      id: 'ch1-1',
      label: '基本概念',
      children: [
        {
          id: 'ch1-1-1',
          label: '数据',
          detail: '描述客观事物的符号，是计算机中可以操作的对象，是能被计算机识别并输入给计算机处理的符号集合',
        },
        {
          id: 'ch1-1-2',
          label: '数据元素',
          detail: '组成数据的、有一定意义的基本单位，在计算机中通常作为整体处理',
        },
        {
          id: 'ch1-1-3',
          label: '数据项',
          detail: '构成数据元素的不可分割的最小单位',
        },
        {
          id: 'ch1-1-4',
          label: '数据对象',
          detail: '性质相同的数据元素的集合，是数据的子集',
        },
      ],
    },
    {
      id: 'ch1-2',
      label: '数据类型',
      children: [
        {
          id: 'ch1-2-1',
          label: '原子类型',
          detail: '其值不可再分的数据类型，如 int、char、float 等',
        },
        {
          id: 'ch1-2-2',
          label: '结构类型',
          detail: '其值可以再分解为若干成分的数据类型，如数组、结构体',
        },
        {
          id: 'ch1-2-3',
          label: '抽象数据类型(ADT)',
          detail: '数学模型 + 定义在该模型上的一组操作，封装了数据与操作，对外隐藏实现细节',
        },
      ],
    },
    {
      id: 'ch1-3',
      label: '数据结构三要素',
      children: [
        {
          id: 'ch1-3-1',
          label: '逻辑结构',
          children: [
            {
              id: 'ch1-3-1-1',
              label: '集合结构',
              detail: '元素间除"同属一个集合"外无其他关系',
            },
            {
              id: 'ch1-3-1-2',
              label: '线性结构',
              detail: '元素间存在一对一的前驱后继关系',
            },
            {
              id: 'ch1-3-1-3',
              label: '树形结构',
              detail: '元素间存在一对多的层次关系',
            },
            {
              id: 'ch1-3-1-4',
              label: '图状结构',
              detail: '元素间存在多对多的任意关系',
            },
          ],
        },
        {
          id: 'ch1-3-2',
          label: '存储结构（物理结构）',
          children: [
            {
              id: 'ch1-3-2-1',
              label: '顺序存储',
              detail: '逻辑上相邻的元素存储在物理上相邻的存储单元中，可随机存取',
            },
            {
              id: 'ch1-3-2-2',
              label: '链式存储',
              detail: '通过指针表示元素间的逻辑关系，不要求物理上相邻',
            },
            {
              id: 'ch1-3-2-3',
              label: '索引存储',
              detail: '在存储元素的同时建立附加索引表',
            },
            {
              id: 'ch1-3-2-4',
              label: '散列存储',
              detail: '根据元素的关键字通过散列函数计算存储地址',
            },
          ],
        },
        {
          id: 'ch1-3-3',
          label: '数据的运算',
          detail: '施加在数据上的操作，包括运算的定义和实现两方面',
        },
      ],
    },
    {
      id: 'ch1-4',
      label: '算法',
      children: [
        {
          id: 'ch1-4-1',
          label: '算法的五个特性',
          children: [
            { id: 'ch1-4-1-1', label: '有穷性', detail: '算法必须在有限步骤内结束' },
            { id: 'ch1-4-1-2', label: '确定性', detail: '每条指令含义明确，无二义性' },
            { id: 'ch1-4-1-3', label: '可行性', detail: '每个操作都可通过已实现的基本运算有限次执行完成' },
            { id: 'ch1-4-1-4', label: '输入', detail: '有零个或多个输入' },
            { id: 'ch1-4-1-5', label: '输出', detail: '有一个或多个输出' },
          ],
        },
        {
          id: 'ch1-4-2',
          label: '好算法的标准',
          detail: '正确性、可读性、健壮性、高效率与低存储量需求',
        },
      ],
    },
    {
      id: 'ch1-5',
      label: '算法效率的度量',
      children: [
        {
          id: 'ch1-5-1',
          label: '时间复杂度',
          children: [
            {
              id: 'ch1-5-1-1',
              label: '常见阶排序',
              detail: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)',
            },
            {
              id: 'ch1-5-1-2',
              label: '计算规则',
              detail: '只保留最高阶项，去掉常数系数；关注基本操作的执行次数',
            },
          ],
        },
        {
          id: 'ch1-5-2',
          label: '空间复杂度',
          detail: '算法在运行过程中临时占用存储空间大小的度量，S(n) = O(f(n))',
        },
        {
          id: 'ch1-5-3',
          label: '三种情况复杂度',
          children: [
            {
              id: 'ch1-5-3-1',
              label: '最坏时间复杂度',
              detail: '保证算法在任何输入下的运行时间上界，最常考',
            },
            {
              id: 'ch1-5-3-2',
              label: '平均时间复杂度',
              detail: '对所有可能输入按概率加权求期望',
            },
            {
              id: 'ch1-5-3-3',
              label: '最好时间复杂度',
              detail: '最理想输入下的运行时间，参考价值最小',
            },
          ],
        },
      ],
    },
  ],
}
