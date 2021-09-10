```js
// JS 中的 typeof,是在 runtime 时运行的
// return typeod 1 === 'number'

// 类型别名在很多情况下可以和interface互换
// interfacc:Person {
//    name:string 
// }
// type Person = { name : string}
//



```
```js
  // 类型别名，interface 在这种情况下没法替代type
  type FavoriteNumber = string | number
  let roseFavoritenumber: FavoriteNumber = '6'
  
  // interface 也没法实现Utility type
  type Person = {
    name: string,
    age: number
  }
  const xiaoMing: Partial<Person> = {}
  const shenMiRen: Omit<Person, 'name' | 'age'> = {age: 8}
  type PersonKeys = keyof Person //keyof 是把对象中的键值都取出来，从而形成一个联合类型
  type PersonOnlyName = Pick<Person,'name'>
  type Age = Exclude<PersonKeys,'name'>

  // Partial 的实现
  type Partial<T> = {
    [P in keyof T] ?: T[P]; // in 是遍历的意思
  };
```