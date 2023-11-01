import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'src/models/IUser';

interface UserState {
	tasks: IUser[];
	isLoading: boolean;
	error: string;
}

const initialState: UserState = {
	isLoading: false,
	error: '',
	tasks: []
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		add(state, action) {
			state.tasks.push(action.payload);
		},
		removeTask(state, action) {
			const upd = state.tasks.findIndex(
				element => element.id === action.payload
			);
			state.tasks.splice(upd, 1);
		},
		doneTask(state, action) {
			state.tasks.forEach(task => {
				if (task.id === action.payload) {
					task.completed = !task.completed;
				}
			});
		}
	}
});

export default userSlice.reducer;
