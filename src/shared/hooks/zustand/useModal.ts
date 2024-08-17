import { create } from 'zustand'

export type TModalState = (modalName: string) => void
type TSetModalStateParams = { modalName: string; newState: boolean }
export type TSetModalState = (params: TSetModalStateParams) => void

type TUseModalState = {
	modals: Record<string, boolean>
	registerModalState: TModalState
	setModalState: TSetModalState
	toggleModalState: TModalState
}

export const useModal = create<TUseModalState>((set, get) => ({
	modals: {},
	registerModalState: modalName => {
		if (!Object.keys(get().modals).find(el => el === modalName)) {
			get().modals[modalName] = false
		}
	},
	setModalState: ({ modalName, newState }) => {
		get().modals[modalName] = newState
	},
	toggleModalState: modalName => {
		return set(state => ({ modals: { [modalName]: !state.modals[modalName] } }))
	},
}))
