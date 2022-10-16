import Tag from '../Tag/Tag';

interface CardProps {
  title: string;
  startDate: string;
  endDate: string;
  status: string;
}

const Card = ({ title, startDate, endDate, status }: CardProps) => {
  return (
    <div className='card'>
      <div className='card__title'>{title}</div>
      <div className='card__date'>
        {startDate} - {endDate}
      </div>
      <div className='card__status'>
        <Tag label={status} />
      </div>
    </div>
  );
};

export default Card;
