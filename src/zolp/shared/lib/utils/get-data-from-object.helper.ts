export function getDataFromObject(dataSource: any, fields: Array<string>) {
  let data = dataSource;
  for (let index = 0; index < fields.length; index++) {
    data = data[fields[index]];
  }
  return data;
}
