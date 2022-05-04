import { useCallback, useMemo, useEffect, useState, memo } from 'react'

interface Person {
	id: string
	name: string
	age: number
}

interface Show {
	name: string
	attendance: Person[]
}

interface RenderPeopleProps {
	show: Show
	logName: () => void
}

const People = [
	{
		id: '01',
		name: 'Mike',
		age: 22,
	},
	{
		id: '02',
		name: 'Mary',
		age: 34,
	},
]

function RenderPeople({ show, logName }: RenderPeopleProps) {
	useEffect(() => {
		console.log('Render People has rendered.')
	})

	return (
		<>
			<p>Render People</p>
			<button type='button' onClick={logName}>
				Log Show Name
			</button>
			{show.attendance.map(person => (
				<div key={person.id}>
					<p>
						Name:
						{person.name} - Age:
						{person.age}
					</p>
				</div>
			))}
		</>
	)
}

const MemoRenderPeople = memo(RenderPeople)

function SampleMemoCallback() {
	const [soldTickets, setSoldTickets] = useState(0)

	const incrementSold = () => {
		setSoldTickets(soldTickets + 1)
	}

	const ShowMemo = useMemo(() => {
		const ShowInfo = {
			name: 'Concert',
			attendance: People,
		}

		console.log('Show info calculated')

		return ShowInfo
	}, [])

	const LogShowName = () => {
		console.log(ShowMemo.name)
	}

	const MemoLogShowName = useCallback(LogShowName, [ShowMemo.name])

	useEffect(() => {
		console.log('Sample MemoCallback has rendered.')
	})

	return (
		<>
			<p>UseMemo and UseCallback </p>
			<MemoRenderPeople show={ShowMemo} logName={MemoLogShowName} />
			<button type='button' onClick={incrementSold}>
				Increment Sold:
				{soldTickets}
			</button>
		</>
	)
}

export default SampleMemoCallback
