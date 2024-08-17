'use client'
import { TBookingForm, useBookingFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Typography } from '@/shared/ui/Typography/Typography'
import {
	validateAboutMeInfo,
	validateEmailValidation,
	validateFirstNameValidation,
	validateGuestsValidation,
	validateIsPayLaterValidation,
	validatePatronymicValidation,
	validatePhoneValidation,
	validateSecondNameValidation,
	validateServicesValidation,
} from '@/shared/utils/validateMethods'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		Omit<
			TBookingForm,
			'nightsQnt' | 'currentService' | 'title' | 'dateOut' | 'dateIn'
		> {}
const FeatureBtn: FC<Props> = ({
	className,
	aboutMeInfo,
	email,
	firstName,
	guests,
	isPayLater,
	patronymic,
	phone,
	secondName,
	selectedService,
}) => {
	const router = useRouter()
	const reset = useBookingFormData(state => state.resetValues)
	return (
		<Button
			className={cn(cls.button, [className])}
			onClick={() => {
				try {
					validateFirstNameValidation.validateSync(firstName)
					validateSecondNameValidation.validateSync(secondName)
					validateAboutMeInfo.validateSync(aboutMeInfo)
					validateEmailValidation.validateSync(email)
					validateGuestsValidation.validateSync(guests)
					validateIsPayLaterValidation.validateSync(isPayLater)
					validatePhoneValidation.validateSync(phone)
					validateServicesValidation.validateSync(selectedService)
					validatePatronymicValidation.validateSync(patronymic)
					reset()
					setTimeout(() => {
						router.replace('/rooms')
					}, 10)
				} catch (err) {
					alert(`Ошибка на стадии отправки. ${err}`)
				}
			}}
		>
			<Typography weight='M'>Завершить</Typography>
		</Button>
	)
}

export default FeatureBtn
