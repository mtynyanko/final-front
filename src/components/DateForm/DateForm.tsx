interface DateFormProps {
  className?: string;
  date?: Date;
}

const DateForm = ({ date, className = 'date-block' }: DateFormProps) => {

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };


  const dateFormatting = (date?: Date): string => {
    let newDate;
    if (date) {
      newDate = new Date(date);
    } else {
      newDate = new Date();
    }
    return newDate.toLocaleDateString("en-US", options);
  };
  return (
    <div className={className}>{dateFormatting(date)}</div>
  );
};
export default DateForm;
