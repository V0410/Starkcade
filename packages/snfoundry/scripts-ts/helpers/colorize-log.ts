const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  brightRed: "\x1b[91m",
  brightGreen: "\x1b[92m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",
};

const colorize = (color: string, message: string): string => {
  return `${color}${message}${colors.reset}`;
};

export const red = (message: string): string => colorize(colors.red, message);
export const green = (message: string): string =>
  colorize(colors.green, message);
export const yellow = (message: string): string =>
  colorize(colors.yellow, message);
export const blue = (message: string): string => colorize(colors.blue, message);
export const magenta = (message: string): string => colorize(colors.magenta, message);
 export const cyan = (message: string): string => colorize(colors.cyan, message);
 export const white = (message: string): string => colorize(colors.white, message);
 export const brightRed = (message: string): string => colorize(colors.brightRed, message);
 export const brightGreen = (message: string): string => colorize(colors.brightGreen, message);
 export const brightBlue = (message: string): string => colorize(colors.brightBlue, message);
 export const brightMagenta = (message: string): string => colorize(colors.brightMagenta, message);
 export const brightCyan = (message: string): string => colorize(colors.brightCyan, message);
 export const brightWhite = (message: string): string => colorize(colors.brightWhite, message);
 export const reset = (): void => {
  console.log(colors.reset);
};
