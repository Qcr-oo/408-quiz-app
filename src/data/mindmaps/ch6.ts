import { MindMapNode } from '../../types'

export const ch6: MindMapNode = {
  id: 'ch6',
  label: '图',
  children: [
    {
      id: 'ch6-1',
      label: '基本概念',
      children: [
        {
          id: 'ch6-1-1',
          label: '有向图与无向图',
          detail: '有向图边用<v,w>表示有序对；无向图边用(v,w)表示无序对'
        },
        {
          id: 'ch6-1-2',
          label: '完全图边数',
          detail: '无向完全图：n(n-1)/2条边；有向完全图：n(n-1)条弧'
        },
        {
          id: 'ch6-1-3',
          label: '度与边数关系',
          detail: '无向图：边数 = 所有顶点度数之和/2；有向图：弧数 = 入度之和 = 出度之和'
        },
        {
          id: 'ch6-1-4',
          label: '连通与强连通',
          detail: '无向图连通：任意两顶点有路径；有向图强连通：任意两顶点互相可达'
        },
        {
          id: 'ch6-1-5',
          label: '连通分量与强连通分量',
          detail: '非连通图的极大连通子图；非强连通有向图的极大强连通子图'
        },
        {
          id: 'ch6-1-6',
          label: '生成树',
          detail: '连通图的极小连通子图，含n个顶点n-1条边；去掉任一边则不连通'
        },
        {
          id: 'ch6-1-7',
          label: '稀疏图与稠密图',
          detail: '边数接近完全图为稠密图，远小于完全图为稀疏图'
        }
      ]
    },
    {
      id: 'ch6-2',
      label: '图的存储',
      children: [
        {
          id: 'ch6-2-1',
          label: '邻接矩阵',
          detail: 'n×n矩阵，空间O(n²)；适合稠密图；无向图矩阵对称'
        },
        {
          id: 'ch6-2-2',
          label: '邻接表',
          detail: '每个顶点一个单链表存其邻接点；空间O(n+e)；适合稀疏图'
        },
        {
          id: 'ch6-2-3',
          label: '十字链表(有向图)',
          detail: '弧结点含tailvex/headvex/tlink/hlink；便于求入度和出度'
        },
        {
          id: 'ch6-2-4',
          label: '邻接多重表(无向图)',
          detail: '每条边用一个结点表示，含ivex/ilink/jvex/jlink；便于边的操作'
        },
        {
          id: 'ch6-2-5',
          label: '带权图(网)的存储',
          detail: '邻接矩阵中存权值，不邻接存∞；邻接表结点增加权值域'
        }
      ]
    },
    {
      id: 'ch6-3',
      label: '图的遍历',
      children: [
        {
          id: 'ch6-3-1',
          label: 'BFS(广度优先)',
          detail: '借助队列；邻接矩阵O(n²)，邻接表O(n+e)'
        },
        {
          id: 'ch6-3-2',
          label: 'BFS求最短路径',
          detail: '无权图中BFS首次到达某顶点的路径即为最短路径'
        },
        {
          id: 'ch6-3-3',
          label: 'DFS(深度优先)',
          detail: '借助栈（递归）；邻接矩阵O(n²)，邻接表O(n+e)'
        },
        {
          id: 'ch6-3-4',
          label: '遍历序列不唯一',
          detail: '同一图从同一顶点出发，因邻接点访问顺序不同，遍历序列可能不同'
        }
      ]
    },
    {
      id: 'ch6-4',
      label: '最小生成树(MST)',
      children: [
        {
          id: 'ch6-4-1',
          label: 'Prim算法',
          detail: '从顶点出发逐步扩展；时间O(n²)，适合稠密图'
        },
        {
          id: 'ch6-4-2',
          label: 'Kruskal算法',
          detail: '按边权从小到大选边（用并查集判环）；时间O(eloge)，适合稀疏图'
        },
        {
          id: 'ch6-4-3',
          label: 'MST性质',
          detail: 'MST包含n-1条边；权值之和最小'
        },
        {
          id: 'ch6-4-4',
          label: 'MST不唯一条件',
          detail: '当存在权值相同的边时，MST可能不唯一；但权值之和唯一'
        },
        {
          id: 'ch6-4-5',
          label: 'Cut性质与Cycle性质',
          detail: 'Cut：跨越任一割的最小边必在某MST中；Cycle：环上最大边不在MST中'
        }
      ]
    },
    {
      id: 'ch6-5',
      label: '最短路径',
      children: [
        {
          id: 'ch6-5-1',
          label: 'Dijkstra算法',
          detail: '单源最短路径，贪心策略；不能处理负权边；时间O(n²)（邻接矩阵）'
        },
        {
          id: 'ch6-5-2',
          label: 'Dijkstra过程',
          detail: '维护已确定集合S和dist[]数组，每次选dist最小的未确定顶点加入S并松弛'
        },
        {
          id: 'ch6-5-3',
          label: 'Floyd算法',
          detail: '所有顶点对间最短路径，动态规划；时间O(n³)，空间O(n²)'
        },
        {
          id: 'ch6-5-4',
          label: 'Floyd可处理负权',
          detail: '可处理负权边但不能有负权回路；三重循环k在最外层'
        }
      ]
    },
    {
      id: 'ch6-6',
      label: '拓扑排序',
      children: [
        {
          id: 'ch6-6-1',
          label: 'AOV网',
          detail: '用顶点表示活动的有向无环图(DAG)，边表示优先关系'
        },
        {
          id: 'ch6-6-2',
          label: '算法过程',
          detail: '选入度为0的顶点输出，删除该顶点及其出边，重复直到无入度为0的顶点'
        },
        {
          id: 'ch6-6-3',
          label: '判断有环',
          detail: '若输出的顶点数 < n，则图中有环'
        },
        {
          id: 'ch6-6-4',
          label: '拓扑序列不唯一',
          detail: '同一DAG可能有多个合法拓扑序列'
        }
      ]
    },
    {
      id: 'ch6-7',
      label: '关键路径',
      children: [
        {
          id: 'ch6-7-1',
          label: 'AOE网',
          detail: '用边表示活动的有向无环图；顶点表示事件，边权表示活动持续时间'
        },
        {
          id: 'ch6-7-2',
          label: '事件最早发生时间ve',
          detail: '从源点出发按拓扑序正向递推：ve(j) = max{ve(i)+w(i,j)}'
        },
        {
          id: 'ch6-7-3',
          label: '事件最迟发生时间vl',
          detail: '从汇点出发按逆拓扑序反向递推：vl(i) = min{vl(j)-w(i,j)}'
        },
        {
          id: 'ch6-7-4',
          label: '活动余量(松弛时间)',
          detail: 'e(i) = ve(起点)；l(i) = vl(终点)-w；余量 = l(i)-e(i)'
        },
        {
          id: 'ch6-7-5',
          label: '关键活动与关键路径',
          detail: '余量为0的活动为关键活动；关键活动构成关键路径（源点到汇点最长路径）'
        },
        {
          id: 'ch6-7-6',
          label: '缩短工期',
          detail: '只有缩短关键活动才能缩短工期；关键路径可能不唯一'
        }
      ]
    }
  ]
}
