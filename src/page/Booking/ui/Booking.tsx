import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './Booking.module.scss'

interface Props extends IClassName {}
const Booking: FC<Props> = ({ className }) => {
	return <div className={cn(cls.booking, [className])}>Booking</div>
}

export default Booking
