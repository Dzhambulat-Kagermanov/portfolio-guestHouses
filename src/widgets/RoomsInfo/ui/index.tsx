import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Paragraph, Typography } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from '@/page/Rooms/ui/adaptive.module.scss'

interface Props extends IClassName {}
const RoomsInfo: FC<Props> = ({ className }) => {
	return (
		<section className={cn(adt.roomsInfo)}>
			<Container
				containerClass={cn(cls.containerServices, [adt.infoContainer])}
				innerClass={cn(cls.services, [className, adt.info])}
			>
				<Typography weight='SB' className={cn(cls.title, [adt.title])} tag='h2'>
					Услуги и оснащение
				</Typography>
				<ul className={cn(cls.group, [adt.group])}>
					<li className={cn(cls.item, [adt.item])}>
						<Typography
							tag='h3'
							weight='M'
							className={cn(cls.title, [adt.title])}
						>
							Общие:
						</Typography>
						<Typography
							weight='R'
							className={cn(cls.description, [adt.description])}
						>
							Кондиционер, Отопление, Семейные номера, Номера для некурящих.
						</Typography>
					</li>
					<li className={cn(cls.item, [adt.item])}>
						<Typography
							tag='h3'
							weight='M'
							className={cn(cls.title, [adt.title])}
						>
							Активный отдых:
						</Typography>
						<Typography
							weight='R'
							className={cn(cls.description, [adt.description])}
						>
							Детская игровая площадка
						</Typography>
					</li>
					<li className={cn(cls.item, [adt.item])}>
						<Typography
							tag='h3'
							weight='M'
							className={cn(cls.title, [adt.title])}
						>
							Услуги:
						</Typography>
						<Typography
							weight='R'
							className={cn(cls.description, [adt.description])}
						>
							Общий лаундж/гостиная с телевизором, Услуги по глажению одежды
							(оплачивается отдельно), Прачечная (оплачивается отдельно).
						</Typography>
					</li>
					<li className={cn(cls.item, [adt.item])}>
						<Typography
							tag='h3'
							weight='M'
							className={cn(cls.title, [adt.title])}
						>
							Интернет:
						</Typography>
						<Typography
							weight='R'
							className={cn(cls.description, [adt.description])}
						>
							Wi-Fi предоставляется в номерах отеля бесплатно.
						</Typography>
					</li>
					<li className={cn(cls.item, [adt.item])}>
						<Typography
							tag='h3'
							weight='M'
							className={cn(cls.title, [adt.title])}
						>
							Парковка:
						</Typography>
						<Typography
							weight='R'
							className={cn(cls.description, [adt.description])}
						>
							Бесплатная частная парковка на месте .
						</Typography>
					</li>
				</ul>
			</Container>
			<Container
				containerClass={cn(cls.containerRules, [adt.rulesContainer])}
				innerClass={cn(cls.rules, [adt.rules])}
			>
				<Paragraph
					className={cn(adt.paragraphs)}
					title='Правила'
					titleClass={cn(cls.title, [adt.title])}
					paragraphsClass={cn(cls.rulesText, [adt.paragraph])}
					rowGap={2}
					paragraphs={[
						<>
							<Typography tag='strong' weight='SB'>
								Заезд:{' '}
							</Typography>
							С 16:00
						</>,
						<>
							<Typography tag='strong' weight='SB'>
								Выезд:{' '}
							</Typography>
							До 12:00
						</>,
						<>
							<Typography tag='strong' weight='SB'>
								Отмена / Предоплата:{' '}
							</Typography>
							Оплата бронирования гостевого дома производится после
							подтверждения бронирования. Вы можете сделать предоплату в размере
							30% от суммы бронирования или полностью. При оплате 30% проживания
							доплату за оставшиеся сутки можно произвести по прибытии в наш
							гостевой дом. В случае отмены бронирования, предоплата не
							возвращается. В низкий сезон, а также при наличии Договора на
							корпоративное обслуживание бронирование гостевого дома возможно
							без предоплаты. Все возможные вытекающие обязательства и права
							Сторон возникают исключительно между отправителем и получателем
							платежа — клиентом и гостевым домом.
						</>,
						<>
							<Typography tag='strong' weight='SB'>
								Дети и дополнительные спальные места:{' '}
							</Typography>
							Разрешается проживание детей любого возраста. При размещении всех
							детей младше 2 лет на детских кроватках проживание им
							предоставляется бесплатно . При размещении всех детей младше 6 лет
							на дополнительных кроватях взимается RUB 1000 за ночь. При
							дополнительном размещении всех детей старшего возраста или
							взрослых на дополнительных кроватях взимается RUB 1000 за ночь.
							Максимальное количество дополнительных кроватей в номере - 1.
							Дополнительные кровати и детские кроватки предоставляются по
							запросу. Требуется подтверждение со стороны отеля о предоставлении
							данной услуги. Дополнительные услуги не включаются автоматически в
							общую стоимость и оплачиваются отдельно во время вашего
							проживания.
						</>,
						<>
							<Typography tag='strong' weight='SB'>
								Животные:{' '}
							</Typography>
							Размещение домашних животных допускается по предварительному
							запросу. Данная услуга может быть платной.
						</>,
						<>
							<Typography tag='strong' weight='SB'>
								Принимаемые кредитные карты:{' '}
							</Typography>
							Этот объект размещения принимает только наличные.
						</>,
					]}
				/>
			</Container>
		</section>
	)
}

export { RoomsInfo }
