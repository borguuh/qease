import { backendLocation } from './__env'

const generateLSSB = (limit = 10, skip = 0, sortBy = "createdAt:desc") => `?limit=${limit}&skip=${skip}&sortBy=${sortBy}`

// Auth Routes
export const registerURL = () => `${backendLocation}/register`
export const registerAdminURL = () => `${backendLocation}/registerAdmin`
export const loginURL = () => `${backendLocation}/login`
export const refreshTokenURL = () => `${backendLocation}/refresh`
export const logoutURL = () => `${backendLocation}/logout`


// User Routes
export const getCurrentUserURL = () => `${backendLocation}/users/me`
export const getUserByIdURL = (id: string) => `${backendLocation}/users/${id}`
export const editUserURL = (id: string) => `${backendLocation}/users/${id}`
export const getUsersURL = (limit: number, skip: number, sortBy: string) => `${backendLocation}/users${generateLSSB(limit, skip, sortBy)}`
export const deleteUserURL = (id: string) => `${backendLocation}/users/${id}`


// Service Routes
export const getServicesURL = () => `${backendLocation}/services`
export const createServiceURL = () => `${backendLocation}/services`
export const getServiceNamesURL = () => `${backendLocation}/services/names`
export const getServiceByNameURL = (name: string) => `${backendLocation}/services/name/${name}`
export const getServiceByIdURL = (id: string) => `${backendLocation}/services/${id}`
export const updateServiceURL = (id: string) => `${backendLocation}/services/${id}`
export const deleteServiceURL = (id: string) => `${backendLocation}/services/${id}`
export const isServicePublishedURL = (id: string) => `${backendLocation}/services/check/${id}`


// Window Routes
export const getWindowsURL = () => `${backendLocation}/windows`
export const createWindowURL = () => `${backendLocation}/windows`
export const getWindowByIdURL = (id: string) => `${backendLocation}/windows/${id}`
export const updateWindowURL = (id: string) => `${backendLocation}/windows/${id}`
export const deleteWindowURL = (id: string) => `${backendLocation}/windows/${id}`


// Clerk Routes
export const getClerksURL = () => `${backendLocation}/clerks`
export const createClerkURL = () => `${backendLocation}/clerks`
export const deleteAllClerksURL = () => `${backendLocation}/clerks`
export const deleteClerkURL = (id: string) => `${backendLocation}/clerks/${id}`


// Operation Routes
export const getServiceFromWindowURL = (id: string) => `${backendLocation}/operations/getService/${id}`
export const getWindowFromServiceURL = (id: string) => `${backendLocation}/operations/getWindow/${id}`


// Queue Routes
export const getAllQueuesURL = () => `${backendLocation}/queues`
export const getQueueByIdURL = (id: string) => `${backendLocation}/queues/${id}`
export const clearAllQueuesURL = () => `${backendLocation}/queues/clear-all-queues`
export const joinQueueURL = () => `${backendLocation}/queues/join`
export const getWaitingListURL = () => `${backendLocation}/queues/waiting/list`
export const getCalledListURL = () => `${backendLocation}/queues/called/list`
export const getProcessingListURL = () => `${backendLocation}/queues/processing/list`
export const getAcceptedListURL = () => `${backendLocation}/queues/accepted/list`
export const getRejectedListURL = () => `${backendLocation}/queues/rejected/list`
export const callClientByWindowURL = () => `${backendLocation}/queues/call/client-by-window`
export const processClientByWindowURL = () => `${backendLocation}/queues/process/client-by-window`
export const acceptClientByWindowURL = () => `${backendLocation}/queues/accept/client-by-window`
export const rejectClientByWindowURL = () => `${backendLocation}/queues/reject/client-by-window`


// Queue Metrics Routes
export const getQueueMetricsURL = () => `${backendLocation}/queuemetrics`
export const getQueueMetricByIdURL = (id: string) => `${backendLocation}/queuemetrics/${id}`
export const getQueueMetricByQueueIdURL = (id: string) => `${backendLocation}/queuemetrics/${id}`


// Stats Routes
export const getAverageJourneyTimeURL = () => `${backendLocation}/stats/average-journey-time`
export const getAverageWaitingTimeURL = () => `${backendLocation}/stats/average-waiting-time`
export const getAverageServiceTimeURL = () => `${backendLocation}/stats/average-service-time`
export const getServiceTimeStatsURL = () => `${backendLocation}/stats/service-time`
export const getServiceWiseAnalysisURL = () => `${backendLocation}/stats/service-wise-analysis`
export const getPeakHoursURL = () => `${backendLocation}/stats/peak-hours`
export const generateSummaryReportURL = () => `${backendLocation}/stats/results`
