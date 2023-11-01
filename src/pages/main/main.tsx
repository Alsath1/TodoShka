import s from '../../css/main.module.css';
import { MainTasks } from './main_task/MainTasksInfo';
import { NewTask } from './new_task/NewTask';
import { Tasks } from './tasks/Tasks';

export const Main = () => {
	return (
		<div className={s.main}>
			<NewTask></NewTask>
			<MainTasks></MainTasks>
			<Tasks></Tasks>
		</div>
	);
};
