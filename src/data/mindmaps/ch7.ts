import { MindMapNode } from '../../types'

export const ch7: MindMapNode = {
  id: 'ch7',
  label: '查找',
  children: [
    {
      id: 'ch7-1',
      label: '基本概念',
      children: [
        {
          id: 'ch7-1-1',
          label: 'ASL(平均查找长度)',
          detail: 'ASL = Σ(Pi × Ci)，Pi为查找第i个元素的概率，Ci为比较次数'
        },
        {
          id: 'ch7-1-2',
          label: '查找成功与失败',
          detail: '成功ASL考虑所有元素；失败ASL考虑所有可能的失败情况'
        }
      ]
    },
    {
      id: 'ch7-2',
      label: '顺序查找',
      children: [
        {
          id: 'ch7-2-1',
          label: 'ASL成功 = (n+1)/2',
          detail: '等概率下，平均比较(n+1)/2次'
        },
        {
          id: 'ch7-2-2',
          label: 'ASL失败 = n+1',
          detail: '设哨兵时需比较n+1次才能确定失败'
        },
        {
          id: 'ch7-2-3',
          label: '适用场景',
          detail: '顺序表或链表均可；对有序表可提前终止（查找失败优化）'
        }
      ]
    },
    {
      id: 'ch7-3',
      label: '折半查找(二分查找)',
      children: [
        {
          id: 'ch7-3-1',
          label: '前提条件',
          detail: '必须是顺序存储且按关键字有序；不能用于链表'
        },
        {
          id: 'ch7-3-2',
          label: '判定树',
          detail: '折半查找过程可用判定树描述；树高⌈log₂(n+1)⌉'
        },
        {
          id: 'ch7-3-3',
          label: 'ASL ≈ log₂(n+1) - 1',
          detail: '等概率成功查找的平均比较次数，时间复杂度O(logn)'
        },
        {
          id: 'ch7-3-4',
          label: '不能用于链表',
          detail: '链表无法随机访问中间元素，无法实现O(1)定位mid'
        }
      ]
    },
    {
      id: 'ch7-4',
      label: '分块查找(索引顺序查找)',
      children: [
        {
          id: 'ch7-4-1',
          label: '结构要求',
          detail: '块间有序（后一块所有元素 > 前一块所有元素），块内可以无序'
        },
        {
          id: 'ch7-4-2',
          label: '查找过程',
          detail: '先在索引表中确定块（可用折半或顺序），再在块内顺序查找'
        },
        {
          id: 'ch7-4-3',
          label: '最优分块',
          detail: '每块s=√n时ASL最小，约为√n'
        }
      ]
    },
    {
      id: 'ch7-5',
      label: '二叉排序树(BST)',
      children: [
        {
          id: 'ch7-5-1',
          label: '性质',
          detail: '左子树所有结点值 < 根 < 右子树所有结点值；递归定义'
        },
        {
          id: 'ch7-5-2',
          label: '中序遍历有序',
          detail: 'BST的中序序列为递增有序序列'
        },
        {
          id: 'ch7-5-3',
          label: '插入',
          detail: '从根开始比较，小于当前结点往左，大于往右，找到空位置插入'
        },
        {
          id: 'ch7-5-4',
          label: '删除三种情况',
          detail: '①叶子直接删；②只有一个孩子，孩子顶替；③有两个孩子，用中序前驱或后继替代后删除替代结点'
        },
        {
          id: 'ch7-5-5',
          label: 'ASL取决于树的形态',
          detail: '最好O(logn)（平衡），最坏O(n)（退化为单支树）'
        }
      ]
    },
    {
      id: 'ch7-6',
      label: '平衡二叉树(AVL)',
      children: [
        {
          id: 'ch7-6-1',
          label: '平衡因子',
          detail: 'BF = 左子树高度 - 右子树高度；AVL中|BF|≤1'
        },
        {
          id: 'ch7-6-2',
          label: 'LL旋转(右单旋)',
          detail: '在左孩子的左子树插入导致失衡，对最小不平衡子树根做右旋'
        },
        {
          id: 'ch7-6-3',
          label: 'RR旋转(左单旋)',
          detail: '在右孩子的右子树插入导致失衡，对最小不平衡子树根做左旋'
        },
        {
          id: 'ch7-6-4',
          label: 'LR旋转(先左后右)',
          detail: '在左孩子的右子树插入，先对左孩子左旋，再对根右旋'
        },
        {
          id: 'ch7-6-5',
          label: 'RL旋转(先右后左)',
          detail: '在右孩子的左子树插入，先对右孩子右旋，再对根左旋'
        },
        {
          id: 'ch7-6-6',
          label: '最小不平衡子树',
          detail: '从插入点向上找第一个|BF|>1的结点为根的子树，只需调整该子树'
        },
        {
          id: 'ch7-6-7',
          label: '时间复杂度O(logn)',
          detail: 'AVL树高度为O(logn)，查找/插入/删除均为O(logn)'
        }
      ]
    },
    {
      id: 'ch7-7',
      label: '红黑树',
      children: [
        {
          id: 'ch7-7-1',
          label: '五条性质',
          detail: '①每结点红或黑；②根黑；③叶(NIL)黑；④红结点的孩子必黑；⑤任一结点到叶的所有路径黑结点数相同'
        },
        {
          id: 'ch7-7-2',
          label: '最长路径≤2倍最短',
          detail: '由性质④⑤保证：最短全黑，最长红黑交替，故最长≤2×最短'
        },
        {
          id: 'ch7-7-3',
          label: '高度O(logn)',
          detail: '红黑树是近似平衡的BST，查找效率O(logn)'
        }
      ]
    },
    {
      id: 'ch7-8',
      label: 'B树(多路平衡查找树)',
      children: [
        {
          id: 'ch7-8-1',
          label: 'm阶B树定义',
          detail: '每个结点最多m棵子树、m-1个关键字；除根外至少⌈m/2⌉棵子树'
        },
        {
          id: 'ch7-8-2',
          label: '所有叶子同层',
          detail: 'B树是绝对平衡的，所有失败结点（叶子）在同一层'
        },
        {
          id: 'ch7-8-3',
          label: '插入与分裂',
          detail: '关键字数超过m-1时，中间关键字上提，左右各成一新结点'
        },
        {
          id: 'ch7-8-4',
          label: '删除与合并',
          detail: '关键字数少于⌈m/2⌉-1时，向兄弟借或与兄弟及父结点中关键字合并'
        },
        {
          id: 'ch7-8-5',
          label: '适合外存查找',
          detail: '树矮胖，磁盘I/O次数少；每个结点对应一个磁盘块'
        }
      ]
    },
    {
      id: 'ch7-9',
      label: 'B+树',
      children: [
        {
          id: 'ch7-9-1',
          label: '与B树的区别',
          detail: '所有关键字都出现在叶子结点；非叶结点仅起索引作用（不存数据指针）'
        },
        {
          id: 'ch7-9-2',
          label: '叶子结点链表',
          detail: '所有叶子按关键字大小用指针链接成有序链表，便于顺序访问'
        },
        {
          id: 'ch7-9-3',
          label: '范围查找高效',
          detail: '找到范围起点后沿叶子链表顺序扫描即可，无需回溯'
        },
        {
          id: 'ch7-9-4',
          label: '非叶结点关键字与子树关系',
          detail: 'n个关键字对应n棵子树（B树是n+1棵）'
        }
      ]
    },
    {
      id: 'ch7-10',
      label: '散列表(Hash表)',
      children: [
        {
          id: 'ch7-10-1',
          label: '散列函数构造',
          detail: '直接定址法、除留余数法、数字分析法、平方取中法等'
        },
        {
          id: 'ch7-10-2',
          label: '除留余数法',
          detail: 'H(key) = key % p，p一般取不大于表长的最大质数'
        },
        {
          id: 'ch7-10-3',
          label: '开放定址法',
          detail: 'Hi = (H(key) + di) % m；di=1,2,...为线性探测；di=1²,-1²,2²,-2²为二次探测'
        },
        {
          id: 'ch7-10-4',
          label: '线性探测的堆积问题',
          detail: '容易产生"堆积"（非同义词争夺同一后继），二次探测可缓解'
        },
        {
          id: 'ch7-10-5',
          label: '拉链法(链地址法)',
          detail: '将同义词链在同一单链表中；装填因子可>1；删除方便'
        },
        {
          id: 'ch7-10-6',
          label: '装填因子α',
          detail: 'α = 表中记录数/散列表长度；α越大冲突越多，查找越慢'
        },
        {
          id: 'ch7-10-7',
          label: 'ASL计算',
          detail: '成功ASL = Σ(每个元素比较次数)/n；失败ASL = Σ(每个散列地址到空位的探测次数)/表长'
        }
      ]
    }
  ]
}
