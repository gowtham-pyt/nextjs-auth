import { atom } from 'jotai'

const cartAtom = atom({
  id: 0,
  quantity: 0,
})

const userAtom = atom([
  {
    id:'09989909',
    name:"Gowtham",
    email:"gowtham.s@pickyourtrail.com",
    username:"Perro"
  }
])

export { cartAtom, userAtom }