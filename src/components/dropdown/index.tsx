/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import './style.css';

interface Props {
  dropdownState: boolean;
  itemsList: any;
  setSelectedItem: (val: any) => void;
  closeMenu: () => void;
}

const DropDown = ({
  dropdownState,
  itemsList,
  setSelectedItem,
  closeMenu,
}: Props): JSX.Element => {
  const handleSetDropdownValue = (value: string) => {
    setSelectedItem(value);
    closeMenu();
  };

  return (
    <div
      // className={`dropdown-items ${dropdownState ? 'isVisible' : 'isHidden'}`}
    >
      {itemsList.map((ele: any) => (
        <div className="dropdown-item" key={ele.title}>
          <div
            className="dropdown__link"
            onClick={() => handleSetDropdownValue(ele)}
          >
            {ele.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
