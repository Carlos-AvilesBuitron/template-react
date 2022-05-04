import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../redux/store'
import { fetchCount } from './counterAPI'

export interface CounterState {
	value: number
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
	value: 0,
	status: 'idle',
}

// External Thunks
export const incrementAsync = createAsyncThunk(
	'counter/fetchCount',
	async (amount: number) => {
		const response = await fetchCount(amount)
		return response.data
	}
)

// Slice
export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},

	// Handle external thunks
	extraReducers: builder => {
		builder
			.addCase(incrementAsync.pending, state => {
				state.status = 'loading'
			})
			.addCase(incrementAsync.fulfilled, (state, action) => {
				state.status = 'idle'
				state.value += action.payload
			})
			.addCase(incrementAsync.rejected, state => {
				state.status = 'failed'
			})
	},
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Selectors

export const selectCount = (state: RootState) => state.counter.value

export const incrementIfOdd =
	(amount: number): AppThunk =>
	(dispatch, getState) => {
		const currentValue = selectCount(getState())
		if (currentValue % 2 === 1) {
			dispatch(incrementByAmount(amount))
		}
	}

export default counterSlice.reducer
