import { useState, useEffect } from 'react'

export const useFetch = <T extends {}>(
	url: string,
	initialState: T
): [T, boolean] => {
	const [data, setData] = useState<T>(initialState)
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		if (!url) return
		;(async () => {
			try {
				setLoading(true)
				const fetchResults = await fetch(url)
				const fetchParse = await fetchResults.json()
				setData(fetchParse)
				setLoading(false)
			} catch (e) {
				console.error(e)
				setLoading(false)
			}
		})()

		// if needed, return cleanup here
	}, [url])

	return [data, loading]
}
