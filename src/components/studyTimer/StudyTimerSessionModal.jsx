import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import { useStudyTimer, useStudyTimerClock, formatElapsed } from '../../context/studyTimerStore';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';
import StudySessionScreen from './StudySessionScreen';

const MODAL_Z = 10003;   // above the homework / worksheet screens (10000) and the timer pill (10002)

/**
 * The Study Planner's checklist as a modal, for a timer a homework / worksheet screen started:
 *  - 'plan' right after Start: write what to get through; Save closes it and the clock keeps running.
 *  - 'review' on Stop (the timer's Stop button) or when that screen is left: tick off what got done, then
 *    Finish session (saves the notes + time and stops) or Keep studying.
 *  - After the app was closed mid-session: the review is offered once more on the next open (its time was
 *    already credited), see StudyTimerContext `pendingReview`.
 */
export const StudyTimerSessionModal = () => {
  const timer = useStudyTimer();
  const elapsed = useStudyTimerClock();
  const { isAdmin } = useAuth();
  const { profile } = useProfile();
  if (!timer?.uid || isAdmin) return null;
  const colorFor = (subject) => profile?.studySubjectColors?.[subject] || DEFAULT_SUBJECT_COLOR;

  if (timer.sessionStage && timer.origin === 'screen' && timer.phase !== 'stopped') {
    return (
      <StudySessionScreen
        modal
        zIndex={MODAL_Z}
        subject={timer.subject}
        color={colorFor(timer.subject)}
        elapsedLabel={formatElapsed(elapsed)}
        phase={timer.phase}
        stage={timer.sessionStage}
        items={timer.sessionItems}
        onItemsChange={timer.updateSessionItems}
        onPause={timer.pause}
        onResume={timer.resume}
        onRequestEnd={() => timer.openSessionUi('review')}
        onBackToStudy={timer.closeSessionUi}
        onSave={timer.closeSessionUi}
        onFinish={timer.finishSession}
        finishing={timer.finishing}
      />
    );
  }

  const pending = timer.pendingReview;
  if (pending) {
    return (
      <StudySessionScreen
        modal
        zIndex={MODAL_Z}
        subject={pending.subject}
        color={colorFor(pending.subject)}
        elapsedLabel={formatElapsed(pending.durationSec)}
        phase="stopped"
        stage="review"
        items={pending.items}
        onItemsChange={(items) => timer.updatePendingItems(pending, items)}
        onBackToStudy={timer.dismissPendingReview}
        backLabel="Skip"
        hideControls
        onFinish={() => timer.finishPendingReview(pending)}
        finishing={timer.finishing}
      />
    );
  }
  return null;
};
