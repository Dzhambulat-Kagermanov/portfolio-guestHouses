import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Slider as SliderUi } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	images: string[]
}
const Slider: FC<Props> = ({ images, className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<SliderUi
				spaceBetween={15}
				slidesPerView={'auto'}
				loop
				loopAdditionalSlides={1}
				className={cn(cls.slider)}
				items={images.map((el, index) => (
					<img src={el} key={index} alt='Картинка комнат' />
				))}
				wrapperClass={cn(cls.sliderWrapper)}
				slideClass={cn(cls.slide)}
			/>
		</div>
	)
}

export default Slider
