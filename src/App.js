import React from 'react';
import Header from './components/Header/Header';
import styles from './app.module.css';
function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
