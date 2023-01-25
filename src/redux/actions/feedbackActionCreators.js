
import { alertError } from '../../utils/feedback'
import {REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCEEDED } from '../types/feedbackTypes'

export const requestStarted = () =>({
    type: REQUEST_STARTED
})
 export const requestSucceeded = () => ({
         type: REQUEST_SUCCEEDED
})
export const requestFailed = (err) =>{
    console.log({err});
    let errorMessage = err.message || 'Request Failed'
    let conditonError = err && err.response && err.response.data && err.response.data.error
    if(conditonError && typeof (err.response.data.error) ==='string'){
        errorMessage =  err.response.data.error 
    }
    if( conditonError && err.response.data.error.details){
        errorMessage = err.response.data.error.details && err.response.data.error.details[0]&&err.response.data.error.details[0].message
    }
    if(errorMessage){
        alertError(errorMessage)
    }
    return {
        type:REQUEST_FAILED,
        payload : errorMessage
    }

}