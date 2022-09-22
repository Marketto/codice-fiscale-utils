import {parseISO } from "date-fns";
type MultiFormatDate = string | Date | number[];

export default MultiFormatDate;

export const multiFormatDateToDate = (multiFormatDate: MultiFormatDate): Date => {
    if (typeof multiFormatDate === "string") {
        return parseISO(multiFormatDate);
    } else if (multiFormatDate instanceof Date) {
        return multiFormatDate;
    } else {
        return (new Date(Date.UTC(multiFormatDate[0], multiFormatDate[1] || 0, multiFormatDate[2] || 1)));
    }
};
