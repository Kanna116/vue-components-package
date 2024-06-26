import { ref, watch } from "vue";
import { useDate } from "./useDate";

export const useNotification = () => {
  const allNotifications = ref([]);

  const { getCurrentDate } = useDate();
  const newNotification = (text, description) => {
    const randomId = Math.floor(Math.random() * 1000);
    allNotifications.value.push({
      id: randomId,
      title: text,
      description: description,
      date: getCurrentDate,
    });

    // console.log(allNotifications.value)
  };

  let timeoutIds = [];
  watch(allNotifications.value, (currentNotifications) => {
    const setTimeItem = () => {
      console.log("timeout created");
      const timeoutId = setTimeout(() => {
        currentNotifications.shift();
        timeoutIds.shift();
      }, 5000);
      timeoutIds.push(timeoutId);
    };

    currentNotifications.forEach((_, index) => {
      if (!timeoutIds[index]) {
        setTimeItem();
      }
    });

    if (allNotifications.value.length === 0) {
      timeoutIds.forEach((id) => clearTimeout(id));
      timeoutIds = [];
      console.log("all timeouts cleared");
    }
  });

  const removeNotification = (id) => {
    allNotifications.value = allNotifications.value.filter(
      (item) => item.id !== id
    );
    // console.log("removed " + id)
    // console.log(allNotifications.value)
  };

  return { allNotifications, newNotification, removeNotification };
};
