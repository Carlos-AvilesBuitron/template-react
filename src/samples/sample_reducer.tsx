import { useCallback, useReducer, useRef } from 'react'

interface Todo {
	userId: number
	id: number
	title: string
	completed: boolean
}

type ActionType =
	| { type: 'ADD'; title: string; userId: number }
	| { type: 'REMOVE'; id: number }

function SampleReducer() {
	const newTodoRef = useRef<HTMLInputElement>(null)

	const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
		switch (action.type) {
			case 'ADD':
				return [
					...state,
					{
						userId: action.userId,
						id: state.length,
						title: action.title,
						completed: false,
					},
				]
			case 'REMOVE':
				return state.filter(({ id }) => id !== action.id)
			default:
				throw new Error()
		}
	}, [])

	const onAddTodo = useCallback(() => {
		if (newTodoRef.current) {
			dispatch({
				type: 'ADD',
				userId: 124,
				title: newTodoRef.current ? newTodoRef.current.value : 'Todo Name',
			})
			newTodoRef.current.value = ''
		}
	}, [])

	return (
		<div>
			<div>
				{todos.map(todo => (
					<div key={todo.id}>
						<p>{todo.title}</p>
						<button
							type='button'
							onClick={() => {
								dispatch({
									type: 'REMOVE',
									id: todo.id,
								})
							}}
						>
							Remove
						</button>
					</div>
				))}
			</div>
			<div>
				<p>UseReducer: Sample TODO Reducer</p>
				<input type='text' ref={newTodoRef} />
				<button type='button' onClick={onAddTodo}>
					Create Todo
				</button>
			</div>
		</div>
	)
}

export default SampleReducer
