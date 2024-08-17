import { TBookingForm } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Paragraph } from '@/shared/ui'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		Partial<Omit<TBookingForm, 'aboutMeInfo' | 'guests' | 'services'>> {}
const Head: FC<Props> = ({
	firstName,
	secondName,
	patronymic,
	dateIn,
	dateOut,
	email,
	phone,
	isPayLater,
	className,
}) => {
	return (
		<div className={cn(cls.head, [className])}>
			<Paragraph
				rowGap={10}
				className={cn(cls.paragraphsWrapper)}
				paragraphsClass={cn(cls.paragraph)}
				paragraphs={[
					<>
						<span>Ваше полное имя: </span>{' '}
						{firstName && secondName
							? `${firstName} ${secondName}${patronymic && ` ${patronymic}`}`
							: notFound()}
					</>,
					<>
						<span>Дата въезда: </span> {dateIn || notFound()}
					</>,
					<>
						<span>Дата выезда: </span> {dateOut || notFound()}
					</>,
					<>
						<span>Email: </span> {email || notFound()}
					</>,
					<>
						<span>Мобильный телефон: </span> {phone || notFound()}
					</>,
					<>
						<span>Способ оплаты: </span>{' '}
						{isPayLater !== undefined
							? isPayLater
								? 'Оплатить позже'
								: 'Оплатить сейчас'
							: notFound()}
					</>,
				]}
			/>
		</div>
	)
}

export default Head
