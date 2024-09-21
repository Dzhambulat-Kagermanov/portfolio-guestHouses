import { IChildren } from '@/shared/types'
import { FC } from 'react'
import { PageStepsWrapper } from './PageStepsWrapper'

const BookingLayout: FC<IChildren> = ({ children }) => {
	return (
		<>
			<PageStepsWrapper />
			{children}
		</>
	)
}

export { BookingLayout }
