import * as React from 'react';

import { styled } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledTagGroup = styled(ToggleButtonGroup)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
}));
const StyledTagButton = styled(ToggleButton)(() => ({
  padding: '5px 5px', // Adjust padding as needed
  margin: '2px 5px', // Add some spacing between tags
  fontSize: '10px',

}));

type Props = {
  items: any;
  value: any;
  setValue: any;
};

type Item = {
  name: string;
};
const ToggleButtonsMultiple = ({ items, value, setValue }: Props): JSX.Element => {

  const handleSelect = (
    event: React.MouseEvent<HTMLElement>,
    ele: string[],
  ) => {
    setValue(ele);
  };

  return (
    <StyledTagGroup
      value={value}
      onChange={handleSelect}
      aria-label="text formatting"
      size="small" 
    >
      {items.map((item: Item) => (
        <StyledTagButton
          key={item.name}
          value={item.name}
          aria-label={item.name}
        >
          {item.name}
        </StyledTagButton>
      ))}
    </StyledTagGroup>
  );
};

export default ToggleButtonsMultiple;
