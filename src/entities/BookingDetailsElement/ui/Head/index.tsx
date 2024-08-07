import { TBookingForm } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
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
				className={cn(cls.paragraphsWrapper)}
				paragraphsClass={cn(cls.paragraph)}
				paragraphs={[
					<>
						<span>Ваше полное имя: </span>{' '}
						{firstName && secondName
							? `${firstName} ${secondName}${patronymic && ` ${patronymic}`}`
							: 'Данные отсутствуют'}
					</>,
					<>
						<span>Дата въезда: </span> {dateIn || 'Данные отсутствуют'}
					</>,
					<>
						<span>Дата выезда: </span> {dateOut || 'Данные отсутствуют'}
					</>,
					<>
						<span>Email: </span> {email || 'Данные отсутствуют'}
					</>,
					<>
						<span>Мобильный телефон: </span> {phone || 'Данные отсутствуют'}
					</>,
					<>
						<span>Способ оплаты: </span>{' '}
						{isPayLater !== undefined
							? isPayLater
								? 'Оплатить позже'
								: 'Оплатить сейчас'
							: 'Данные отсутствуют'}
					</>,
				]}
			/>
		</div>
	)
}

export default Head
