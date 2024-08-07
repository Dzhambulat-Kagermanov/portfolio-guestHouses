import { BookingFormCompletion } from '@/features/BookingFormCompletion'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const BookingFormDetails: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.details, [className])}>
			<BookingFormCompletion className={cn(cls.content)} />
		</div>
	)
}

export { BookingFormDetails }
