/** @format */
import styles from './css/App.module.css';
import { Header } from './pages/header/header';
import { Main } from './pages/main/main';

function App() {
	return (
		<div className={styles.main}>
			<Header></Header>
			<Main></Main>
		</div>
	);
}

export default App;
