import { useState } from 'react'
import { MindMapNode } from '../types'
import { chapters } from '../data/chapters'
import { getMindMap } from '../data/mindmaps'

interface Props {
  chapter: number
}

function TreeNode({ node, depth = 0 }: { node: MindMapNode; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 2)
  const [showDetail, setShowDetail] = useState(false)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div className={`tree-node depth-${Math.min(depth, 4)}`}>
      <div
        className="tree-node-header"
        onClick={() => {
          if (hasChildren) setExpanded(!expanded)
          if (node.detail) setShowDetail(!showDetail)
        }}
      >
        {hasChildren && (
          <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>▶</span>
        )}
        {!hasChildren && <span className="leaf-dot">●</span>}
        <span className="node-label">{node.label}</span>
        {node.detail && <span className="detail-hint">💡</span>}
      </div>

      {showDetail && node.detail && (
        <div className="node-detail">{node.detail}</div>
      )}

      {expanded && hasChildren && (
        <div className="tree-children">
          {node.children!.map(child => (
            <TreeNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function MindMapView({ chapter }: Props) {
  const chapterInfo = chapters.find(c => c.id === chapter)
  const mindMapData = getMindMap(chapter)

  if (!mindMapData) {
    return <div className="view-container"><p>暂无该章节的思维导图数据</p></div>
  }

  return (
    <div className="view-container">
      <div className="view-header">
        <h2>{chapterInfo?.title} · 思维导图</h2>
        <p className="view-hint">点击节点展开/折叠，点击 💡 查看详细说明</p>
      </div>
      <div className="mindmap-container">
        <TreeNode node={mindMapData} depth={0} />
      </div>
    </div>
  )
}
