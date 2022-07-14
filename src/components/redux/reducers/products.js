const fakeProducts = [
  { id: 2, name: "Przyprawa curry" },
  { id: 1, name: "Pomidory" },
  { id: 3, name: "Olej" },
  { id: 4, name: "Wołowina 500g" },
  { id: 5, name: "Ziemniaki" },
  { id: 6, name: "Pomidory" },
  { id: 7, name: "Przyprawa curry" },
  { id: 8, name: "Olej" },
  { id: 9, name: "Wołowina 500g" },
  { id: 10, name: "Ziemniaki" },
];

export function products(state=fakeProducts,{type,payload}) {
  return state
}