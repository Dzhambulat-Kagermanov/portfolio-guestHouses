import axios from 'axios'
import { articleBreakpointUrl } from '../urls/urls'

export const getArticlesData = () => axios.get(articleBreakpointUrl)
