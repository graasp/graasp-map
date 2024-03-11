// import React, { Dispatch, SetStateAction } from 'react';

// import { Popover } from '@mui/material';

// import { tags } from '../../data/data';
// import { MarkerParent, MarkerProps, ParentCheck } from '../../types';
// import DropDown from '../dropdown';
// import CheckboxGroup from '../map/CheckboxGroup';
// import ToggleButtonsMultiple from '../tags';

// const list: { label: MarkerParent }[] = [
//   { label: 'MyItems' },
//   { label: 'Published' },
// ];
// interface Props {
//   itemsList: MarkerProps[];
//   setSelectedItem: (val: MarkerProps) => void;
//   closeMenu: () => void;
//   selectedTags: string[];
//   setIsChecked: Dispatch<SetStateAction<ParentCheck>>;
//   // isChecked: ParentCheck;
//   setSelectedTags: Dispatch<SetStateAction<string[]>>;
//   anchorEl: HTMLInputElement | null;
// }
// const CustomSearch = ({
//   itemsList,
//   setSelectedItem,
//   closeMenu,
//   selectedTags,
//   setIsChecked,
//   // isChecked,
//   setSelectedTags,
//   anchorEl,
// }: Props): JSX.Element => {
//   const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name }: { name: string } = e.target;
//     setIsChecked(
//       (prev: ParentCheck): ParentCheck => ({
//         ...prev,
//         [name]: !prev[name as MarkerParent],
//       }),
//     );
//   };

//   return (
//     <Popover
//       open
//       onClose={closeMenu}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'left',
//       }}
//       anchorEl={anchorEl}
//     >
//       <div
//         style={{
//           backgroundColor: 'white',
//           display: 'flex',
//           padding: 8,
//           width: 350,
//           maxHeight: 400,
//           overflowY: 'scroll',
//         }}
//       >
//         <div className="text-start">
//           <div>
//             <ToggleButtonsMultiple
//               items={tags}
//               value={selectedTags}
//               setValue={setSelectedTags}
//             />
//           </div>
//           <DropDown
//             itemsList={itemsList}
//             setSelectedItem={setSelectedItem}
//             closeMenu={closeMenu}
//           />
//         </div>
//         <div>
//           <CheckboxGroup list={list} handleChange={handleCheck} />
//         </div>
//       </div>
//     </Popover>
//   );
// };

// export default CustomSearch;
