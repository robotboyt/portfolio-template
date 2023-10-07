import styles from "./App.module.css";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className={styles.main}>
      <Profile />
    </div>
  );
}

export default App;
