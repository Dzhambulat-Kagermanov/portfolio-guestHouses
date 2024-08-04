export const name: RegExp = /^[а-яА-Яa-zA-Z]{2,20}$/
export const mail: RegExp =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const date: RegExp = /^\d{4}-\d{2}-\d{2}$/
export const phone: RegExp = /\d{11}/
