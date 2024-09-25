import { BookingFormSaveDataOnSubmit } from '@/features/BookingFormSaveDataOnSubmit'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Container } from '@/shared/ui/'
import { FC } from 'react'
import { BookingFormElement } from '@/entities/BookingFormElement'
import cls from './index.module.scss'

interface Props extends IClassName {
	slug: Pick<IRoomsCardAllData, 'slug'>
	data: IRoomsCardAllData
}
const BookingForm: FC<Props> = async ({ className, slug, data }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.wrapper, [className])}
		>
			<BookingFormElement
				slug={slug}
				title={data.title}
				className={cn(cls.form, [className])}
				dropDownServices={data.services}
				submitBtn={<BookingFormSaveDataOnSubmit className={cn(cls.button)} />}
			/>
		</Container>
	)
}

export { BookingForm }
