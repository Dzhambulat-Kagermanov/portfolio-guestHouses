'use client'
import { BookingDetailsElement } from '@/entities/BookingDetailsElement'
import { useBookingFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import FeatureBtn from './FeatureBtn'
import cls from './index.module.scss'

interface Props extends IClassName {}
const BookingFormCompletion: FC<Props> = ({ className }) => {
	const dateIn = useBookingFormData(state => state.dateIn)
	const dateOut = useBookingFormData(state => state.dateOut)
	const email = useBookingFormData(state => state.email)
	const phone = useBookingFormData(state => state.phone)
	const firstName = useBookingFormData(state => state.firstName)
	const secondName = useBookingFormData(state => state.secondName)
	const patronymic = useBookingFormData(state => state.patronymic)
	const guests = useBookingFormData(state => state.guests)
	const services = useBookingFormData(state => state.services)
	const isPayLater = useBookingFormData(state => state.isPayLater)
	const aboutMeInfo = useBookingFormData(state => state.aboutMeInfo)
	const nightsQnt = useBookingFormData(state => state.getNightsQnt)()
	const title = useBookingFormData(state => state.title)
	const currentService = useBookingFormData(state => state.currentService)

	return (
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
				<FeatureBtn
					className={cn(cls.btn)}
					dateIn={dateIn}
					dateOut={dateOut}
					email={email}
					firstName={firstName}
					isPayLater={isPayLater}
					patronymic={patronymic}
					phone={phone}
					secondName={secondName}
					services={services}
					aboutMeInfo={aboutMeInfo}
					guests={guests}
				/>
			}
		/>
	)
}

export { BookingFormCompletion }
