import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'

test('renders headline', async () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	)

	expect(screen.getByText('Welcome to React template.')).toBeInTheDocument()
})
