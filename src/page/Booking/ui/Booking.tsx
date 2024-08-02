import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
import { BookingForm } from '@/widgets/BookingForm'
import { BookingLogoTitle } from '@/widgets/BookingLogoTitle'
import { FC } from 'react'
import cls from './Booking.module.scss'

interface Props extends IClassName {}
const Booking: FC<Props> = ({ className }) => {
	const TITLE = '2-х местный'
	const NIGHT_PRICE = 2996

	return (
		<div className={cn(cls.booking, [className])}>
			<BookingLogoTitle />
			<Typography weight='SB' className={cn(cls.title)}>
				{TITLE}
				<br />
				<span>{NIGHT_PRICE},00 руб</span>
			</Typography>
			<BookingForm />
			Booking
		</div>
	)
}

export default Booking
