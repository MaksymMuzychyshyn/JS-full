const user = {
    name: 'Tom',
    age: 17,
  };
  
  user.hobby = 'football';
  /* присвой объекту свойство hobby со значением 'football' с помощью точки */
  
  const anotherKey = 'married';
  user[anotherKey] = false;
  /* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
  
  user['favorite music'] = 'rock';
  /* присвой объекту свойство 'favorite music' со значением 'rock' */
  
  user.address = {};
  /* присвой объекту свойство 'address', которое будет пустым объкетом */
  
  user.address.country = 'Ukraine';
  /* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
  
  user.address.building = 17;
  /* присвой объекту в 'address' свойство 'building', со значением 17 */
  
  console.log(user);
  /* выведи в консоль итоговый объект user */