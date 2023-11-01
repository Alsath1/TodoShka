import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import s from '../../../css/newTask.module.css';
import { userSlice } from 'src/store/reducers/UserSlice';
import { useState } from 'react';
import { HomeSvgSel } from 'src/HomeSvgSel';
export const NewTask = () => {
	const [task, setTask] = useState('');
	const dispatch = useAppDispatch();
	const { add } = userSlice.actions;
	// важная штука
	const { tasks } = useAppSelector(state => state.userReducer);
	//---------------------------

	const ChangeHandler = event => {
		setTask(event?.currentTarget.value);
	};

	const ChangeDispatchHandler = () => {
		const newTask = {
			id: tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1,
			text: task,
			completed: false
		};
		if (task.length >= 1 && task.length <= 250) {
			dispatch(add(newTask));
		}
	};
	return (
		<div className={s.new_task}>
			<input
				className={s.input}
				type='text'
				placeholder='Add a new task'
				onChange={ChangeHandler}
			/>

			<div className={s.new_task_btn} onClick={ChangeDispatchHandler}>
				<div
					style={{ backgroundColor: task ? '#1E6F9F' : '#9f1e1e' }}
					className={s.text}
				>
					Add
					<HomeSvgSel id='add' />
				</div>
			</div>
			<div></div>
		</div>
	);
};
