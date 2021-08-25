export const getYearFromDateString = (dateStr: string = '') => {
    if (dateStr) {
        return dateStr.replace(/\-.*/g, '')        
    }
    return ""
 }

const DateUtils = {
    getYearFromDateString
}

export default DateUtils