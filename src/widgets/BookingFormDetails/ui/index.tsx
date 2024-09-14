'use client'
import { BookingFormCompletion } from '@/features/BookingFormCompletion'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container } from '@/shared/ui'
import { FC } from 'react'
import { BookingDetailsElement } from '@/entities/BookingDetailsElement'
import { useBookingFormData } from '@/shared/hooks'
import cls from './index.module.scss'

interface Props extends IClassName {}
const BookingFormDetails: FC<Props> = ({ className }) => {
	const dateIn = useBookingFormData(state => state.dateIn)
	const dateOut = useBookingFormData(state => state.dateOut)
	const email = useBookingFormData(state => state.email)
	const phone = useBookingFormData(state => state.phone)
	const firstName = useBookingFormData(state => state.firstName)
	const secondName = useBookingFormData(state => state.secondName)
	const patronymic = useBookingFormData(state => state.patronymic)
	const guests = useBookingFormData(state => state.guests)
	const selectedService = useBookingFormData(state => state.selectedService)
	const isPayLater = useBookingFormData(state => state.isPayLater)
	const aboutMeInfo = useBookingFormData(state => state.aboutMeInfo)
	const nightsQnt = useBookingFormData(state => state.getNightsQnt)()
	const title = useBookingFormData(state => state.title)
	const currentService = useBookingFormData(state => state.currentService)

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.details, [className])}
		>
			<BookingDetailsElement
				className={cn(cls.details, [className])}
				dateIn={dateIn}
				dateOut={dateOut}
				email={email}
				firstName={firstName}
				isPayLater={isPayLater}
				nightsQnt={nightsQnt}
				patronymic={patronymic}
				phone={phone}
				secondName={secondName}
				service={currentService}
				title={title}
				featureBtn={
					<BookingFormCompletion
						className={cn(cls.btn)}
						email={email}
						firstName={firstName}
						isPayLater={isPayLater}
						patronymic={patronymic}
						phone={phone}
						secondName={secondName}
						selectedService={selectedService}
						aboutMeInfo={aboutMeInfo}
						guests={guests}
					/>
				}
			/>
		</Container>
	)
}

export { BookingFormDetails }
