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
    return this.request("");
  }
}
