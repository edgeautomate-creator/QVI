type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: unknown;
  context?: string;
}

class Logger {
  private isDevelopment = import.meta.env.DEV;
  private logHistory: LogEntry[] = [];
  private maxHistorySize = 100;

  private formatMessage(level: LogLevel, message: string, context?: string): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? `[${context}]` : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${contextStr} ${message}`;
  }

  private addToHistory(entry: LogEntry): void {
    this.logHistory.push(entry);
    if (this.logHistory.length > this.maxHistorySize) {
      this.logHistory.shift();
    }
  }

  debug(message: string, data?: unknown, context?: string): void {
    if (!this.isDevelopment) return;

    const entry: LogEntry = {
      level: 'debug',
      message,
      timestamp: new Date().toISOString(),
      data,
      context
    };

    this.addToHistory(entry);
    console.log(this.formatMessage('debug', message, context), data || '');
  }

  info(message: string, data?: unknown, context?: string): void {
    const entry: LogEntry = {
      level: 'info',
      message,
      timestamp: new Date().toISOString(),
      data,
      context
    };

    this.addToHistory(entry);
    console.info(this.formatMessage('info', message, context), data || '');
  }

  warn(message: string, data?: unknown, context?: string): void {
    const entry: LogEntry = {
      level: 'warn',
      message,
      timestamp: new Date().toISOString(),
      data,
      context
    };

    this.addToHistory(entry);
    console.warn(this.formatMessage('warn', message, context), data || '');
  }

  error(message: string, error?: unknown, context?: string): void {
    const entry: LogEntry = {
      level: 'error',
      message,
      timestamp: new Date().toISOString(),
      data: error,
      context
    };

    this.addToHistory(entry);
    console.error(this.formatMessage('error', message, context), error || '');
  }

  getHistory(): LogEntry[] {
    return [...this.logHistory];
  }

  clearHistory(): void {
    this.logHistory = [];
  }
}

export const logger = new Logger();
