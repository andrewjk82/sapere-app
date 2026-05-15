import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, Clock, Lightbulb, CheckCircle2, XCircle, Check } from 'lucide-react';
import MathView from '../MathView';
import ChallengeSketchBoard from './ChallengeSketchBoard';
import { 
  MATH_SYMBOLS, 
  CHALLENGE_YEAR, 
  CHALLENGE_BLUEPRINT,
  getOptions,
  getOptionText,
  getOptionImage
} from '../../utils/challengeUtils';

const ChallengeQuizView = ({
  step,
  questions,
  currentIdx,
  TOTAL_QUESTIONS,
  timeLeft,
  countdown,
  selectedOption,
  setSelectedOption,
  selectedOptionIdx,
  isCorrect,
  subAnswers,
  setSubAnswers,
  userAnswers,
  showHint,
  setShowHint,
  setIsReporting,
  isSubmittingCanvas,
  isMobile,
  showSplitScreen,
  showSideCanvas,
  isTabletCanvasLayout,
  handleAnswer,
  nextQuestion,
  canvasRef,
  answerInputRef,
  shuffledOptions
}) => {
  const currentQuestion = questions[currentIdx] || {};
  // Use pre-shuffled options if provided, else fall back to question's own options
  const displayOptions = shuffledOptions && shuffledOptions.length > 0 ? shuffledOptions : getOptions(currentQuestion);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      style={{ 
        position: 'fixed', 
        inset: 0, 
        backgroundColor: '#f8fafc', 
        zIndex: 2000, 
        padding: isMobile ? '20px 16px' : '40px 20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ 
        maxWidth: showSplitScreen ? '1200px' : '600px', 
        width: '100%', 
        display: 'flex', 
        flexDirection: showSideCanvas ? 'row' : 'column', 
        gap: isMobile ? '20px' : '40px',
        alignItems: 'flex-start',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ flex: 1, maxWidth: showSplitScreen ? '600px' : '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Top Progress & Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Challenge</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>Question {currentIdx + 1} of {TOTAL_QUESTIONS}</div>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: '8px' }}>
              {currentQuestion?.isManual && (
                <button 
                  onClick={() => setIsReporting(true)}
                  className="app-icon-button"
                  style={{ 
                    background: '#fff', 
                    color: '#ef4444',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    width: '36px', height: '36px'
                  }}
                >
                  <Flag size={18} />
                </button>
              )}
               <div style={{ fontSize: '0.9rem', fontWeight: 800, color: timeLeft < 10 ? '#f43f5e' : '#64748b', background: '#fff', padding: '8px 12px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                 <Clock size={16} /> {timeLeft}s
               </div>
            </div>
          </div>

          {/* Time Progress Bar */}
          <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
            <motion.div 
              initial={false}
              animate={{ 
                width: `${(timeLeft / (currentQuestion?.timeLimit || 30)) * 100}%`,
                backgroundColor: timeLeft < 10 ? '#f43f5e' : '#6366f1'
              }}
              style={{ height: '100%' }}
            />
          </div>

          {/* Question Card */}
          <div className="app-panel" style={{ padding: '32px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              {step === 'feedback' && (
                <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
                  {currentQuestion?.year || CHALLENGE_YEAR} • {currentQuestion?.chapterTitle || CHALLENGE_BLUEPRINT?.title || 'Numbers'}
                </span>
              )}
              {currentQuestion?.hint && (
                <button 
                  onClick={() => setShowHint(!showHint)}
                  style={{ 
                    background: showHint ? '#fef3c7' : '#fff7ed', 
                    border: 'none', 
                    padding: '6px 12px', 
                    borderRadius: '10px', 
                    color: '#d97706', 
                    fontSize: '0.75rem', 
                    fontWeight: 800, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>
              )}
            </div>
            <MathView 
              content={currentQuestion?.question} 
              graphData={currentQuestion?.graphData}
              style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1e1b4b', lineHeight: 1.6, margin: 0 }} 
            />
            
            <AnimatePresence>
              {showHint && currentQuestion?.hint && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ marginTop: '16px', padding: '16px', borderRadius: '16px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d97706', marginBottom: '8px' }}>
                      <Lightbulb size={16} />
                      <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.05em' }}>Hint</span>
                    </div>
                    <MathView content={currentQuestion.hint} style={{ color: '#92400e', fontSize: '0.95rem', fontWeight: 600 }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {currentQuestion?.questionImage && (
              <img src={currentQuestion.questionImage} alt="Question" style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginTop: '16px', borderRadius: '16px', background: '#f8fafc' }} />
            )}
          </div>

          {isTabletCanvasLayout && (
            <ChallengeSketchBoard
              placement="tablet"
              questionId={currentQuestion?.id || currentIdx}
              questionType={currentQuestion?.type}
              isSubmitted={step === 'feedback'}
              showSplitScreen={showSplitScreen}
              ref={canvasRef}
            />
          )}

          {currentQuestion?.subQuestions?.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {currentQuestion.subQuestions.map((sq, sIdx) => (
                <div key={sq.id || sIdx} style={{ padding: '24px', borderRadius: '24px', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 900, flexShrink: 0 }}>
                      {String.fromCharCode(97 + sIdx)}
                    </div>
                    <MathView content={sq.question} style={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }} />
                  </div>

                  {sq.type === 'multiple_choice' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                      {(sq.options || []).map((opt, oIdx) => {
                        const isSelected = subAnswers[sq.id || sIdx] === (typeof opt === 'string' ? opt : opt.text);
                        const isCorrectAnswer = step === 'feedback' && (
                          (sq.isManual && String(oIdx) === String(sq.answer)) || (!sq.isManual && String(typeof opt === 'string' ? opt : opt.text) === String(sq.answer))
                        );
                        const isWrong = step === 'feedback' && isSelected && !isCorrectAnswer;

                        return (
                          <button
                            key={oIdx}
                            onClick={() => step !== 'feedback' && setSubAnswers(prev => ({ ...prev, [sq.id || sIdx]: (typeof opt === 'string' ? opt : opt.text) }))}
                            disabled={step === 'feedback'}
                            style={{
                              padding: '12px 16px',
                              borderRadius: '12px',
                              border: `2px solid ${isCorrectAnswer ? '#10b981' : isWrong ? '#ef4444' : isSelected ? '#6366f1' : '#f1f5f9'}`,
                              background: isCorrectAnswer ? '#f0fdf4' : isWrong ? '#fef2f2' : isSelected ? '#f5f3ff' : '#fff',
                              color: isCorrectAnswer ? '#166534' : isWrong ? '#991b1b' : isSelected ? '#4f46e5' : '#64748b',
                              fontWeight: 800,
                              fontSize: '0.85rem',
                              cursor: step === 'feedback' ? 'default' : 'pointer',
                              transition: 'all 0.2s',
                              textAlign: 'left'
                            }}
                          >
                            {String.fromCharCode(65 + oIdx)}. <MathView content={typeof opt === 'string' ? opt : opt.text} style={{ display: 'inline' }} />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text"
                        disabled={step === 'feedback'}
                        value={subAnswers[sq.id || sIdx] || ''}
                        onChange={(e) => step !== 'feedback' && setSubAnswers(prev => ({ ...prev, [sq.id || sIdx]: e.target.value }))}
                        placeholder="Type answer..."
                        style={{ 
                          width: '100%',
                          padding: '12px 16px', 
                          borderRadius: '12px', 
                          border: `2px solid ${step === 'feedback' ? (String(subAnswers[sq.id || sIdx]).replace(/\s+/g, '').toLowerCase() === String(sq.answer).replace(/\s+/g, '').toLowerCase() ? '#10b981' : '#ef4444') : '#f1f5f9'}`, 
                          background: 'white',
                          fontWeight: 700,
                          fontSize: '0.95rem'
                        }}
                      />
                      {step === 'feedback' && String(subAnswers[sq.id || sIdx]).replace(/\s+/g, '').toLowerCase() !== String(sq.answer).replace(/\s+/g, '').toLowerCase() && (
                        <div style={{ marginTop: '8px', fontSize: '0.75rem', color: '#166534', fontWeight: 800, background: '#f0fdf4', padding: '4px 10px', borderRadius: '6px' }}>
                          Correct: <MathView content={String(sq.answer)} style={{ display: 'inline' }} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {step !== 'feedback' && (
                <button 
                  onClick={() => handleAnswer(subAnswers)}
                  disabled={Object.keys(subAnswers).length < currentQuestion.subQuestions.length}
                  className="app-button app-button--primary"
                  style={{ padding: '20px', borderRadius: '24px', fontSize: '1.1rem', marginTop: '12px' }}
                >
                  Submit All Parts
                </button>
              )}
            </div>
          ) : currentQuestion?.type === 'short_answer' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Math Symbol Toolbar */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px', justifyContent: 'center' }}>
                {MATH_SYMBOLS.map(symbol => (
                  <button
                    key={symbol}
                    onClick={(e) => {
                      e.preventDefault();
                      const currentVal = selectedOption || '';
                      setSelectedOption(currentVal + symbol);
                      answerInputRef.current?.focus();
                    }}
                    disabled={step === 'feedback'}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      background: symbol === '²' || symbol === '³' ? '#f5f3ff' : '#fff',
                      color: '#4f46e5',
                      fontSize: symbol === '√' ? '1.3rem' : '1.1rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                      transition: 'all 0.2s',
                      fontFamily: '"KaTeX_Main", "Times New Roman", serif',
                      lineHeight: 1,
                      padding: 0,
                      paddingBottom: symbol === '√' ? '2px' : '0'
                    }}
                  >
                    {symbol}
                  </button>
                ))}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const currentVal = selectedOption || '';
                    setSelectedOption(currentVal.slice(0, -1));
                    answerInputRef.current?.focus();
                  }}
                  disabled={step === 'feedback'}
                  style={{
                    width: '64px',
                    height: '44px',
                    borderRadius: '12px',
                    border: '1px solid #fee2e2',
                    background: '#fff1f2',
                    color: '#e11d48',
                    fontSize: '0.8rem',
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s',
                    textTransform: 'uppercase'
                  }}
                >
                  Del
                </button>
              </div>

              <input 
                ref={answerInputRef}
                type="text"
                disabled={step === 'feedback'}
                value={step === 'feedback' ? userAnswers[currentIdx] || '' : selectedOption || ''}
                onChange={(e) => step !== 'feedback' && setSelectedOption(e.target.value)}
                placeholder="Type your answer..."
                className="app-input"
                style={{ 
                  fontSize: '1.4rem', 
                  padding: '24px', 
                  borderRadius: '24px', 
                  textAlign: 'center', 
                  fontWeight: 700,
                  fontFamily: '"KaTeX_Main", "Times New Roman", serif',
                  letterSpacing: '0.05em'
                }}
                onKeyDown={(e) => e.key === 'Enter' && selectedOption && handleAnswer(selectedOption)}
                autoFocus
              />
              {step !== 'feedback' && (
                <button 
                  onClick={() => handleAnswer(selectedOption)}
                  disabled={!selectedOption}
                  className="app-button app-button--primary"
                  style={{ padding: '18px', borderRadius: '20px' }}
                >
                  Submit Answer
                </button>
              )}
            </div>
          ) : currentQuestion?.type === 'graph_sketch' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ color: '#64748b', fontSize: '0.95rem', textAlign: 'center', marginBottom: '8px' }}>
                Draw your graph on the canvas, then submit it for grading.
              </p>
              {step !== 'feedback' ? (
                <button 
                  onClick={() => handleAnswer('Graph Submitted')}
                  disabled={isSubmittingCanvas}
                  className="app-button app-button--primary"
                  style={{ padding: '18px', borderRadius: '20px' }}
                >
                  {isSubmittingCanvas ? 'Saving Graph...' : 'Submit Graph for Review'}
                </button>
              ) : (
                <div style={{ textAlign: 'center', padding: '16px', background: '#fef3c7', borderRadius: '16px', color: '#d97706', fontWeight: 800 }}>
                  <Check size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />
                  Graph Submitted - Pending Review
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
              {displayOptions.map((opt, i) => {
                const optText = getOptionText(opt);
                const optImage = getOptionImage(opt);
                const isSelected = selectedOptionIdx === i;

                let status = 'default';
                if (step === 'feedback') {
                  const effectiveAnswer = currentQuestion._shuffledAnswer !== undefined ? currentQuestion._shuffledAnswer : currentQuestion.answer;
                  const isCorrectChoice = String(optText) === String(effectiveAnswer) || (currentQuestion._shuffledAnswer === undefined && currentQuestion.isManual && String(i) === String(currentQuestion.answer));
                  if (isCorrectChoice) status = 'correct';
                  else if (isSelected) status = 'wrong';
                }

                return (
                  <button
                    key={i}
                    onClick={() => step !== 'feedback' && handleAnswer(optText, i)}
                    disabled={step === 'feedback'}
                    className={`app-option-card ${status !== 'default' ? `app-option-card--${status}` : isSelected ? 'app-option-card--selected' : ''}`}
                    style={{ 
                      padding: '16px 28px', 
                      textAlign: 'left', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      gap: '16px',
                      border: '2px solid transparent',
                      transition: 'all 0.2s',
                      cursor: step === 'feedback' ? 'default' : 'pointer',
                      borderRadius: '100px',
                      background: status === 'correct' ? '#f0fdf4' : status === 'wrong' ? '#fef2f2' : isSelected ? '#f5f3ff' : '#fff',
                      boxShadow: status === 'correct' ? '0 0 0 2px #10b981' : status === 'wrong' ? '0 0 0 2px #ef4444' : isSelected ? '0 0 0 2px #6366f1' : '0 4px 12px rgba(0,0,0,0.03)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ 
                        width: '32px', height: '32px', borderRadius: '50%', 
                        background: status === 'correct' ? '#10b981' : status === 'wrong' ? '#ef4444' : isSelected ? '#6366f1' : '#f1f5f9', 
                        color: isSelected || status !== 'default' ? 'white' : '#64748b',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 900, fontSize: '0.9rem', flexShrink: 0
                      }}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <div style={{ flex: 1 }}>
                        <MathView content={optText} style={{ fontWeight: 700, fontSize: '1rem' }} />
                        {optImage && <img src={optImage} alt="Option" style={{ maxHeight: '60px', marginTop: '8px', display: 'block', borderRadius: '8px' }} />}
                      </div>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      {status === 'correct' && <CheckCircle2 size={24} style={{ color: '#10b981' }} />}
                      {status === 'wrong' && <XCircle size={24} style={{ color: '#ef4444' }} />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {step === 'feedback' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
              {(() => {
                const isPendingReview = currentQuestion?.type === 'graph_sketch' || currentQuestion?.requiresManualGrading === true;
                
                if (isPendingReview) {
                  return (
                    <div style={{ padding: '24px', borderRadius: '24px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <Clock size={24} color="#d97706" />
                        <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#92400e' }}>
                          Submitted for Review!
                        </span>
                      </div>
                      <p style={{ margin: 0, color: '#b45309', fontSize: '0.95rem', fontWeight: 600 }}>
                        Your teacher will review your work and award points soon.
                      </p>
                    </div>
                  );
                }

                return (
                  <div style={{ padding: '24px', borderRadius: '24px', background: isCorrect ? '#f0fdf4' : '#fef2f2', border: `1px solid ${isCorrect ? '#dcfce7' : '#fee2e2'}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      {isCorrect ? <CheckCircle2 size={24} color="#10b981" /> : <XCircle size={24} color="#ef4444" />}
                      <span style={{ fontSize: '1.1rem', fontWeight: 900, color: isCorrect ? '#166534' : '#991b1b' }}>
                        {isCorrect ? 'Excellent!' : 'Keep going!'}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div style={{ margin: '0 0 16px', padding: '12px 16px', borderRadius: '12px', background: 'white', border: '1px solid #fee2e2' }}>
                        <p style={{ margin: 0, color: '#b91c1c', fontSize: '0.95rem', fontWeight: 800 }}>
                          <span style={{ opacity: 0.7, marginRight: '8px' }}>Correct Answer:</span>
                          <MathView content={
                            currentQuestion._shuffledAnswer !== undefined
                              ? currentQuestion._shuffledAnswer
                              : (currentQuestion.type === 'multiple_choice' && currentQuestion.isManual
                                  ? getOptionText(getOptions(currentQuestion)[parseInt(currentQuestion.answer)])
                                  : currentQuestion.answer)
                          } />
                        </p>
                      </div>
                    )}
                    {currentQuestion?.solution && (
                      <div style={{ background: 'white', padding: '16px', borderRadius: '16px', marginTop: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6366f1', marginBottom: '8px' }}>
                          <Lightbulb size={18} />
                          <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Solution</span>
                        </div>
                        <MathView 
                          content={currentQuestion.solution} 
                          graphData={currentQuestion.graphData}
                          style={{ color: '#475569', fontSize: '0.95rem' }} 
                        />
                      </div>
                    )}
                  </div>
                );
              })()}
              <button onClick={nextQuestion} className="app-button app-button--primary" style={{ padding: '20px', borderRadius: '20px', fontSize: '1.1rem', width: '100%' }}>
                {currentIdx === TOTAL_QUESTIONS - 1 ? (countdown > 0 ? `Finish Challenge (${countdown}s)` : 'Finish Challenge') : (countdown > 0 ? `Next Question (${countdown}s)` : 'Next Question')}
              </button>
            </motion.div>
          )}
        </div>

        {/* Right Side: Working Out Canvas */}
        {showSideCanvas && (
          <ChallengeSketchBoard
            placement="side"
            questionId={currentQuestion?.id || currentIdx}
            questionType={currentQuestion?.type}
            isSubmitted={step === 'feedback'}
            showSplitScreen={showSplitScreen}
            ref={canvasRef}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ChallengeQuizView;
