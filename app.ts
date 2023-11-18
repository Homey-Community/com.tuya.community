import Homey from 'homey';

class TuyaCommunityApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('TuyaCommunityApp has been initialized');
  }

}

module.exports = TuyaCommunityApp;
