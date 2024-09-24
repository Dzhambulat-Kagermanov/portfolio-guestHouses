import { Loader } from '@/widgets/Loader'
import dynamic from 'next/dynamic'
export const RoomsAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <Loader />,
})
