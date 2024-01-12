const orders = new Set(['1', '1','1','1','1', '2', '2','2','2','2',]);
// console.log(orders);
// console.log(new Set('Sourin'));
// console.log(new Set());

// Checking some utilities of SET
// console.log(orders.size)
// console.log(orders.has('3'));
// console.log(orders.has('1'));

// CRUD into a SET
orders.add('Sourin')
orders.add('Sourin')
orders.add('Sourin')
orders.add('Sarkar')
orders.delete('Sarkar')
// console.log(orders)

// orders.clear()
// console.log(orders)

for(const items of orders) console.log(items);

// Example

const staff = new Set(['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager', 'Manager']);
// console.log(staff.size)
// console.log(staff)

const staffUnique = staff;
console.log(staffUnique);