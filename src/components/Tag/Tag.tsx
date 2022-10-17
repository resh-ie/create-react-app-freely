import styles from './_tag.module.scss';
import tagClassMapper from './tagClassNameMapper';
import tagMapper from './tagMapper';

interface TextfieldProps {
  label: string;
}

const Tag = ({ label }: TextfieldProps) => {
  return (
    <div className={`${styles.tag} ${styles[tagClassMapper[label]]}`}>
      {tagMapper[label]}
    </div>
  );
};

export default Tag;
