const add = (a,b) => a+b;
const total = (shipping, subTotal) => {
  let total = add(shipping, subTotal);
  return `$${total}`;
}

test('Add', () => {
  expect(add(1,3)).toBe(4);
  expect(add(5,2)).toBe(7);
})

test('Total', () => {
  expect(total(5,20)).toBe('$25');
})
