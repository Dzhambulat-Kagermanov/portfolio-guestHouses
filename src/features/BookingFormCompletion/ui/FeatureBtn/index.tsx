import { TBookingForm } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Typography } from '@/shared/ui/Typography/Typography'
import {
	validateAboutMeInfo,
	validateDateInValidation,
	validateDateOutValidation,
	validateEmailValidation,
	validateFirstNameValidation,
	validateGuestsValidation,
	validateIsPayLaterValidation,
	validatePatronymicValidation,
	validatePhoneValidation,
	validateSecondNameValidation,
	validateServicesValidation,
} from '@/shared/utils/validateMethods'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		Omit<TBookingForm, 'nightsQnt' | 'currentService' | 'title'> {}
const FeatureBtn: FC<Props> = ({
	className,
	aboutMeInfo,
	dateIn,
	dateOut,
	email,
	firstName,
	guests,
	isPayLater,
	patronymic,
	phone,
	secondName,
	selectedService,
}) => {
	return (
		<Button
			className={cn(cls.button, [className])}
			onClick={async () => {
				;(await validateDateInValidation
					.validate(dateIn)
					.then(res => true)
					.catch(err => false)) &&
				(await validateDateOutValidation
					.validate(dateOut)
					.then(res => true)
					.catch(err => false)) &&
				(await validateEmailValidation
					.validate(email)
					.then(res => true)
					.catch(err => false)) &&
				(await validatePhoneValidation
					.validate(phone)
					.then(res => true)
					.catch(err => false)) &&
				(await validateFirstNameValidation
					.validate(firstName)
					.then(res => true)
					.catch(err => false)) &&
				(await validateSecondNameValidation
					.validate(secondName)
					.then(res => true)
					.catch(err => false)) &&
				(await validatePatronymicValidation
					.validate(patronymic)
					.then(res => true)
					.catch(err => false)) &&
				(await validateGuestsValidation
					.validate(guests)
					.then(res => true)
					.catch(err => false)) &&
				(await validateServicesValidation
					.validate(selectedService)
					.then(res => true)
					.catch(err => false)) &&
				(await validateIsPayLaterValidation
					.validate(isPayLater)
					.then(res => true)
					.catch(err => false)) &&
				(await validateAboutMeInfo
					.validate(aboutMeInfo)
					.then(res => true)
					.catch(err => false))
					? alert('response')
					: alert('rejected')
			}}
		>
			<Typography weight='M'>Завершить</Typography>
		</Button>
	)
}

export default FeatureBtn
