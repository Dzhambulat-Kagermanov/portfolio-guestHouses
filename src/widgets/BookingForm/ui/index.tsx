import { BookingFormSaveDataOnSubmit } from '@/features/BookingFormSaveDataOnSubmit'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Container } from '@/shared/ui/'
import { FC } from 'react'
import { BookingFormElement } from '@/entities/BookingFormElement'
import cls from './index.module.scss'
import { getCardsBySlug } from '@/shared/api'
import { notFound } from 'next/navigation'

interface Props extends IClassName, Pick<IRoomsCardAllData, 'slug'> {}
const BookingForm: FC<Props> = async ({ className, slug }) => {
	const data = await getCardsBySlug(slug)
	if (!data) return notFound()

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.wrapper, [className])}
		>
			<BookingFormElement
				// @ts-ignore
				title={data.title}
				className={cn(cls.form, [className])}
				// @ts-ignore
				dropDownServices={data.services}
				submitBtn={<BookingFormSaveDataOnSubmit className={cn(cls.button)} />}
			/>
		</Container>
	)
}

export { BookingForm }
