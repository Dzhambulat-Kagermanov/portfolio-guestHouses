import { Loader } from '@/widgets/Loader'
import dynamic from 'next/dynamic'

export const ArticlesAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <Loader />,
})
