function checkDate(timestamp) {
  let isSameDate = false;
  // Так как в примере мы сравниваем только Число, Месяц, Год то создадим переменную options
  // (Если надо сравнить целиком можно использовать dateOut.getTime() === dateIn.getTime())
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  // Достаточно вызвать по 1 разу функцию Date() для каждого таймстампа
  const outerDate = new Date(timestamp * 1000).toLocaleDateString(options);
  // тк нам нужна отдельная строка для pm/am то используем getHours()
  // а так можно в toLocaleDateString передать { hour12: true } и получить время подпись
  const curFullDate = new Date();
  const curDate = curFullDate.toLocaleDateString(options);
  if (outerDate === curDate) { isSameDate = true; }

  return {
    isSameDate,
    dayPeriod: curFullDate.getHours() > 12 ? 'pm' : 'am',
  };
}

// const unix = Math.round(+new Date() / 1000);

// console.log(checkDate(unix));
