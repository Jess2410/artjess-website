import dayjs from "dayjs"

export const formatDate = (date, format = "DD/MM/YYYY HH:mm") => {
    return dayjs(date).format(format)
}