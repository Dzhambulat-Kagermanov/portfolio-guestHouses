import { cn } from '@/shared/lib'
import { IClassName, ITag } from '@/shared/types/shared'
import { GalleryItem } from '@/widgets/GalleryItem'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, ITag {}
const AboutGallery: FC<Props> = ({ className, tag = 'div' }) => {
	const Tag = tag
	return (
		<Tag className={cn(cls.galleryGroup, [className])}>
			<GalleryItem
				photos={[
					'/images/Home/Rooms/item-1.png',
					'/images/Home/Rooms/item-1.png',
					'/images/Home/Rooms/item-1.png',
					'/images/Home/Rooms/item-1.png',
				]}
				title='Детская площадка'
				className={cn(cls.galleryItem)}
			/>
			<GalleryItem
				photos={[
					'/images/Home/Rooms/item-1.png',
					'/images/Home/Rooms/item-1.png',
					'/images/Home/Rooms/item-1.png',
					'/images/Home/Rooms/item-1.png',
				]}
				title='Бассейн'
				className={cn(cls.galleryItem)}
			/>
			<GalleryItem
				photos={[
					'/images/Home/Rooms/item-1.png',
					'/images/Home/Rooms/item-1.png',
					'/images/Home/Rooms/item-1.png',
					'/images/Home/Rooms/item-1.png',
				]}
				title='Кафе'
				className={cn(cls.galleryItem)}
			/>
		</Tag>
	)
}

export { AboutGallery }
