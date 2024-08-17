import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { BookingFormDetails } from '@/widgets/BookingFormDetails'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const Details: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.details, [className])}>
			<BookingFormDetails className={cn(cls.formDetails)} />
		</div>
	)
}

export default Details
