import { lazy, Suspense, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { THEME_LIGHT, Theme } from './settings/themes'
// Lazy Loaded Routes
const CounterView = lazy(() => import('./views/counter'))
const UsersView = lazy(() => import('./views/users'))
const HomeView = lazy(() => import('./views/home'))
const HooksView = lazy(() => import('./views/hooks'))

function Loading() {
	return <p>Loading ...</p>
}

function App() {
	const [currentTheme] = useState<Theme>(THEME_LIGHT)

	// sample click functions
	/*
	const swapTheme = (): void => {
		
	}

	const PassData = (e: React.MouseEvent<HTMLButtonElement>, data: any) => {
		e.preventDefault()
		return data
	}
	*/

	return (
		<div className='App'>
			<ThemeProvider theme={currentTheme}>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/counter'>Counter</Link>
					</li>
					<li>
						<Link to='/users'>Account</Link>
					</li>
					<li>
						<Link to='/hooks'>Hooks</Link>
					</li>
				</ul>

				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path='/' element={<HomeView />} />
						<Route path='/counter' element={<CounterView />} />
						<Route path='/users' element={<UsersView />} />
						<Route path='/hooks' element={<HooksView />} />
					</Routes>
				</Suspense>
			</ThemeProvider>
		</div>
	)
}

export default App
