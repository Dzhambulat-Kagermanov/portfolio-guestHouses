import { BookingFormSaveDataOnSubmit } from '@/features/BookingFormSaveDataOnSubmit'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, Pick<IRoomsCardAllData, 'slug'> {}
const BookingForm: FC<Props> = ({ className, slug }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.wrapper, [className])}
		>
			<BookingFormSaveDataOnSubmit
				className={cn(cls.form, [className])}
				slug={slug}
			/>
		</Container>
	)
}

export { BookingForm }
