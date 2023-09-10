import styles from './css/App.module.css';
import BottomSheet from './components/bottomsheet';

function App() {
  return (
    <div className={styles.App}>
      <span className={styles.header}>SPRING BOTTOM SHEET</span>
      <div className={styles.contentdiv}>
        <p className={styles.para}>
          This is an assignment to show case that bottom sheets can be implemented with pure javascript and logics.<br /><br />
          I have made sure this website is responsive for people to notice on any device.<br /><br />
          Now something about react-spring-bottom-sheet:
          <ul>
            <li><b>React-spring-bottom-sheet</b> is built on top of react-spring and react-use-gesture.</li>
            <li> It busts the myth that accessibility and supporting keyboard navigation and screen readers are allegedly at odds with delightful, beautiful, and highly animated UIs.</li>
            <li>Every animation and transition use CSS custom properties instead of manipulating them directly, allowing complete control over the experience from CSS alone.</li>
          </ul>
          Swipe up the bottom sheet to know how I implemented it without libraries ;)
        </p>
      </div>
      <BottomSheet  />
    </div>
  );
}

export default App;
