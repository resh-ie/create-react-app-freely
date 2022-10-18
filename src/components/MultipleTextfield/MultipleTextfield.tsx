import { Controller } from 'react-hook-form';

import styles from './_multipletextfields.module.scss';
import PrimaryButton from '../Button/Button';
import Textfield from '../Textfield/Textfield';

interface MultipleTextfieldProps {
  label: string;
  fields: any;
  control: any;
  append: any;
  remove: any;
  register: any;
  maxLimit: number;
  error: any;
  name: string;
  deleteLabel: string;
  appendLabel: string;
}

const MultipleTextfield = ({
  label,
  fields,
  control,
  append,
  remove,
  register,
  maxLimit,
  error,
  name,
  deleteLabel,
  appendLabel,
}: MultipleTextfieldProps) => {
  return (
    <div id='text-data' className={styles['multipletextfields']}>
      <div className={styles['multipletextfields__title']}>{label}</div>
      {fields.map((item: any, index: number) => {
        const multiError = error;
        return (
          <div className={styles['multipletextfields-top']} key={item.id}>
            <Controller
              render={({ field }) => (
                <Textfield
                  register={register}
                  error={multiError?.[index]?.name?.message}
                  {...field}
                />
              )}
              name={`${name}.${index}.name`}
              control={control}
            />
            {fields.length > 1 && (
              <PrimaryButton
                label={deleteLabel}
                onClick={() => remove(index)}
                varient='text'
                type='button'
              />
            )}
          </div>
        );
      })}
      <div className={styles['multipletextfields-add']}>
        {fields.length < maxLimit && (
          <PrimaryButton
            label={appendLabel}
            onClick={() => append({ name: '' })}
            varient='outlined'
            type='button'
          />
        )}
      </div>
    </div>
  );
};

export default MultipleTextfield;
