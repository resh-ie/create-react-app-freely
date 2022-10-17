import { Button } from '@mui/material';

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
  varient: 'text' | 'outlined' | 'contained';
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const PrimaryButton = ({
  type,
  varient,
  label,
  onClick,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <Button
      disabled={disabled}
      variant={varient}
      color='primary'
      onClick={onClick}
      type={type}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
