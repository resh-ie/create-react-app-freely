import style from './_tripHeader.module.scss';
import Tag from '../Tag/Tag';

interface TripHeaderProps {
  name: string;
  startDate: string;
  endDate: string;
  status: string;
}
const TripHeader = ({ name, startDate, endDate, status }: TripHeaderProps) => {
  return (
    <div className={style.header}>
      <div className={style.header__title}>{name}</div>
      <div className={style.header__date}>
        {startDate} - {endDate}{' '}
      </div>
      <div>
        <Tag label={status} />
      </div>
    </div>
  );
};

export default TripHeader;
