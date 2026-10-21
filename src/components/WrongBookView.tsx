import { useMemo } from 'react'
import { QuizRecord } from '../types'
import { getAllQuestions } from '../data/questions'

interface Props {
  records: QuizRecord[]
  onClear: (questionId: string) => void
}

export default function WrongBookView({ records, onClear }: Props) {
  const wrongQuestions = useMemo(() => {
    const wrongIds = new Set(
      records.filter(r => !r.correct).map(r => r.questionId)
    )
    const correctIds = new Set(
      records.filter(r => r.correct).map(r => r.questionId)
    )
    // Only show questions that were wrong and not yet answered correctly afterwards
    const stillWrong = [...wrongIds].filter(id => !correctIds.has(id))
    const allQ = getAllQuestions()
    return allQ.filter(q => stillWrong.includes(q.id))
  }, [records])

  return (
    <div className="view-container">
      <div className="view-header">
        <h2>❌ 错题本</h2>
        <span className="quiz-progress-text">{wrongQuestions.length} 道待复习</span>
      </div>

      {wrongQuestions.length === 0 ? (
        <div className="empty-state">
          <p>🎉 太棒了，没有错题！</p>
        </div>
      ) : (
        <div className="wrong-list">
          {wrongQuestions.map(q => (
            <div key={q.id} className="wrong-card">
              <div className="question-tags">
                {q.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <p className="question-content">{q.content}</p>
              <div className="options-list compact">
                {q.options?.map((opt, idx) => (
                  <div
                    key={idx}
                    className={`option-item static ${idx === q.answer ? 'correct' : ''}`}
                  >
                    <span className="option-letter">{'ABCD'[idx]}</span>
                    <span className="option-text">{opt}</span>
                  </div>
                ))}
              </div>
              <div className="explanation correct">
                <strong>正确答案：{'ABCD'[q.answer as number]}</strong>
                <p>{q.explanation}</p>
              </div>
              <button
                className="btn-small"
                onClick={() => onClear(q.id)}
              >
                已掌握，移出错题本
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
