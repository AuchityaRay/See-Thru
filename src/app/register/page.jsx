"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};



const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid",
    borderColor: "#0E713C",
    borderRadius: 8,
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.

    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    
  },
}));

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="my-60" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='sm:w-[912] w-3/5 my-5'>
          <Typography
            id="modal-modal-title"
            className="text-center font-nunito text-[25px] mb-6 font-semibold"
            variant="h6"
            component="h2"
          >
            Create your Account
          </Typography>
          <hr />
          <Typography
            id="modal-modal-description"
            className="text-center font-inter sm:text-[14px] text-[10px] mb-6 font-normal italic"
            sx={{ my: 2 }}
          >
            Your personal information will not be displayed on SeeThru. All
            interactions are completely anonymous.
          </Typography>
          <div className="grid  place-content-center">
            <FormControl variant="standard" className="justify-center my-2">
              <InputLabel
                shrink
                htmlFor="Work Email"
                className="font-medium text-[16] font-[inter] text-black"
              >
                Work Email
              </InputLabel>
              <BootstrapInput id="Work Email" />
            </FormControl>
            <FormControl variant="standard" className="justify-center my-2 ">
              <InputLabel
                shrink
                htmlFor="First Name"
                className="font-medium text-[16] font-[inter] text-black"
              >
                First Name
              </InputLabel>
              <BootstrapInput id="First Name" />
            </FormControl>
            <FormControl variant="standard" className="justify-center my-2">
              <InputLabel
                shrink
                htmlFor="Last Name"
                className="font-medium text-[16] font-[inter] text-black"
              >
                Last Name
              </InputLabel>
              <BootstrapInput id="Last Name" />
            </FormControl>
            <FormControl variant="standard" className="justify-center my-2">
              <InputLabel
                shrink
                htmlFor="phonenumber"
                className="font-medium text-[16] font-[inter] text-black"
              >
               Phone Number
              </InputLabel>
              <BootstrapInput id="phonenumber" />
            </FormControl>
            <FormControl variant="standard" className="justify-center my-2">
              <InputLabel
                shrink
                htmlFor="Linkedin"
                className="font-medium text-[16] font-[inter] text-black"
              >
                LinkedIn URL
              </InputLabel>
              <BootstrapInput id="Linkedin" />
            </FormControl>
            <FormControl variant="standard" className="justify-center my-2">
              <InputLabel
                shrink
                htmlFor="create_password"
                className="font-medium text-[16] font-[inter] text-black"
              >
                Create Password
              </InputLabel>
              <BootstrapInput id="create_password" />
            </FormControl>
            <FormControlLabel control={<Checkbox defaultChecked />}   className='sm:text-[14px] text-[10px] mb-6 font-normal italic' label="I acknowledge that the information I provided is accurate"/>
           
            <Typography
            id="modal-modal-description"
            className="text-center font-inter sm:text-[14px] text-[10px] mb-6 font-normal italic"
            sx={{ my: 2 }}>
           By clicking below and creating an account, I agree to <span className='text-[#0E713C]'>SeeThru</span> Terms of Service and Privacy Policy
          </Typography>
            <Button  className='bg-[#0E713C] capitalize rounded-lg text-white opacity-75 h-12 hover:bg-[#086131]'>
              Create Account
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
