import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import MindMapView from './components/MindMapView'
import QuizView from './components/QuizView'
import WrongBookView from './components/WrongBookView'
import ProgressView from './components/ProgressView'
import { chapters } from './data/chapters'
import { QuizRecord } from './types'

export type ViewType = 'mindmap' | 'quiz' | 'wrong' | 'progress'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('mindmap')
  const [currentChapter, setCurrentChapter] = useState(1)
  const [darkMode, setDarkMode] = useState(false)
  const [records, setRecords] = useState<QuizRecord[]>(() => {
    try {
      const saved = localStorage.getItem('quiz-records')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('quiz-records', JSON.stringify(records))
  }, [records])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const addRecord = (record: QuizRecord) => {
    setRecords(prev => [...prev, record])
  }

  const clearWrongForQuestion = (questionId: string) => {
    setRecords(prev => prev.filter(r => !(r.questionId === questionId && !r.correct)))
  }

  return (
    <div className="app-container">
      <Sidebar
        currentView={currentView}
        currentChapter={currentChapter}
        onViewChange={setCurrentView}
        onChapterChange={setCurrentChapter}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
      />
      <main className="main-content">
        {currentView === 'mindmap' && (
          <MindMapView chapter={currentChapter} />
        )}
        {currentView === 'quiz' && (
          <QuizView chapter={currentChapter} onRecord={addRecord} />
        )}
        {currentView === 'wrong' && (
          <WrongBookView records={records} onClear={clearWrongForQuestion} />
        )}
        {currentView === 'progress' && (
          <ProgressView records={records} />
        )}
      </main>
    </div>
  )
}

export default App
