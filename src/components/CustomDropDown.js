import classes from './CustomDropDown.module.css';
import React, { useState } from 'react';
import { FormControl, Dropdown } from 'react-bootstrap';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    style={{
      color: '#gray',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      cursor: 'pointer',
      height: '100%',
    }}
    ref={ref}
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <span>{children}</span>
    <span>&#x25bc;</span>
  </div>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul
          className="list-unstyled"
          style={{ maxHeight: '150px', overflowY: 'scroll' }}
        >
          {React.Children.toArray(children).filter(
            (child) =>
              !value ||
              child.props.children.toLowerCase().includes(value.toLowerCase())
          )}
        </ul>
      </div>
    );
  }
);
// Props
// 'menuItems' = an array of objects. Objects inside must have "name" and "id" keys
// 'selectedItem' = an object that has a "name" and "id" keys. It is the one set if the user already selected a value from the menu.
// 'placeHolder' = the text presented in place of a null selectedItem
// 'handleSelect' = function executed when a menu is selected.

//!!!! Important
// the eventKey is the value returned in the handleSelect function.

const CustomDropDown = ({
  menuItems,
  handleSelect,
  selectedItem,
  placeHolder,
}) => {
  return (
    <Dropdown className={classes['drop-down']} onSelect={handleSelect}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {selectedItem === null ? placeHolder : selectedItem}
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} onChange={(e) => console.log(e)}>
        {menuItems.map((item) => {
          return (
            <Dropdown.Item key={item.id} eventKey={item.name} value={item}>
              {item.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropDown;
