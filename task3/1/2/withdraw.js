const clients1 = ['Maksym', 'Andrij', 'Serhey', 'Yan'];
const balances1 = [700, 50, 25, 80];

function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);
  if (balances[clientIndex] < amount) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
}

console.log(withdraw(clients1, balances1, 'Yan', 2));
console.log(withdraw(clients1, balances1, 'Andrij', 22));
console.log(withdraw(clients1, balances1, 'Maksym', 7));
console.log(balances1);