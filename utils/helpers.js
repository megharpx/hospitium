module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()} at ${new Date(
      date
    ).getHours()}:${new Date(date).getMinutes()}`;
  },
<<<<<<< HEAD
format_url: (url) => {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split("/")[0]
    .split("?")[0];
},
format_plural(word, amount)
{
  if (amount !== 1) {
    return `${word}s`;
  }

  return word;
}
=======
  format_url: (url) => {
    return url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split("/")[0]
      .split("?")[0];
  },
  format_plural(word, amount) {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
>>>>>>> main
};
