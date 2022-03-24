import { objectPropertySort } from './object-property-sort';

type Props = {
  str: string;
  num: number;
  obj?: object | undefined;
};

class TestObject {
  constructor(private value: Props) {}
}

const obj1 = new TestObject({
  num: 42,
  str: 'john',
  obj: new TestObject({
    num: 43,
    str: 'doe',
  }),
});

const obj2 = new TestObject({
  obj: new TestObject({
    str: 'doe',
    num: 43,
  }),
  str: 'john',
  num: 42,
});

describe('objectPropertySort', () => {
  it('オブジェクトのプロパティをソートする', () => {
    expect(obj1).toStrictEqual(obj2);
    expect(JSON.stringify(obj1)).not.toStrictEqual(JSON.stringify(obj2));

    const sorted1 = objectPropertySort(obj1);
    const sorted2 = objectPropertySort(obj2);

    expect(sorted1).toStrictEqual(sorted2);
    expect(JSON.stringify(sorted1)).toStrictEqual(JSON.stringify(sorted2));
  });
});
