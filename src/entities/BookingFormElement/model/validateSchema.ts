import {
	validateAboutMeInfo,
	validateDateInValidation,
	validateDateOutValidation,
	validateEmailValidation,
	validateFirstNameValidation,
	validateGuestsValidation,
	validateIsPayLaterValidation,
	validatePatronymicValidation,
	validatePhoneValidation,
	validateSecondNameValidation,
	validateServicesValidation,
} from '@/shared/utils'
import * as yup from 'yup'

export const validateSchema = yup.object().shape({
	'booking-dateIn': validateDateInValidation('booking-dateOut'),
	'booking-dateOut': validateDateOutValidation('booking-dateIn'),
	'booking-guests': validateGuestsValidation,
	'booking-firstName': validateFirstNameValidation,
	'booking-secondName': validateSecondNameValidation,
	'booking-patronymic': validatePatronymicValidation,
	'booking-email': validateEmailValidation,
	'booking-phone': validatePhoneValidation,
	'booking-services': validateServicesValidation,
	'booking-isPayLater': validateIsPayLaterValidation,
	'booking-aboutMeInfo': validateAboutMeInfo,
})
