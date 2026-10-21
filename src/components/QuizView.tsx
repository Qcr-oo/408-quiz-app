import { useState, useMemo } from 'react'
import { Question, QuizRecord } from '../types'
import { chapters } from '../data/chapters'
import { getQuestions } from '../data/questions'

interface Props {
  chapter: number
  onRecord: (record: QuizRecord) => void
}

export default function QuizView({ chapter, onRecord }: Props) {
  const questions = useMemo(() => getQuestions(chapter), [chapter])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [finished, setFinished] = useState(false)

  const chapterInfo = chapters.find(c => c.id === chapter)

  if (questions.length === 0) {
    return <div className="view-container"><p>暂无该章节的练习题</p></div>
  }

  const question = questions[currentIndex]

  const handleSubmit = () => {
    if (selected === null) return
    setSubmitted(true)
    const isCorrect = selected === question.answer
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }))
    onRecord({
      questionId: question.id,
      correct: isCorrect,
      timestamp: Date.now(),
    })
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelected(null)
      setSubmitted(false)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelected(null)
    setSubmitted(false)
    setScore({ correct: 0, total: 0 })
    setFinished(false)
  }

  if (finished) {
    const rate = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
    return (
      <div className="view-container">
        <div className="quiz-result">
          <h2>🎉 练习完成！</h2>
          <div className="result-stats">
            <div className="stat-item">
              <span className="stat-number">{score.total}</span>
              <span className="stat-label">总题数</span>
            </div>
            <div className="stat-item">
              <span className="stat-number correct">{score.correct}</span>
              <span className="stat-label">正确</span>
            </div>
            <div className="stat-item">
              <span className="stat-number wrong">{score.total - score.correct}</span>
              <span className="stat-label">错误</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{rate}%</span>
              <span className="stat-label">正确率</span>
            </div>
          </div>
          <button className="btn-primary" onClick={handleRestart}>再来一轮</button>
        </div>
      </div>
    )
  }

  return (
    <div className="view-container">
      <div className="view-header">
        <h2>{chapterInfo?.title} · 练习</h2>
        <span className="quiz-progress-text">
          第 {currentIndex + 1} / {questions.length} 题
        </span>
      </div>

      <div className="quiz-card">
        <div className="question-tags">
          {question.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <p className="question-content">{question.content}</p>

        <div className="options-list">
          {question.options?.map((opt, idx) => {
            let cls = 'option-item'
            if (submitted) {
              if (idx === question.answer) cls += ' correct'
              else if (idx === selected && idx !== question.answer) cls += ' wrong'
            } else if (idx === selected) {
              cls += ' selected'
            }
            return (
              <button
                key={idx}
                className={cls}
                onClick={() => !submitted && setSelected(idx)}
                disabled={submitted}
              >
                <span className="option-letter">{'ABCD'[idx]}</span>
                <span className="option-text">{opt}</span>
              </button>
            )
          })}
        </div>

        {submitted && (
          <div className={`explanation ${selected === question.answer ? 'correct' : 'wrong'}`}>
            <strong>{selected === question.answer ? '✅ 正确！' : '❌ 错误'}</strong>
            <p>{question.explanation}</p>
          </div>
        )}

        <div className="quiz-actions">
          {!submitted ? (
            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={selected === null}
            >
              提交答案
            </button>
          ) : (
            <button className="btn-primary" onClick={handleNext}>
              {currentIndex < questions.length - 1 ? '下一题' : '查看结果'}
            </button>
          )}
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentIndex + (submitted ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
