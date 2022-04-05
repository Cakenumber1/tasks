import { Box, Button } from '@mui/material';
import { ClassNameMap } from '@mui/styles';
import React from 'react';

type Props = {
  handleStart: () => void,
  handleStop: () => void,
  handleReset: () => void,
  isOff: boolean,
  classes: ClassNameMap,
  countTime: (s: number) => any,
  s: number,
};

const TimerComponent: React.FC<Props> = ({
  handleStart, handleStop, handleReset, isOff, classes, countTime, s,
}) => (
  <Box className={classes.timer}>
    <Box className={classes.timeBox}>
      <Button disabled={!isOff} type="button" variant="contained" onClick={handleStart}>Start</Button>
      <Button disabled={isOff} type="button" variant="contained" onClick={handleStop}>Stop</Button>
      <Button type="button" variant="contained" onClick={handleReset}>Reset</Button>
    </Box>
    <Box className={classes.timeBox}>
      {countTime(s).map((el: number) => <Box>{el}</Box>)}
    </Box>
  </Box>
);

export default TimerComponent;
