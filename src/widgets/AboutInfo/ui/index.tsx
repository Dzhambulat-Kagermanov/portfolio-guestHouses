import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	infoDescription: string[]
	infoTitle: string
	infoServices: { description: string[]; title: string }[]
}
const AboutInfo: FC<Props> = ({
	className,
	infoDescription,
	infoTitle,
	infoServices,
}) => {
	return (
		<Container
			innerClass={cn(cls.info, [className])}
			containerClass={cn(cls.container)}
		>
			<Paragraph
				className={cn(cls.infoContent)}
				paragraphs={infoDescription.map(el => `   ${el}`)}
				title={infoTitle}
				titleClass={cn(cls.infoTitle)}
				paragraphsClass={cn(cls.infoDescription)}
				rowGap={0}
			/>
			<div className={cn(cls.infoServices)}>
				{infoServices.map(({ description, title }, index) => (
					<Paragraph
						key={index}
						title={title}
						paragraphs={description.map(el => `-${el}`)}
						className={cn(cls.infoServicesItem)}
						paragraphsClass={cn(cls.infoServicesDescription)}
						titleClass={cn(cls.infoServicesTitle)}
						rowGap={0}
					/>
				))}
			</div>
		</Container>
	)
}

export { AboutInfo }
