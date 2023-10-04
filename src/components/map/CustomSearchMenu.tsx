import React, { Dispatch, SetStateAction } from 'react';

import { Popover } from '@mui/material';

import { Item, MarkerProps, Parent, ParentCheck } from '../../types';
import CheckboxGroup from '../checkbox';
import DropDown from '../dropdown';
import ToggleButtonsMultiple from '../tags';
import { tags } from './data';
import './style.css';

const list: Item[] = [
  { label: 'Own' },
  { label: 'Shared' },
  { label: 'Published' },
];
interface Props {
  isItemSearchDialogOpen: boolean;
  itemsList: MarkerProps[];
  setSelectedItem: (val: MarkerProps) => void;
  closeMenu: () => void;
  selectedTags: string[];
  setIsChecked: Dispatch<SetStateAction<ParentCheck>>;
  isChecked: ParentCheck;
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
  anchorEl: HTMLInputElement | null;
}
const CustomSearch = ({
  isItemSearchDialogOpen,
  itemsList,
  setSelectedItem,
  closeMenu,
  selectedTags,
  setIsChecked,
  isChecked,
  setSelectedTags,
  anchorEl,
}: Props): JSX.Element => {
  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name }: { name: string } = e.target;
    setIsChecked(
      (prev: ParentCheck): ParentCheck => ({ ...prev, [name]: !prev[name as Parent] }),
    );
  };

  return (
    <Popover
      open={isItemSearchDialogOpen}
      onClose={closeMenu}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      anchorEl={anchorEl}
      disableAutoFocus
      disableEnforceFocus
    >
      <div className="search-menu">
        <div className="text-start">
          <div>
            <ToggleButtonsMultiple
              items={tags}
              value={selectedTags}
              setValue={setSelectedTags}
            />
          </div>
          <DropDown
            itemsList={itemsList}
            setSelectedItem={setSelectedItem}
            closeMenu={closeMenu}
          />
        </div>
        <div>
          <CheckboxGroup
            list={list}
            checked={isChecked}
            handleChange={handleCheck}
          />
        </div>
      </div>
    </Popover>
  );
};

export default CustomSearch;
