import { useAppSelector } from 'src/hooks/redux';
import s from '../../css/main.module.css';
import { MainTasks } from './main_task/MainTasksInfo';
import { NewTask } from './new_task/NewTask';
import { Tasks } from './tasks/Tasks';
import img from '../../img/1.png';
export const Main = () => {
	const { tasks } = useAppSelector(state => state.userReducer);
	return (
		<div className={s.main}>
			<NewTask></NewTask>
			<MainTasks></MainTasks>
			{tasks.length === 0 ? (
				<div className={s.notImg}>
					<img src={img}></img>
					<div>You don't have any registered tasks yet</div>
					<div>Create tasks and organize your affairs</div>
				</div>
			) : (
				<Tasks />
			)}
		</div>
	);
};
