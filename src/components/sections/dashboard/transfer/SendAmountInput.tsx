import { Button, Modal, Box, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useState } from 'react';

const SendAmountInput = () => {
  const { up } = useBreakpoints();
  const upMd = up('md');
  const [openModal, setOpenModal] = useState(false);

  const handleSendClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 1,
        px: 0.5,
        gap: { xs: 1.5, sm: 3 },
      }}
    >
      <Typography
        fontWeight="regular"
        color="text.secondary"
        whiteSpace="nowrap"
        sx={{ fontSize: { xs: 'caption.fontSize', md: 'body2.fontSize' } }}
      >
        Write Amount
      </Typography>
      <TextField
        type="number"
        placeholder="0.00"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Button
                onClick={handleSendClick}
                variant="contained"
                color="primary"
                type="submit"
                size={upMd ? 'large' : 'medium'}
                sx={{
                  borderRadius: 'inherit',
                  minWidth: { xs: 80, sm: 120 },
                }}
                endIcon={<IconifyIcon icon="ph:telegram-logo" color="common.white" />}
              >
                Send
              </Button>
            </InputAdornment>
          ),
        }}
        size={upMd ? 'medium' : 'small'}
        variant="filled"
        sx={{
          '& .MuiFilledInput-root': {
            paddingRight: 0,
            borderRadius: 40,
          },
          '& .MuiInputAdornment-root': {
            borderRadius: 40,
          },
          '&::placeholder': {
            color: 'text.secondary',
            ml: 5,
          },
        }}
      />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Service Unavailable
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            This service is currently down. Please try again later.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCloseModal} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Stack>
  );
};

export default SendAmountInput;
