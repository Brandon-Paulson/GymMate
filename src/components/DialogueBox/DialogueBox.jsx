import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Popover, Typography } from '@mui/material';

const options = [
  'Shoulders',
  'Lats',
  'Biceps',
  'Back',
  'Chest',
  'Hamstrings',
  'Calves',
  'Quadriceps',
  'Triceps'
];


export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Muscle Groups
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>{options[0]} {options[1]}</Typography>
        </Popover>
      </div>
    );
  }


// function ConfirmationDialogRaw(props) {
//   const { onClose, value: valueProp, open, ...other } = props;
//   const [value, setValue] = React.useState(valueProp);
//   const radioGroupRef = React.useRef(null);

//   React.useEffect(() => {
//     if (!open) {
//       setValue(valueProp);
//     }
//   }, [valueProp, open]);

//   const handleEntering = () => {
//     if (radioGroupRef.current != null) {
//       radioGroupRef.current.focus();
//     }
//   };

//   const handleCancel = () => {
//     onClose();
//   };

//   const handleOk = () => {
//     onClose(value);
//   };

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <Dialog
//       sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
//       maxWidth="xs"
//       TransitionProps={{ onEntering: handleEntering }}
//       open={open}
//       {...other}
//     >
//       <DialogTitle>Muscle Groups</DialogTitle>
//       <DialogContent dividers>
//         <RadioGroup
//           ref={radioGroupRef}
//           aria-label="ringtone"
//           name="ringtone"
//           value={value}
//           onChange={handleChange}
//         >
//           {options.map((option) => (
//             <FormControlLabel
//               value={option}
//               key={option}
//               control={<Radio />}
//               label={option}
//             />
//           ))}
//         </RadioGroup>
//       </DialogContent>
//       <DialogActions>
//         <Button autoFocus onClick={handleCancel}>
//           Cancel
//         </Button>
//         <Button onClick={handleOk}>Ok</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

// ConfirmationDialogRaw.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.string.isRequired,
// };
  
//   export default function DialogueBox() {
//     const [open, setOpen] = React.useState(false);
//     const [value, setValue] = React.useState('');
  
//     const handleClickListItem = () => {
//       setOpen(true);
//     };
  
//     const handleClose = (newValue) => {
//       setOpen(false);
  
//       if (newValue) {
//         setValue(newValue);
//       }
//     };
  
//     return (
//       <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//         <List component="div" role="group">
//           <ListItem
//             divider
//             aria-haspopup="true"
//             aria-controls="muscle-group-menu"
//             aria-label="muscle group"
//             onClick={handleClickListItem}
//           >
//             <ListItemText primary="Muscle Groups" secondary={value} />
//           </ListItem>
//           <ConfirmationDialogRaw
//             id="muscle-group-menu"
//             keepMounted
//             open={open}
//             onClose={handleClose}
//             value={value}
//           />
//         </List>
//       </Box>
//     );
//   }