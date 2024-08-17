import { TBookingForm } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardInfoData, TService } from '@/shared/types'
import { FC, ReactNode } from 'react'
import Content from './Content'
import Footer from './Footer'
import Head from './Head'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		Partial<Pick<IRoomsCardInfoData, 'title'>>,
		Partial<Omit<TBookingForm, 'aboutMeInfo' | 'guests' | 'services'>> {
	featureBtn: ReactNode
	service?: TService
}
const BookingDetailsElement: FC<Props> = ({
	className,
	featureBtn,
	dateIn,
	dateOut,
	email,
	firstName,
	isPayLater,
	nightsQnt,
	patronymic,
	phone,
	secondName,
	service,
	title,
}) => {
	return (
		<div className={cn(cls.details, [className])}>
			<div className={cn(cls.main)}>
				<Head
					className={cn(cls.head)}
					dateIn={dateIn}
					dateOut={dateOut}
					email={email}
					firstName={firstName}
					isPayLater={isPayLater}
					nightsQnt={nightsQnt}
					patronymic={patronymic}
					phone={phone}
					secondName={secondName}
				/>
				<Content
					className={cn(cls.content)}
					nightsQnt={nightsQnt}
					service={service}
				/>
				<Footer
					className={cn(cls.footer)}
					nightsQnt={nightsQnt}
					service={service}
					title={title}
				/>
			</div>
			{featureBtn}
		</div>
	)
}

export { BookingDetailsElement }
