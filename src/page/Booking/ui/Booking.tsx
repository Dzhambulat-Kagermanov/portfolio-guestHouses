import { getCardsBySlug } from '@/shared/api/cards/getCardsData'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
import { BookingForm } from '@/widgets/BookingForm'
import { BookingLogoTitle } from '@/widgets/BookingLogoTitle'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import cls from './Booking.module.scss'

interface Props extends IClassName, Pick<IRoomsCardAllData, 'slug'> {}
const Booking: FC<Props> = async ({ className, slug }) => {
	const data = await getCardsBySlug(slug)
	if (!data) return notFound()

	return (
		<div className={cn(cls.booking, [className])}>
			<BookingLogoTitle />
			<Typography weight='SB' className={cn(cls.title)}>
				{data.title}
			</Typography>
			<BookingForm className={cn(cls.form)} slug={slug} />
		</div>
	)
}

export default Booking
