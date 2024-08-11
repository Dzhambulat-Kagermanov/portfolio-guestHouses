import { IChildren } from '@/shared/types/shared'
import { PageSteps } from '@/shared/ui/PageSteps/PageSteps'
import { FC } from 'react'
import cls from './BookingLayout.module.scss'

const BookingLayout: FC<IChildren> = ({ children }) => {
	return (
		<>
			<PageSteps
				visibleOnlyActive
				className={cls.pageSteps}
				steps={[
					{ label: 'Номер и Цена', activePath: ['/rooms', '/rooms/?'] },
					{
						label: 'Бронь и Оплата',
						activePath: '/booking',
					},
					{ label: 'Подтверждение', activePath: '/booking/details' },
				]}
			/>
			{children}
		</>
	)
}

export { BookingLayout }
