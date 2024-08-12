function first(prefix: string) {
  console.log("first(): factory evaluated");
  // console.log("descriptor(): ", descriptor);
  return target => {
    console.log(`${prefix} - ${target}`);
  }
}


@first('prefixxxx')
class MyClass {}