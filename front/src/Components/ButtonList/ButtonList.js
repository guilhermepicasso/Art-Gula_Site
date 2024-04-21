import * as React from 'react';
import "./ButtonList.scss";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ButtonList({ items, onSelect }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (selectedItem) => {
    setAnchorEl(null);
    if (onSelect && selectedItem !== undefined) {
      onSelect(selectedItem);
    }
  };

  return (
    <div className="cardapios">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Cardápios
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(undefined)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} onClick={() => handleClose(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
