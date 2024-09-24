import { BookingFormSaveDataOnSubmit } from '@/features/BookingFormSaveDataOnSubmit'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Container } from '@/shared/ui/'
import { FC } from 'react'
import { BookingFormElement } from '@/entities/BookingFormElement'
import { getRoomsBySlug } from '@/shared/api'
import { notFound } from 'next/navigation'
import cls from './index.module.scss'

interface Props extends IClassName {
	slug: Pick<IRoomsCardAllData, 'slug'>
}
const BookingForm: FC<Props> = async ({ className, slug }) => {
	const data = await getRoomsBySlug(slug)
	if (!data) return notFound()

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.wrapper, [className])}
		>
			<BookingFormElement
				slug={slug}
				title={data.data.title}
				className={cn(cls.form, [className])}
				dropDownServices={data.data.services}
				submitBtn={<BookingFormSaveDataOnSubmit className={cn(cls.button)} />}
			/>
		</Container>
	)
}

export { BookingForm }
