import { IChildren } from '@/shared/types'
import { PageSteps } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

const BookingLayout: FC<IChildren> = ({ children }) => {
	return (
		<>
			<PageSteps
				visibleOnlyActive
				className={cls.pageSteps}
				steps={[
					{ label: 'Номер и Цена', activePaths: ['/rooms', '/rooms/?'] },
					{
						label: 'Бронь и Оплата',
						activePaths: '/booking',
					},
					{ label: 'Подтверждение', activePaths: '/booking/details' },
				]}
			/>
			{children}
		</>
	)
}

export { BookingLayout }
