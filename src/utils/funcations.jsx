export default function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // use 12-hour clock with AM/PM
    //   day: 'numeric',
    //   month: 'long',
    //   year: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date)||""; // Adjust 'en-US' as needed
  }