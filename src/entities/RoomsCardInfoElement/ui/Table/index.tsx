import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { FC, ReactNode } from 'react'
import { TTableItem } from '..'
import cls from './index.module.scss'

export type TTableItemsGroup = [TTableItem, TTableItem]

interface Props extends IClassName {
	caption: ReactNode
	groups: TTableItemsGroup
}
const Table: FC<Props> = ({ className, groups, caption }) => {
	function distributingElementsAcrossRows(groups: TTableItemsGroup) {
		const res: ReactNode[][] = []

		for (let i = 0; i < groups.length; i++) {
			const group = groups[i]
			for (let j = 0; j < group.items.length; j++) {
				const item = group.items[j]
				if (!Array.isArray(res[j])) res.push([])
				res[j].push(item)
			}
		}
		return res
	}
	const rowsItems = distributingElementsAcrossRows(groups)

	return (
		<table className={cn(cls.table, [className])}>
			<caption>{caption}</caption>
			<thead className={cn(cls.head)}>
				<tr className={cn(cls.row)}>
					{groups.map(({ title }, index) => {
						return (
							<td className={cn(cls.cell)} key={index}>
								{title}
							</td>
						)
					})}
				</tr>
			</thead>
			<tbody className={cn(cls.body)}>
				{rowsItems.map((group, i) => {
					return (
						<tr key={i} className={cn(cls.row)}>
							{group.map((item, j) => {
								return (
									<td key={j} className={cn(cls.cell)}>
										{item}
									</td>
								)
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default Table
