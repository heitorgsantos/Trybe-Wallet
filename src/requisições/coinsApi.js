const fetchCoins = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await request.json();
  delete data.USDT;
  return Object.keys(data);
};

// console.log(fetchCoins());
export default fetchCoins;
