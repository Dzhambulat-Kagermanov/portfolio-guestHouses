import { BookingFormCompletion } from '@/features/BookingFormCompletion'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const BookingFormDetails: FC<Props> = ({ className }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.details, [className])}
		>
			<BookingFormCompletion className={cn(cls.content)} />
		</Container>
	)
}

export { BookingFormDetails }
