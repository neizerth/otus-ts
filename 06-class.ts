class User {
  // private
  // protected
  // public

  private readonly age = 45;

  constructor(name: string) {
    this.name = name;
  }

  protected getAge() {
    return this.age;
  }

  public getName() {
    return this.name;
  }
}

const ivan = new User('Oleg');
