import { Loader } from '@/widgets/Loader'
import dynamic from 'next/dynamic'

export const DetailsAsync = dynamic(() => import('./index'), {
	ssr: false,
	loading: () => <Loader />,
})
