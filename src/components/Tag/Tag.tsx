import './_tag.scss';
interface TextfieldProps {
  label: string;
}

const Tag = ({label}: TextfieldProps) => {
  return (
    <div className='tag'>
      {label}
    </div>
  );
}

export default Tag;