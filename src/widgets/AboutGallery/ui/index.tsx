import { getAboutGalleries } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IAboutGalleriesData, IClassName, ITag } from '@/shared/types'
import { GalleryItem } from '@/widgets/GalleryItem'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, ITag {
	galleryItemClasses?: {
		slider?: string
		slide?: string
		sliderWrapper?: string
		title?: string
		wrapper?: string
	}
}
const AboutGallery: FC<Props> = async ({
	className,
	tag = 'div',
	galleryItemClasses,
}) => {
	const Tag = tag
	let data: IAboutGalleriesData[] | []

	try {
		data = (await getAboutGalleries()).data
	} catch {
		data = []
	}

	return (
		<Tag className={cn(cls.galleryGroup, [className])}>
			{data.length &&
				data.map(({ id, images, title }) => (
					<GalleryItem
						sliderClasses={{
							slide: galleryItemClasses?.slide,
							slider: galleryItemClasses?.slider,
							wrapper: galleryItemClasses?.sliderWrapper,
						}}
						titleClass={galleryItemClasses?.title}
						key={id}
						photos={images}
						title={title}
						className={cn(cls.galleryItem, [galleryItemClasses?.wrapper])}
					/>
				))}
		</Tag>
	)
}

export { AboutGallery }
