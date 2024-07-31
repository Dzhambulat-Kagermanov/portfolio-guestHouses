import { BookingLayout } from '@/app/providers/layouts/Booking'
import { IChildren } from '@/shared/types/shared'
import { FC } from 'react'

const layout: FC<IChildren> = ({ children }) => {
	return <BookingLayout>{children}</BookingLayout>
}

export default layout
