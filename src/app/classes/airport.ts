export class Airport {
  constructor() {
    this.id = 0;
    this.name = '';
    this.state = State.Active;
    this.deletedFlag = false;
  }

  id: number;
  name: string;
  state: State;
  deletedFlag: boolean;
}
