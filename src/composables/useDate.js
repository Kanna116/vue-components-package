export const useDate = () => {
  // const date = new Date();
  const getCurrentDate = new Date();

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Define an array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = (dateVal) => {
    const givenDate = new Date(dateVal);
    const weekday = weekdays[givenDate.getDay()];
    const month = months[givenDate.getMonth()];
    const day = String(givenDate.getDate()).padStart(2, "0");
    const year = givenDate.getFullYear();
    const hours = givenDate.getHours();
    const minutes = String(givenDate.getMinutes()).padStart(2, "0");

    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    return `${weekday}, ${month} ${day}, ${year} at ${formattedHours}:${minutes} ${period}`;
  };

  return {
    getCurrentDate,
    formattedDate,
  };
};
