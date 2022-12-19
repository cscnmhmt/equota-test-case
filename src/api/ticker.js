const get24Ticket = () => {
  return fetch('https://api2.binance.com/api/v3/ticker/24hr');
};

export { get24Ticket };
