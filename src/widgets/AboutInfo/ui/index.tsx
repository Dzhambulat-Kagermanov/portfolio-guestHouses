import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Paragraph } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	infoDescription: string[]
	infoTitle: string
	infoServices: { description: string[]; title: string }[]
	infoClass?: { wrapper?: string; title?: string; text?: string }
	conditionsClass?: { wrapper?: string; title?: string; text?: string }
	containerClass?: string
	servicesClass?: string
}
const AboutInfo: FC<Props> = ({
	className,
	infoDescription,
	infoTitle,
	infoServices,
	infoClass,
	conditionsClass,
	containerClass,
	servicesClass,
}) => {
	return (
		<Container
			innerClass={cn(cls.info, [className])}
			containerClass={cn(cls.container, [containerClass])}
		>
			<Paragraph
				className={cn(cls.infoContent, [infoClass?.wrapper])}
				paragraphs={infoDescription.map(el => `\t${el}`)}
				title={infoTitle}
				titleClass={cn(cls.infoTitle, [infoClass?.title])}
				paragraphsClass={cn(cls.infoDescription, [infoClass?.text])}
				rowGap={0}
			/>
			<div className={cn(cls.infoServices, [servicesClass])}>
				{infoServices.map(({ description, title }, index) => (
					<Paragraph
						key={index}
						title={title}
						paragraphs={description.map(el => `-${el}`)}
						className={cn(cls.infoServicesItem, [conditionsClass?.wrapper])}
						paragraphsClass={cn(cls.infoServicesDescription, [
							conditionsClass?.text,
						])}
						titleClass={cn(cls.infoServicesTitle, [conditionsClass?.title])}
						rowGap={0}
					/>
				))}
			</div>
		</Container>
	)
}

export { AboutInfo }
