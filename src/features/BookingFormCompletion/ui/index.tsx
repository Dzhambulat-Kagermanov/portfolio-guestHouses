'use client'
import { TBookingForm, useBookingFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
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
} from '@/shared/utils'
import { notFound, useRouter } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'
import { getRoomsBySlug, patchAvailableRoomsBySlug } from '@/shared/api/rooms'

interface Props
	extends IClassName,
		Omit<
			TBookingForm,
			'nightsQnt' | 'currentService' | 'title' | 'dateOut' | 'dateIn'
		> {}
const BookingFormCompletion: FC<Props> = ({
	className,
	aboutMeInfo,
	email,
	firstName,
	guests,
	isPayLater,
	patronymic,
	phone,
	slug,
	secondName,
	selectedService,
}) => {
	if (!slug) notFound()
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
					alert('Данные выведены в консоль')
					console.log({
						email,
						firstName,
						secondName,
						aboutMeInfo,
						guests,
						isPayLater,
						phone,
						selectedService,
						patronymic,
						slug,
					})
					const patchData = async () => {
						const room = await getRoomsBySlug(slug)

						// @ts-ignore
						patchAvailableRoomsBySlug(slug, room.data.availableRooms - 1)
					}
					patchData()
						.then(() => {
							reset()
							return undefined
						})
						.then(() => {
							router.replace('/rooms')
						})
				} catch (err) {
					alert(`Ошибка на стадии отправки. ${err}`)
				}
			}}
		>
			<Typography weight='M'>Завершить</Typography>
		</Button>
	)
}

export { BookingFormCompletion }
