import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './HomeInfo.module.scss'

interface Props extends IClassName {}
const HomeInfo: FC<Props> = ({ className }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.info, [className])}
		>
			<Typography weight='SB' className={cn(cls.title)}>
				ГОСТЕВОЙ ДОМ
				<br />
				«Valentina Guest House» , Абхазия{' '}
			</Typography>
			<img
				className={cn(cls.image)}
				src='/images/Home/Info/director.png'
				alt='Директор'
			/>
			<Paragraph
				className={cls.paragraphs}
				paragraphsClass={cn(cls.paragraphItems)}
				paragraphs={[
					'Дорогие гости, Безопасность и комфорт гостей и персонала – это приоритет нашей работы.',
					'Мы круглосуточно следим за тем, что Министерство здравоохранения Российской Федерации, Федеральная служба по надзору в сфере защиты прав потребителей и Всемирная организация здравоохранения сообщают о распространении нового типа коронавируса (COVID-19) и беспрекословно выполняем рекомендации этих организаций и местных органов здравоохранения.',
					'Мы искренне сочувствуем всем, кого коснулось это бедствие и с огромным уважением относимся к врачам, местным сообществам и правительствам, которые задействованы в прямой борьбе с распространением коронавируса.',
				]}
			/>
		</Container>
	)
}

export default HomeInfo
