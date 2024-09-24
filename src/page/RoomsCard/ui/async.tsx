import { Loader } from '@/widgets/Loader'
import dynamic from 'next/dynamic'

export const RoomsCardAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <Loader />,
})
