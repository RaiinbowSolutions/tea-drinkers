import React from 'react';

const countDownTarget: Date = new Date("Sep 5, 2023 00:00:00");

const convertNumberToDateString = (value: number) => {
  let days = Math.floor(value / (1000 * 60 * 60 * 24));
  let hours = Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((value % (1000 * 60)) / 1000);

  if (value <= 0) return "Expired";
  return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

function ComingSoonComponent() {
  const [countDown, setCountDown] = React.useState(countDownTarget.getTime() - new Date().getTime());

  React.useEffect(() => {
    countDown > 0 && setTimeout(() => setCountDown(countDown - 1000), 1000);
  }, [countDown]);

  return (
    <div className='comingSoonComponent'>
        <h1>Coming soon</h1>
        <p>{convertNumberToDateString(countDown)}</p>
    </div>
  );
}

export default ComingSoonComponent;