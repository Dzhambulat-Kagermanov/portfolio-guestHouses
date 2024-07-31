import { IChildren } from '@/shared/types/shared'
import { PageSteps } from '@/shared/ui/PageSteps/PageSteps'
import { FC } from 'react'

const BookingLayout: FC<IChildren> = ({ children }) => {
	return (
		<>
			<PageSteps
				steps={[
					{ label: '11111111', state: false },
					{ label: '22222222', state: true },
					{ label: '33333333', state: false },
				]}
			/>
			{children}
		</>
	)
}

export { BookingLayout }
