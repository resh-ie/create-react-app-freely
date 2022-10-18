import { IconButton } from '@mui/material';

import buttonIconMapper from './buttonIconMapper';

interface ButtonIconProps {
  icon: string;
  onClick: () => void;
  label: string;
}

const ButtonIcon = ({ label, icon, onClick }: ButtonIconProps) => {
  return (
    <IconButton aria-label={label} onClick={onClick}>
      {buttonIconMapper[icon]}
    </IconButton>
  );
};

export default ButtonIcon;
