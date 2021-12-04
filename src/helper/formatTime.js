function formatTime(t) {
   const hours = Math.floor(t / 3600);
   const minutes = Math.floor((t % 3600) / 60);
   const seconds = (t % 3600) % 60;

   return {
       hours: String(hours).length === 1 ? `0${hours}`: hours,
       minutes: String(minutes).length === 1 ? `0${minutes}`: minutes,
       seconds: String(seconds).length === 1 ? `0${seconds}`: seconds
   }
}

export default formatTime