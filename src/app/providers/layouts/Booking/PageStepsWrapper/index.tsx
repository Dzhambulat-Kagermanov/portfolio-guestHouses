'use client'
import { FC } from 'react'
import { PageSteps } from '@/shared/ui'
import { useWindow } from '@/shared/hooks'
import cls from '../index.module.scss'

interface Props {}
const PageStepsWrapper: FC<Props> = () => {
	const { isMdMedium } = useWindow()

	return (
		<PageSteps
			visibleOnlyActive={!isMdMedium}
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
	)
}

export { PageStepsWrapper }
