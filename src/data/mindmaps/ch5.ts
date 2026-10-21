import { MindMapNode } from '../../types'

export const ch5: MindMapNode = {
  id: 'ch5',
  label: '树与二叉树',
  children: [
    {
      id: 'ch5-1',
      label: '树的基本概念',
      children: [
        {
          id: 'ch5-1-1',
          label: '结点的度',
          detail: '结点拥有的子树数称为该结点的度；树的度是树中所有结点度的最大值'
        },
        {
          id: 'ch5-1-2',
          label: '层次与深度',
          detail: '根结点为第1层；树的深度（高度）是树中结点的最大层次'
        },
        {
          id: 'ch5-1-3',
          label: '双亲、孩子、兄弟',
          detail: '同一双亲的孩子互称兄弟；结点的祖先是从根到该结点路径上的所有结点'
        },
        {
          id: 'ch5-1-4',
          label: '有序树与无序树',
          detail: '有序树中结点的子树有左右之分，不能互换'
        },
        {
          id: 'ch5-1-5',
          label: '路径与路径长度',
          detail: '路径长度是路径上经过的边数；树的路径长度是从根到每个结点路径长度之和'
        }
      ]
    },
    {
      id: 'ch5-2',
      label: '二叉树的性质',
      children: [
        {
          id: 'ch5-2-1',
          label: '第i层最多2^(i-1)个结点',
          detail: 'i≥1，由归纳法可证'
        },
        {
          id: 'ch5-2-2',
          label: '深度为k最多2^k-1个结点',
          detail: '即满二叉树的结点总数'
        },
        {
          id: 'ch5-2-3',
          label: 'n0 = n2 + 1',
          detail: '叶子结点数 = 度为2的结点数 + 1；由分支总数 = n-1 = n1+2n2 推出'
        },
        {
          id: 'ch5-2-4',
          label: '完全二叉树编号性质',
          detail: '编号i的结点：双亲为⌊i/2⌋，左孩子为2i，右孩子为2i+1（若存在）'
        },
        {
          id: 'ch5-2-5',
          label: 'n个结点完全二叉树深度',
          detail: '深度为⌊log₂n⌋+1'
        }
      ]
    },
    {
      id: 'ch5-3',
      label: '特殊二叉树',
      children: [
        {
          id: 'ch5-3-1',
          label: '满二叉树',
          detail: '所有分支结点都有左右子树，所有叶子在同一层；深度k时有2^k-1个结点'
        },
        {
          id: 'ch5-3-2',
          label: '完全二叉树',
          detail: '按层序编号，与同深度满二叉树编号一一对应；叶子只出现在最后两层'
        },
        {
          id: 'ch5-3-3',
          label: '二叉排序树(BST)',
          detail: '左子树所有结点值 < 根 < 右子树所有结点值；中序遍历有序'
        },
        {
          id: 'ch5-3-4',
          label: '平衡二叉树(AVL)',
          detail: '任意结点左右子树高度差绝对值≤1'
        }
      ]
    },
    {
      id: 'ch5-4',
      label: '二叉树的存储',
      children: [
        {
          id: 'ch5-4-1',
          label: '顺序存储',
          detail: '按完全二叉树编号规则存入数组对应位置；适合完全二叉树，一般二叉树浪费空间'
        },
        {
          id: 'ch5-4-2',
          label: '二叉链表',
          detail: '每个结点含data、lchild、rchild三个域；n个结点有n+1个空链域'
        },
        {
          id: 'ch5-4-3',
          label: '三叉链表',
          detail: '在二叉链表基础上增加parent指针，便于找双亲'
        }
      ]
    },
    {
      id: 'ch5-5',
      label: '二叉树的遍历',
      children: [
        {
          id: 'ch5-5-1',
          label: '先序遍历(根左右)',
          detail: '递归/非递归（栈）实现'
        },
        {
          id: 'ch5-5-2',
          label: '中序遍历(左根右)',
          detail: 'BST的中序遍历为有序序列'
        },
        {
          id: 'ch5-5-3',
          label: '后序遍历(左右根)',
          detail: '常用于表达式求值、释放树'
        },
        {
          id: 'ch5-5-4',
          label: '层序遍历',
          detail: '借助队列，逐层从左到右访问'
        },
        {
          id: 'ch5-5-5',
          label: '由遍历序列确定二叉树',
          detail: '先序+中序 或 后序+中序 可唯一确定；先序+后序不能唯一确定（除非只有一个结点）'
        }
      ]
    },
    {
      id: 'ch5-6',
      label: '线索二叉树',
      children: [
        {
          id: 'ch5-6-1',
          label: 'ltag/rtag标志',
          detail: 'ltag=0表示lchild指向左孩子，ltag=1表示lchild指向前驱；rtag类似'
        },
        {
          id: 'ch5-6-2',
          label: '中序线索化',
          detail: '在中序遍历过程中将空链域改为指向前驱/后继的线索'
        },
        {
          id: 'ch5-6-3',
          label: '找中序后继',
          detail: '若rtag=1则后继为rchild所指；否则后继为右子树最左下结点'
        },
        {
          id: 'ch5-6-4',
          label: '带头结点的线索链表',
          detail: '头结点lchild指向根，rchild指向中序序列最后一个结点'
        }
      ]
    },
    {
      id: 'ch5-7',
      label: '树、森林与二叉树的转换',
      children: [
        {
          id: 'ch5-7-1',
          label: '左孩子右兄弟表示法',
          detail: '树的每个结点：第一个孩子作为二叉树的左孩子，下一个兄弟作为右孩子'
        },
        {
          id: 'ch5-7-2',
          label: '树→二叉树',
          detail: '树转换为二叉树后，根结点无右子树（因为根无兄弟）'
        },
        {
          id: 'ch5-7-3',
          label: '森林→二叉树',
          detail: '各树的根互为兄弟，依次用右链连接'
        },
        {
          id: 'ch5-7-4',
          label: '遍历对应关系',
          detail: '树的先根遍历 = 对应二叉树的先序遍历；树的后根遍历 = 对应二叉树的中序遍历'
        }
      ]
    },
    {
      id: 'ch5-8',
      label: '哈夫曼树与哈夫曼编码',
      children: [
        {
          id: 'ch5-8-1',
          label: 'WPL(带权路径长度)',
          detail: 'WPL = Σ(权值 × 根到该结点路径长度)，仅对叶子结点计算'
        },
        {
          id: 'ch5-8-2',
          label: '构造方法',
          detail: '每次选权值最小的两棵树合并为新树，新根权值为两者之和，重复直到只剩一棵'
        },
        {
          id: 'ch5-8-3',
          label: '2n-1个结点',
          detail: 'n个叶子构造的哈夫曼树共有2n-1个结点（无度为1的结点）'
        },
        {
          id: 'ch5-8-4',
          label: '哈夫曼编码',
          detail: '左分支标0右分支标1（或反之）；是前缀码，任一字符编码不是另一字符编码的前缀'
        },
        {
          id: 'ch5-8-5',
          label: '哈夫曼树不唯一',
          detail: '权值相的结点合并顺序不同可得不同形态的哈夫曼树，但WPL相同'
        }
      ]
    },
    {
      id: 'ch5-9',
      label: '并查集',
      children: [
        {
          id: 'ch5-9-1',
          label: '基本操作',
          detail: 'MakeSet初始化、Find查找根结点（判断是否同集合）、Union合并两个集合'
        },
        {
          id: 'ch5-9-2',
          label: '树形表示',
          detail: '每个集合用一棵树表示，根结点为集合代表元；parent数组存储'
        },
        {
          id: 'ch5-9-3',
          label: '按秩合并',
          detail: '将矮的树合并到高的树上，保持树高O(logn)'
        },
        {
          id: 'ch5-9-4',
          label: '路径压缩',
          detail: 'Find时将路径上所有结点直接指向根，均摊复杂度接近O(α(n))'
        }
      ]
    }
  ]
}
