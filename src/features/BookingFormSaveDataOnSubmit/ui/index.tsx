import { BookingFormElement } from '@/entities/BookingFormElement'
import { getCardsBySlug } from '@/shared/api/cards/getCardsData'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
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
			className={cn(cls.form, [className])}
			dropDownServices={data.services}
			submitBtn={<FeatureButton className={cn(cls.button)} />}
		/>
	)
}

export { BookingFormSaveDataOnSubmit }
