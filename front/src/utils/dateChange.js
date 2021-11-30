export const DateChange = (date) => {
    const New = new Date(date);
    const month = New.getMonth() + 1;
    const day = New.getDate();
    const result =
      month +
      "." +
      day;
    return result;
};