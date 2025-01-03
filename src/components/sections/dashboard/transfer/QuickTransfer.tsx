import CardContainer from 'components/common/CardContainter';
import { Box, Stack } from '@mui/material';
import SendAmountInput from 'components/sections/dashboard/transfer/SendAmountInput';

const QuickTransfer = () => {
  return (
    <CardContainer title="Transfer">
      <Stack gap={4} justifyContent="space-between" sx={{ flex: 1, pl: 0.5 }}>
        {/** Content without carousel */}
        <Box sx={{ minWidth: 0, overflow: 'hidden', flex: 1 }}>
          {/* Placeholder or additional content can go here */}
        </Box>
        <SendAmountInput />
      </Stack>
    </CardContainer>
  );
};

export default QuickTransfer;
