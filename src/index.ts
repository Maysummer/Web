import { User } from './models/User';

const user = new User({ name: 'Nmeso', age: 120 });

console.log(user.get('name'));
console.log(user.get('age'));
