import styles from './_card.module.scss';
import TripHeader from '../TripHeader/TripHeader';

interface CardProps {
  title: string;
  startDate: string;
  endDate: string;
  status: string;
}

const Card = ({ title, startDate, endDate, status }: CardProps) => {
  return (
    <div className={styles.card}>
    <TripHeader name={title} startDate={startDate} endDate={endDate} status={status} />
    </div>
  );
};

export default Card;
