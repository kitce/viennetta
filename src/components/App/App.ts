class App {
  private message: string;

  constructor (message: string) {
    this.message = message;
  }

  say (): void {
    const { message } = this;
    console.info(message);
  }
}

export default App;
