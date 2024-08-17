import { getAboutGalleries } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IClassName, ITag } from '@/shared/types'
import { GalleryItem } from '@/widgets/GalleryItem'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, ITag {}
const AboutGallery: FC<Props> = async ({ className, tag = 'div' }) => {
	const Tag = tag
	const { data } = await getAboutGalleries()
	return (
		<Tag className={cn(cls.galleryGroup, [className])}>
			{data.map(({ id, images, title }) => (
				<GalleryItem
					key={id}
					photos={images}
					title={title}
					className={cn(cls.galleryItem)}
				/>
			))}
		</Tag>
	)
}

export { AboutGallery }
