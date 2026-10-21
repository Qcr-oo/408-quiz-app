import { chapters } from '../data/chapters'
import { ViewType } from '../App'

interface Props {
  currentView: ViewType
  currentChapter: number
  onViewChange: (view: ViewType) => void
  onChapterChange: (chapter: number) => void
  darkMode: boolean
  onToggleDark: () => void
}

const navItems: { key: ViewType; label: string; icon: string }[] = [
  { key: 'mindmap', label: '思维导图', icon: '🗺️' },
  { key: 'quiz', label: '章节练习', icon: '✏️' },
  { key: 'wrong', label: '错题本', icon: '❌' },
  { key: 'progress', label: '学习进度', icon: '📊' },
]

export default function Sidebar({
  currentView,
  currentChapter,
  onViewChange,
  onChapterChange,
  darkMode,
  onToggleDark,
}: Props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="app-title">408 数据结构</h1>
        <p className="app-subtitle">考研助手</p>
      </div>

      <nav className="nav-section">
        {navItems.map(item => (
          <button
            key={item.key}
            className={`nav-btn ${currentView === item.key ? 'active' : ''}`}
            onClick={() => onViewChange(item.key)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {(currentView === 'mindmap' || currentView === 'quiz') && (
        <div className="chapter-section">
          <h3 className="section-title">章节</h3>
          {chapters.map(ch => (
            <button
              key={ch.id}
              className={`chapter-btn ${currentChapter === ch.id ? 'active' : ''}`}
              onClick={() => onChapterChange(ch.id)}
            >
              {ch.shortTitle}
            </button>
          ))}
        </div>
      )}

      <div className="sidebar-footer">
        <button className="theme-toggle" onClick={onToggleDark}>
          {darkMode ? '☀️ 浅色模式' : '🌙 深色模式'}
        </button>
      </div>
    </aside>
  )
}
