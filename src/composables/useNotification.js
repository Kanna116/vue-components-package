import { ref } from 'vue'
import { useDate } from './useDate'

export const useNotification = () => {
    const allNotifications = ref([])

    const { getCurrentDate } = useDate()
    const newNotification = (text, description) => {
        const randomId = Math.floor(Math.random() * 1000)
        allNotifications.value.push({
            id: randomId,
            title: text,
            description: description,
            date: getCurrentDate
        })
        if (allNotifications.value.length !== 0) {
            setTimeout(() => allNotifications.value.shift(), 10000)
        }

        // console.log(allNotifications.value)
    }

    const removeNotification = (id) => {
        allNotifications.value = allNotifications.value.filter((item) => item.id !== id)
        // console.log("removed " + id)
        // console.log(allNotifications.value)
    }


    return { allNotifications, newNotification, removeNotification }
}
