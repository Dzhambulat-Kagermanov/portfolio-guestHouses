import dynamic from 'next/dynamic'

export const ConfirmationAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
