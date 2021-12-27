import * as data from "../bank.json";

export class Api {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  protected request(url: string) {
    return data.bankList.reverse(); // 원래 fetch 및 .json() 실행
  }
}

export class MainApi extends Api {
  constructor() {
    super("");
  }

  getData() {
    const datas = this.request("");
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
}
