import { useAppSelector } from 'src/hooks/redux';
import s from '../../../css/MainTasksInfo.module.css';

export const MainTasks = () => {
	const { tasks } = useAppSelector(state => state.userReducer);

	const newArr = tasks.filter(tasks => tasks.completed === true);
	return (
		<div className={s.tasks_info}>
			<div className={s.num_tasks}>
				Количество Задач
				<div className={s.num}>{tasks.length}</div>
			</div>
			<div className={s.succsess_task}>
				Выполненых задач
				<div className={s.num}>
					{newArr.length} из {tasks.length}
				</div>
			</div>
		</div>
	);
};
