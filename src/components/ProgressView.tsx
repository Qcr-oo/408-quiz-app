import { useMemo } from 'react'
import { QuizRecord } from '../types'
import { chapters } from '../data/chapters'
import { getQuestions } from '../data/questions'

interface Props {
  records: QuizRecord[]
}

export default function ProgressView({ records }: Props) {
  const stats = useMemo(() => {
    return chapters.map(ch => {
      const questions = getQuestions(ch.id)
      const chapterRecords = records.filter(r =>
        questions.some(q => q.id === r.questionId)
      )
      const attempted = new Set(chapterRecords.map(r => r.questionId)).size
      const correctRecords = chapterRecords.filter(r => r.correct)
      const correctCount = new Set(correctRecords.map(r => r.questionId)).size
      const total = questions.length
      const rate = attempted > 0 ? Math.round((correctCount / attempted) * 100) : 0
      return { ...ch, total, attempted, correctCount, rate }
    })
  }, [records])

  const overall = useMemo(() => {
    const totalAttempted = stats.reduce((s, c) => s + c.attempted, 0)
    const totalCorrect = stats.reduce((s, c) => s + c.correctCount, 0)
    const totalQuestions = stats.reduce((s, c) => s + c.total, 0)
    const rate = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0
    return { totalAttempted, totalCorrect, totalQuestions, rate }
  }, [stats])

  return (
    <div className="view-container">
      <div className="view-header">
        <h2>📊 学习进度</h2>
      </div>

      <div className="overview-cards">
        <div className="overview-card">
          <span className="overview-number">{overall.totalAttempted}</span>
          <span className="overview-label">已练题目</span>
        </div>
        <div className="overview-card">
          <span className="overview-number">{overall.totalQuestions}</span>
          <span className="overview-label">总题数</span>
        </div>
        <div className="overview-card">
          <span className="overview-number">{overall.rate}%</span>
          <span className="overview-label">总正确率</span>
        </div>
      </div>

      <div className="chapter-progress-list">
        {stats.map(ch => (
          <div key={ch.id} className="chapter-progress-item">
            <div className="chapter-progress-header">
              <span className="chapter-name">{ch.title}</span>
              <span className="chapter-rate">{ch.rate}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${ch.total > 0 ? (ch.attempted / ch.total) * 100 : 0}%` }}
              />
            </div>
            <div className="chapter-progress-detail">
              已做 {ch.attempted}/{ch.total} 题 · 正确 {ch.correctCount} 题
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
