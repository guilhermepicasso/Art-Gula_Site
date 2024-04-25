import './index.scss';
import Login from '../../Components/Login/Login';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: "50%",
  transform: 'translate(-50%, -50%)'
};

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="pagina-home">
      <Link to="./cardapio">Cardápio</Link>
      
      {/* <Login />  */}
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login></Login>
        </Box>
      </Modal>
    </div>

  );
}


