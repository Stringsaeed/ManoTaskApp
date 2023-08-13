import {warn, error, info} from '@rnx-kit/console';

class Logger {
  private static instance: Logger;
  private constructor() {}
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public warn(message: string): void {
    warn(message);
  }

  public error(message: string): void {
    error(message);
  }

  public info(message: string): void {
    info(message);
  }
}

export default Logger.getInstance();
