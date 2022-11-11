import styles from './Feedback.module.scss';

export function SubmittedModal() {
  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-black/50 backdrop-blur-sm flex-center px-4">
      <div className={styles.container}>
        <div className="">
          <p>SubmittedModal Placeholder</p>
        </div>
      </div>
    </div>
  );
}
