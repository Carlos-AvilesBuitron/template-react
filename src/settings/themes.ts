type ThemeColor = {
	background: string
	color: string
}

export interface Theme {
	id: string
	name: string
	colors: Record<string, ThemeColor>
	buttons?: Record<string, Record<string, string>>
}

export const THEME_LIGHT = {
	id: 'light',
	name: 'Light Mode',
	colors: {
		primary: {
			background: '#a8dadc',
			color: '#000',
		},
	},
	buttons: {
		sizes: {
			small: '120px',
			regular: '200px',
			large: '400px',
		},
	},
}

export const THEME_DARK = {
	id: 'dark',
	name: 'Dark Mode',
	colors: {
		primary: {
			background: '#014f86',
			color: '#fff',
		},
	},
	buttons: {
		sizes: {
			small: '120px',
			regular: '200px',
			large: '400px',
		},
	},
}
