import { Loader } from '@/widgets/Loader'
import dynamic from 'next/dynamic'

export const BookingAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <Loader />,
})
