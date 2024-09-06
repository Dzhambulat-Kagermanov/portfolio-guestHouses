import { FC } from 'react'
import { IClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import {
	FullscreenControl,
	Map as YMap,
	YMaps,
	ZoomControl,
} from '@pbe/react-yandex-maps'
import cls from './index.module.scss'

interface Props extends IClassName {}
const Map: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.map, [className])}>
			<Typography weight='SB' tag='h2'>
				Геолокация
			</Typography>
			<div className={cn(cls.content)}>
				<YMaps>
					<YMap
						width={250}
						height='100%'
						defaultState={{
							center: [55.755811, 37.617617],
							zoom: 9,
						}}
					>
						<FullscreenControl />
						<ZoomControl />
					</YMap>
				</YMaps>
			</div>
		</div>
	)
}

export default Map
