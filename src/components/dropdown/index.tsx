import './style.css';

interface Props {
  itemsList: any;
  setSelectedItem: (val: any) => void;
  closeMenu: () => void;
}

const DropDown = ({
  itemsList,
  setSelectedItem,
  closeMenu,
}: Props): JSX.Element => {
  const handleSetDropdownValue = (value: string) => {
    setSelectedItem(value);
    closeMenu();
  };

  return (
    <div>
      {itemsList.map((ele: any) => (
        <div className="dropdown-item" key={ele.title}>
          <button
            className="dropdown__link"
            onClick={() => handleSetDropdownValue(ele)}
            type="button"
          >
            {ele.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
