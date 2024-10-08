import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { AboutGallery } from '@/widgets/AboutGallery'
import { AboutInfo } from '@/widgets/AboutInfo'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from './adaptive.module.scss'

interface Props extends IClassName {}
const About: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.about, [className])}>
			<AboutInfo
				infoTitle='О нас'
				infoDescription={[
					'Номера в нашем Гостевом доме, расположенном на берегу черного моря, соответствуют современным стандартам гостиничного бизнеса: оснащены комфортными кроватями, с хорошими матрацами, удобными санузлами с душем, кондиционерами, LCD телевизорами.Кухонная зона со всем необходимым оборудованием - набор посуды, холодильник, микроволновая печь, чайник, индукционная панель. Освежить свою одежду можно воспользовавшись автоматической стиральной машиной, расположенной здесь же.',
					'У нас Вы можете выбрать размещение в номерах по Вашему желанию и потребностям: одноместное; двухместное; семейное трехместное; семейное четырехместное; в некоторых номерах могут быть предоставлены дополнительные места.',
					'По просьбе гостей предоставляются туалетные и гладильные принадлежности, фен, утюг, гладильная доска. И конечно бесплатный Wi-Fi на всей территории мини-отеля.',
				]}
				className={cn(cls.info, [adt.about])}
				infoServices={[
					{
						title: 'Удобства',
						description: [
							'Заезд 24 часа',
							'Система бронирования через оператора или через наш сайт',
							'Бесплатный паркинг для путешествующих на авто',
							'Бесплатный WI-FI на территории',
						],
					},
					{
						title: 'Преимущества',
						description: [
							'Безопасность и конфиденциальность',
							'Качественный сервис и высокий уровень комфорта',
							'Расположение в тихом районе Абхазии, 100 шагах от моря',
							'Индивидуальный подход к каждому гостю',
						],
					},
					{
						title: 'Сервис',
						description: [
							'Помощь в бронировании авиа и ж/д билетов',
							'Услуги корпоративным клиентам',
							'Визовые услуги',
							'Вызов такси',
						],
					},
				]}
				servicesClass={adt.services}
				conditionsClass={{
					wrapper: adt.paragraphs,
					text: adt.item,
					title: adt.title,
				}}
				infoClass={{
					wrapper: adt.paragraphs,
					text: adt.item,
					title: adt.title,
				}}
			/>
			<AboutGallery
				className={cn(cls.gallery, [adt.gallery])}
				galleryItemClasses={{
					slide: adt.slide,
					slider: adt.slider,
					sliderWrapper: adt.wrapper,
					title: adt.title,
					wrapper: adt.galleryItem,
				}}
			/>
		</div>
	)
}

export default About
