import { TBookingForm } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { TService } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, Partial<Pick<TBookingForm, 'nightsQnt'>> {
	service?: TService
}
const Content: FC<Props> = ({ className, service, nightsQnt }) => {
	return (
		<div className={cn(cls.content, [className])}>
			<Paragraph
				paragraphs={[
					<>
						<span>Выбранный сервис: </span>
						{service?.title ? `${service.title}` : notFound()}
					</>,
					<>
						<span>Итого цена за номер (без налогов): </span>
						{service?.price?.withoutTaxes
							? `${service.price.withoutTaxes} руб`
							: notFound()}
					</>,
					<>
						<span>Итого цена за номер (с налогами): </span>
						{service?.price?.withTaxes
							? `${service.price.withTaxes} руб`
							: notFound()}
					</>,
					<>
						<span>Итого к оплате: </span>
						{nightsQnt && service?.price?.withTaxes
							? `${service.price.withTaxes * nightsQnt} руб`
							: notFound()}
					</>,
				]}
			/>
		</div>
	)
}

export default Content
