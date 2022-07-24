import moment from "moment";

export const isValidDate = (date) => {
  try {
    var InvalidDate = moment(date)?.toDate()?.toString();
    if (
      "Invalid Date" === InvalidDate ||
      "Invalid time value" === InvalidDate
    ) {
      return false;
    }
  } catch {
    console.log("error");
  }
  return true;
};
