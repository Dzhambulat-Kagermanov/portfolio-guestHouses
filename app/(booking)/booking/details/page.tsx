import { DetailsPage } from '@/page/Details'
import { FC } from 'react'

import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Подтверждение',
}
const Details: FC = ({}) => {
	return <DetailsPage />
}

export default Details
