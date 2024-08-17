'use client'
import { IRoomsCardInfoProps } from '@/entities/RoomsCardInfoElement'
import { useBookingFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		Pick<IRoomsCardAllData, 'slug'>,
		Pick<IRoomsCardInfoProps, 'selectedService'> {}
const FeatureBtn: FC<Props> = ({ className, slug, selectedService }) => {
	const setBookingData = useBookingFormData(state => state.setValue)
	const router = useRouter()
	return (
		<Button
			className={cn(cls.button, [className])}
			onClick={() => {
				setBookingData('selectedService', selectedService)
				router.push(`/booking?slug=${slug}`)
			}}
		>
			<Typography weight='M'>Забронировать</Typography>
		</Button>
	)
}

export default FeatureBtn
