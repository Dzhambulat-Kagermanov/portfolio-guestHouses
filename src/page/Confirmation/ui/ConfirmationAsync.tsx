import dynamic from 'next/dynamic'

export const ConfirmationAsync = dynamic(() => import('./Confirmation'), {
	ssr: false,
	loading: () => <p>...Loading</p>,
})
