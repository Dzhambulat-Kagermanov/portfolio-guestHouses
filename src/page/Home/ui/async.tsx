import { Loader } from '@/widgets/Loader'
import dynamic from 'next/dynamic'

export const HomeAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <Loader />,
})
