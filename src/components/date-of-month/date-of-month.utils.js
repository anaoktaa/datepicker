import { addDays, format, startOfMonth, isBefore, isAfter, subDays,
         endOfMonth, startOfWeek, endOfWeek, isSameDay, isSameMonth } from 'date-fns';

export const MonthDateArray = (initialDate, locale, selectedDate) => {
    const today = subDays(new Date(), 1);
    const monthStart = startOfMonth(initialDate);
    const monthEnd = endOfMonth(initialDate);
    const endDate = endOfWeek(monthEnd);
  
    let startDate = startOfWeek(monthStart);

    const monthDateList = [];
    while (startDate <= endDate) {
        const weekDateList = [];
        for (let i = 0; i < 7; i++) {
            const formattedDate = format(startDate, 'MM-dd-yyyy', { locale : locale });
            const objOfDate = {
                date: formattedDate
            }
            //Adding some condition to define style

            /*is Before current Month */
            if (isBefore(new Date(formattedDate), new Date(monthStart))) {
                objOfDate.style = 'style__1';
            }   
            /*is before current date */
            else if (isBefore(new Date(formattedDate), new Date(today))) {
                objOfDate.style = 'style__2';
            }  

            /*is Same with current date */        
            if (isSameDay(new Date(formattedDate), new Date(selectedDate)) && isSameMonth(new Date(formattedDate), new Date(monthEnd))) {
                objOfDate.style = 'style__3';
            }
       
             /*is after current month */
            if (isAfter(new Date(formattedDate), new Date(monthEnd))) {
                objOfDate.style = 'style__1';
            }
            /*is after current date */
            else if (isAfter(new Date(formattedDate), new Date(today)) && isSameMonth(new Date(formattedDate), new Date(monthEnd)) && 
                !isSameDay(new Date(formattedDate), new Date(selectedDate)) && isSameMonth(new Date(formattedDate), new Date(monthEnd))) {
                objOfDate.style = 'style__4';
            }

            weekDateList.push(objOfDate);
            startDate = addDays(startDate, 1);
        }
        monthDateList.push(weekDateList);
    }
    return monthDateList;
}