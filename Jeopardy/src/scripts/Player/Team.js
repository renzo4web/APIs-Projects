export class Team {
  constructor(num) {
    this.name = `Team ${num}`;
    this.score = 0;
    this.id = num;
    this.index = num - 1;
    this.$element;
  }

  addPoint() {
    this.score++;
  }
  decreasePoint() {
    this.score--;
  }
  get getScore() {
    return this.score;
  }
  get getName() {
    return this.name;
  }

  get getIndex() {
    return this.index;
  }

  get getId() {
    return this.id;
  }
}
