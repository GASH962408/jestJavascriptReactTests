function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }
  
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow(); // Verifica que la función lance un error
    expect(() => compileAndroidCode()).toThrow(Error); // Verifica el tipo de error
  
    // También puedes verificar el mensaje del error
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
  