import { Loader } from '@/widgets/Loader'
import dynamic from 'next/dynamic'

export const AboutAsync = dynamic(() => import('.'), {
	ssr: false,
	loading: () => <Loader />,
})
