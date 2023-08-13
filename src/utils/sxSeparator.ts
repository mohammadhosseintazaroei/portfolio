import { type SxProps, type Theme } from '@mui/material';

export const sxSeparator = (sx: SxProps<Theme> | boolean) => {
  if (!sx) return;
  const separatedStyles = { ...(Array.isArray(sx) ? sx : [sx]) };
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Object.values(separatedStyles)[0];
};
