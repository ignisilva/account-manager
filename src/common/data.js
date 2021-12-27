const data = require("../../bank.json");

export function getData(url) {
  const datas = data.bankList.reverse();
  const map = new Map();
  datas.forEach((data) => {
    const key = `${data.date}`;
    if (!map.has(key)) {
      map.set(key, []);
    }
    const values = [...map.get(key), data];
    map.set(key, values);
  });

  return map;
}
