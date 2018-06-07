export class SettingsService {
  private alternativeBackground: boolean = false;

  storeSettings(state: boolean) {
    this.alternativeBackground = state;
  }

  getSettings() {
    return this.alternativeBackground;
  }
}
