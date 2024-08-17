import { BookingLayout } from '@/app/providers/layouts'
import { IChildren } from '@/shared/types'
import { FC } from 'react'

const layout: FC<IChildren> = ({ children }) => {
	return <BookingLayout>{children}</BookingLayout>
}

export default layout
