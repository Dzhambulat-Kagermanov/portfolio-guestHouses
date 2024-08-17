import dynamic from 'next/dynamic'

export const DetailsAsync = dynamic(() => import('./index'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
