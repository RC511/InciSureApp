import dayjs, { Dayjs } from "dayjs"; 
export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
  ) => {
        const firstDateofMonth = dayjs().year(year).month(month).startOf('month');
        const LastDateofMonth = dayjs().year(year).month(month).endOf('month');

        const arrayOfDate = []

        // create a prefix date
        for (let i = 0; i<firstDateofMonth.day();i++){
          const date = firstDateofMonth.day(i);

          arrayOfDate.push({
            currentMonth: false,
            date
          });
        }

        



        // generate current date 
        for (let i = firstDateofMonth.date();
            i<=LastDateofMonth.date();
            i++){
          arrayOfDate.push({
            currentMonth: true,
            date:firstDateofMonth.date(i),
            today: firstDateofMonth.date(i).toDate().toDateString() === 
            dayjs().toDate().toDateString(),
          });
        }

        //generate suffix date
        const remaining = 42 - arrayOfDate.length;
        
        for (let i = LastDateofMonth.date()+1;
            i<=LastDateofMonth.date()+remaining;
            i++){
          arrayOfDate.push({
            currentMonth: false,
            date: LastDateofMonth.date(i)});
        }

        return arrayOfDate;
        
};

export const months = [
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
	"December",];

