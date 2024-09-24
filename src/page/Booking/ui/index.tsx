import { getRoomsBySlug } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Typography } from '@/shared/ui'
import { BookingForm } from '@/widgets/BookingForm'
import { BookingLogoTitle } from '@/widgets/BookingLogoTitle'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'
// import adaptive from './adaptive.module.scss'

interface Props extends IClassName {
	slug: Pick<IRoomsCardAllData, 'slug'>
}
const Booking: FC<Props> = async ({ className, slug }) => {
	const data = await getRoomsBySlug(slug)
	if (!data) return notFound()

	return (
		<div className={cn(cls.booking, [className])}>
			<BookingLogoTitle />
			<Typography weight='SB' className={cn(cls.title)}>
				{
					// @ts-ignore
					data.title
				}
			</Typography>
			<BookingForm className={cn(cls.form)} slug={slug} />
		</div>
	)
}

export default Booking
