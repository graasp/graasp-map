import { Popover } from '@mui/material';

import CheckboxGroup from '../checkbox';
import DropDown from '../dropdown';
import ToggleButtonsMultiple from '../tags';
import { tags } from './data';
import './style.css';

const list = [{ label: 'Own' }, { label: 'Shared' }, { label: 'Published' }];
interface Props {
  isItemSearchDialogOpen: boolean;
  itemsList: any;
  setSelectedItem: (val: any) => void;
  closeMenu: () => void;
  selectedTags: any;
  setIsChecked: any;
  isChecked: any;
  setSelectedTags: any;
  anchorEl: any;
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
  const handleCheck = (e: any) => {
    const { name } = e.target;
    setIsChecked((prev: any) => ({ ...prev, [name]: !prev[name] }));
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
