import moment from 'moment'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IHomeFormInputs {
	dateIn: string
	dateOut: string
	guests: number
}
interface Props {
	formContext: any
	setValue: (change: keyof IHomeFormInputs | 'formContext', value: any) => void
	getNightsQnt: () => number
}

export const useHomeFormData = create<Props & IHomeFormInputs>()(
	persist(
		(set, get) => ({
			dateIn: moment().format('YYYY-MM-DD'),
			dateOut: moment().add(3, 'd').format('YYYY-MM-DD'),
			guests: 1,
			formContext: undefined,
			setValue: (change, value) =>
				set(state => {
					return { [change]: value }
				}),
			getNightsQnt: () => {
				const dateIn = get().dateIn
				const dateOut = get().dateOut
				if (dateIn && dateOut) {
					const secondsDateIn = moment(dateIn, 'YYYY-MM-DD')
					const secondsDateOut = moment(dateOut, 'YYYY-MM-DD')

					return (secondsDateOut.unix() - secondsDateIn.unix()) / 60 / 60 / 24
				}
				return NaN
			},
		}),
		{
			name: 'homeFormData',
			partialize: state =>
				Object.fromEntries(
					Object.entries(state).filter(
						([key]) => !['formContext'].includes(key)
					)
				),
		}
	)
)
