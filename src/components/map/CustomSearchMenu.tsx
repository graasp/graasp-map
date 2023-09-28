import Checkbox from '../checkbox';
import DropDown from '../dropdown';
import { tags } from './data';
import './style.css';

interface Props {
  dropdownState: boolean;
  itemsList: any;
  setSelectedItem: (val: any) => void;
  closeMenu: () => void;
  toggleTag: (ele: any) => void;
  selectedTags: any;
  setIsChecked: any;
  isChecked: any;
}
const CustomSearch = ({
  dropdownState,
  itemsList,
  setSelectedItem,
  closeMenu,
  toggleTag,
  selectedTags,
  setIsChecked,
  isChecked,
}: Props): JSX.Element => {
  const handleCheck = (e: any) => {
    const { name } = e.target;
    setIsChecked((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <div
      className={`dropdown-items ${dropdownState ? 'isVisible' : 'isHidden'}`}
    >
      <div className="text-start">
        <div>
          {tags.map((tag) => (
            <button
              key={tag.name}
              className={`item-tag ${
                selectedTags.find((ele: any) => ele.name === tag.name) &&
                'active-tag'
              }`}
              type="button"
              onClick={() => toggleTag(tag)}
            >
              {tag.name}
            </button>
          ))}
        </div>
        <DropDown
          dropdownState={dropdownState}
          itemsList={itemsList}
          setSelectedItem={setSelectedItem}
          closeMenu={closeMenu}
        />
      </div>
      <div className="side-menu">
        <Checkbox
          label="Own"
          isChecked={isChecked.Own}
          toggleCheckboxChange={handleCheck}
        />
        <Checkbox
          label="Shared"
          isChecked={isChecked.Shared}
          toggleCheckboxChange={handleCheck}
        />
        <Checkbox
          label="Published"
          isChecked={isChecked.Published}
          toggleCheckboxChange={handleCheck}
        />
      </div>
    </div>
  );
};

export default CustomSearch;
