import { SavingBox } from "./types";

export class Store {
  private savingBoxes: SavingBox[];

  constructor() {
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

  setSavingBox(title: string, saving_goal: number, saving_now: number) {
    this.savingBoxes.push({ title, saving_goal, saving_now });
  }

  getSavingBoxes() {
    return this.savingBoxes;
  }
}
