import type { SxProps, Theme } from '@mui/material';

export function getLineLimitationSx(linesNum: number): SxProps<Theme> {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: linesNum,
    WebkitBoxOrient: 'vertical',
  };
}
