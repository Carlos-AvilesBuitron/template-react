// samples
import SampleState from '../samples/sample_state'
import SampleReducer from '../samples/sample_reducer'
import SampleMemoCallback from '../samples/samples_memocallback'

function HooksView() {
	return (
		<div>
			<SampleState />
			<SampleReducer />
			<SampleMemoCallback />
		</div>
	)
}

export default HooksView
