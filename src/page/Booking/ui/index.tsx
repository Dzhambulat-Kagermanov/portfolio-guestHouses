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
	let data: IRoomsCardAllData | undefined

	try {
		data = (await getRoomsBySlug(slug)).data
	} catch {
		data = undefined
	}

	if (!data) notFound()
	else if (!(data.availableRooms > 0)) notFound()

	return (
		<div className={cn(cls.booking, [className])}>
			<BookingLogoTitle />
			<Typography weight='SB' className={cn(cls.title)}>
				{
					// @ts-ignore
					data.title
				}
			</Typography>
			<BookingForm className={cn(cls.form)} slug={slug} data={data} />
		</div>
	)
}

export default Booking
