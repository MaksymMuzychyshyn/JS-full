const clients1 = ['Maksym', 'Andrij', 'Serhey', 'Yan'];
const balances1 = [700, 50, 25, 80];

function withdraw(clients, balances, client, amount) {
  const clientId = clients.indexOf(client);
  if (balances[clientIndex] < amount) {
    return -1;
  }
  balances[clientId] -= amount;
  return balances[clientId];
}
console.log(withdraw(clients1, balances1, 'Yan', 2));
console.log(balances1);

//solution 2


const withdraw = (clients, balances, client, amount) => {
    const clientId = clients.indexOf(client);
    if (balances[clientId] >= amount) {
      return balances[clientId] -= amount;
    } else {
      return -1
    }    
}