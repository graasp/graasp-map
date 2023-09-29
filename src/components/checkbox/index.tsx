import React from 'react';

import { Checkbox, FormControlLabel, FormGroup, styled } from '@mui/material';

import { Item, Parent, ParentCheck } from '../../types';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: ParentCheck;
  list: Item[];
}

const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-size: 12px;
  }
  .MuiCheckbox-root {
    padding: 4px;
  }
`;

const CheckboxGroup = ({ list, checked, handleChange }: Props): JSX.Element => (
  <FormGroup>
    {list.map((ele: { label: Parent }) => (
      <StyledFormControlLabel
        key={ele.label}
        control={
          <Checkbox
            checked={checked[ele.label]}
            onChange={handleChange}
            size="small"
          />
        }
        label={ele.label}
        name={ele.label}
      />
    ))}
  </FormGroup>
);

export default CheckboxGroup;
