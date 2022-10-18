import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Controller } from 'react-hook-form';

interface DatePickerCalendarProps {
  label: string;
  dateValue: Date;
  name: string;
  control: any;
}

const DatePickerCalendar = ({
  label,
  dateValue,
  name,
  control,
}: DatePickerCalendarProps) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          defaultValue={dateValue}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <DatePicker
              label={label}
              value={value}
              onChange={onChange}
              inputFormat='YYYY/MM/DD'
              disablePast
              renderInput={(params) => (
                console.log(error),
                (
                  <TextField
                    helperText={error ? error.message : null}
                    id={name}
                    fullWidth
                    {...params}
                    error={error ? true : false}
                  />
                )
              )}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerCalendar;
