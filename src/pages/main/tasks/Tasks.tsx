import { HomeSvgSel } from 'src/HomeSvgSel';
import s from '../../../css/Tasks.module.css';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { userSlice } from 'src/store/reducers/UserSlice';

export const Tasks = () => {
	const dispatch = useAppDispatch();
	const { tasks } = useAppSelector(state => state.userReducer);
	const { removeTask, doneTask } = userSlice.actions;

	const handlerRemove = id => {
		dispatch(removeTask(id));
	};
	const handlerDone = id => {
		dispatch(doneTask(id));
	};
	return (
		<ul>
			{tasks.map(tasks => (
				<li key={tasks.id} className={s.main_tasks}>
					<div className={s.task}>
						<div
							className={s.done}
							onClick={() => {
								handlerDone(tasks.id);
							}}
						>
							<HomeSvgSel id={tasks.completed ? 'full-done' : 'done'} />
						</div>

						<div
							className={s.text}
							style={{
								textDecoration: tasks.completed ? 'line-through' : '',
								color: tasks.completed ? '#808080' : 'white'
							}}
						>
							{tasks.text}
						</div>
						<div
							className={s.trash}
							onClick={() => {
								handlerRemove(tasks.id);
							}}
						>
							<HomeSvgSel id='trash' />
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};
