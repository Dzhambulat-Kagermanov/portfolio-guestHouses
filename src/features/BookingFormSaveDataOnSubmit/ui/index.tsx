import { BookingFormElement } from '@/entities/BookingFormElement'
import { getCardsBySlug } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import { FeatureButton } from './FeatureButton'
import cls from './index.module.scss'

interface Props extends IClassName, Pick<IRoomsCardAllData, 'slug'> {}
const BookingFormSaveDataOnSubmit: FC<Props> = async ({ className, slug }) => {
	const data = await getCardsBySlug(slug)
	if (!data) return notFound()

	return (
		<BookingFormElement
			// @ts-ignore
			title={data.title}
			className={cn(cls.form, [className])}
			// @ts-ignore
			dropDownServices={data.services}
			submitBtn={<FeatureButton className={cn(cls.button)} />}
		/>
	)
}

export { BookingFormSaveDataOnSubmit }
