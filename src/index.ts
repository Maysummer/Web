import { User } from './models/User';

const user = new User({ name: 'Nmeso', age: 120 });

user.set({name: 'ngozi'})
console.log(user.get('name'));
console.log(user.get('age'));
