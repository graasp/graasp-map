interface Props {
  label: string;
  isChecked: boolean;
  toggleCheckboxChange: any;
}
const Checkbox = ({ label, isChecked, toggleCheckboxChange }: Props) => {
  console.log(label);
  return (
    <div className="checkbox">
      <label htmlFor={`checkbox-${label}`}>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
          id={`checkbox-${label}`}
          name={label}
        />

        {label}
      </label>
    </div>
  );
};

export default Checkbox;
