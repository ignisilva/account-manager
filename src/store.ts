import { SavingBox } from "./types";
import { Account } from "./types/store.interface";

export class Store {
  private account: Account;
  private savingBoxes: SavingBox[];

  constructor() {
    this.account = {
      profile:
        "https://lh3.googleusercontent.com/proxy/vNcXDb1es8vnIdHjdWZlgdxoodXjlu06kPc6yWjiE9wbPSJHeERV5CXaHcOv6OOtST1i8vTXzIScHHwgd-Mf0QXcX3LlsSKL_1JVq0DVcQ8DVA",
      title: "생활비",
      accountNum: "355-673877-78773",
      balance: 1240000,
    };

    this.savingBoxes = [
      {
        title: "여행가자",
        saving_goal: 1200000,
        saving_now: 842200,
      },
      {
        title: "냉장고사자",
        saving_goal: 800000,
        saving_now: 142200,
      },
    ];
  }

  getAccount() {
    return this.account;
  }

  setSavingBox(title: string, saving_goal: number, saving_now: number) {
    this.savingBoxes.push({ title, saving_goal, saving_now });
  }

  getSavingBoxes() {
    return this.savingBoxes;
  }
}
