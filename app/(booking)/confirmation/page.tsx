import { ConfirmationPage } from '@/page/Confirmation'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Guest House | Подтверждение',
}
const Confirmation: FC = () => {
	return <ConfirmationPage />
}

export default Confirmation
