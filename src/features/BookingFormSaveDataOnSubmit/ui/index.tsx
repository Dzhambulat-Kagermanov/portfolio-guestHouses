import { BookingFormElement } from '@/entities/BookingFormElement'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import { FeatureButton } from './FeatureButton'
import cls from './index.module.scss'

interface Props extends IClassName {}
const BookingFormSaveDataOnSubmit: FC<Props> = ({ className }) => {
	return (
		<BookingFormElement
			className={cn(cls.form, [className])}
			dropDownServices={[
				'1111111111',
				'22222222222',
				'33333333333',
				'4444444444',
			]}
			submitBtn={<FeatureButton className={cn(cls.button)} />}
		/>
	)
}

export { BookingFormSaveDataOnSubmit }
