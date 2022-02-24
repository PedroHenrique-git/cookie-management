export default abstract class Component {
  protected app: HTMLElement = document.querySelector('#app') || this.createAppContainer();

  private createAppContainer() {
    const app = document.createElement('app');
    app.setAttribute('id', 'app');
    document.body.appendChild(app);
    return app;
  }

  protected abstract selectors(): void;
  protected abstract events(): void;
  protected abstract render(): void;
  protected abstract createStructure(): string;
}
