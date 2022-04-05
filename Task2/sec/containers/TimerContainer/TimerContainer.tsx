import TimerComponent from 'components/TimerComponent';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { useStyles } from './style';

const TimerContainer: FunctionComponent = () => {
  const classes = useStyles();
  const [isOff, setIsOff] = useState(false);
  let myInterval: NodeJS.Timer | null;
  const [sec, setSec] = useState<number>(0);

  useEffect(() => {
    myInterval = setInterval(() => {
      if (!isOff) setSec(sec + 1);
    }, 1000);
    return () => {
      clearInterval(myInterval!);
    };
  });

  const handleStart = () => {
    setIsOff(false);
  };

  const handleStop = () => {
    setIsOff(true);
  };

  const handleReset = () => {
    setIsOff(true);
    setSec(0);
  };

  const countTime = (d: number) => {
    const h = Math.floor(d / 3600);
    // eslint-disable-next-line no-mixed-operators
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);
    return [h, m, s];
  };

  return (
    <TimerComponent
      handleStart={handleStart}
      handleStop={handleStop}
      handleReset={handleReset}
      isOff={isOff}
      classes={classes}
      countTime={countTime}
      s={sec}
    />
  );
};

export default TimerContainer;
