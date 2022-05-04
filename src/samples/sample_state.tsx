import { useState } from 'react'

// usestate hook assets
interface Payload {
	text: string
}

const TEST_PAYLOAD = {
	text: 'Welcome to UseState',
}

function SampleState() {
	// state
	const [payload] = useState<Payload | null>(TEST_PAYLOAD)

	return (
		<div>
			<p>
				UseState:
				{payload ? payload.text : 'No Payload'}
			</p>
		</div>
	)
}

export default SampleState
