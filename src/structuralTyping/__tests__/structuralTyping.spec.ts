describe('Structural Typing', () => {
  test('allows use of types of the same parameters', () => {
    interface type1 {
      field1: string,
      field2: string
    }

    interface type2 {
      field1: string,
      field2: string
    }

    const instance1: type1 = {field1: 'a', field2: 'b'};
    const instance2: type2 = {field1: 'c', field2: 'd'}; 

    const functionOfType1 = (parameter: type1) => parameter.field1;
    const functionOfType2 = (parameter: type2) => parameter.field2;

    // I would've assumed functionOfType1 would NOT take a type2 object, but since they have the same fields it does.
    expect(functionOfType1(instance2)).toBe(instance2.field1); 
    expect(functionOfType2(instance1)).toBe(instance1.field2);
  });

  test('allows use of types of the same parameters with additional fields', () => {
    interface type1 {
      field1: string,
      field2: string
    }

    interface type2 {
      field1: string,
      field2: string,
      field3: string,
      field4: string
    }

    const instance1: type1 = {field1: 'a', field2: 'b'};
    const instance2: type2 = {field1: 'c', field2: 'd', field3: 'e', field4: 'f'}; 

    const functionOfType1 = (parameter: type1) => parameter.field1;
    const functionOfType2 = (parameter: type2) => parameter.field2;

    // It's possible to use a type2 on a function expecting a type1 because type2 is a supserset of type1. 
    // A type1 cannot be used in place of a type2 because it is missing required fields.
    expect(functionOfType1(instance2)).toBe(instance2.field1); 
  });

  test('allows use of types of the same parameters with additional fields', () => {
    interface type1 {
      field1: string,
      field2: string
    }

    interface type2 {
      field1: string,
      field2: string,
      field3?: string,
      field4?: string
    }

    const instance1: type1 = {field1: 'a', field2: 'b'};
    const instance2: type2 = {field1: 'c', field2: 'd', field3: 'e', field4: 'f'}; 

    const functionOfType1 = (parameter: type1) => parameter.field1;
    const functionOfType2 = (parameter: type2) => parameter.field2;

    // It's possible to use a type2 on a function expecting a type1 because type2 is a supserset of type1. 
    // A type1 can only be used in place of a type2 if the fields type1 is missing are optional.
    expect(functionOfType1(instance2)).toBe(instance2.field1); 
    expect(functionOfType2(instance1)).toBe(instance1.field2);
  });
})