import React from 'react';
import { useHistory } from 'react-router-dom';
import ContentLayout from '../content-layout';
import styles from './home.module.css';

const checkIfEmpty = (text: string) => text === '';

const Home = () => {
  const history = useHistory();
  const [text, setText] = React.useState('');

  const submitForm = () => history.push({ pathname: '/layout', state: { text } });

  return (
    <ContentLayout>
      <div className={styles['home-container']}>
        <h1 className={styles.title}>Please drop text below:</h1>
        <form onSubmit={submitForm} className={styles.form}>
          <textarea
            className={styles['text-area']}
            placeholder="Drop text here"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button type="submit" className={styles.button} disabled={checkIfEmpty(text)}>
            Go To Layout
          </button>
        </form>
      </div>
    </ContentLayout>
  );
};

export default Home;
