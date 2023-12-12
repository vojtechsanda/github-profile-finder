import { Box, List, Typography } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export interface ExpandableListProps<T extends JSX.Element> {
  list: T[];
  title?: string;
  initialCount?: number;
  resetTrigger?: unknown;
  emptyMessage?: string;
}

export default function ExpandableList<T extends JSX.Element>({
  list,
  title,
  initialCount = 3,
  resetTrigger,
  emptyMessage,
}: ExpandableListProps<T>) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [initialCount, resetTrigger]);

  const showMore = () => {
    setVisibleCount((currentCount) => {
      const newCount = currentCount + 3;
      return newCount <= list.length ? newCount : list.length;
    });
  };
  const showLess = () => {
    setVisibleCount(initialCount);
  };

  return (
    <Box>
      {!!title && (
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
      )}
      <List
        sx={{
          gap: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AnimatePresence>
          {list.length === 0 && emptyMessage && <Typography>{emptyMessage}</Typography>}
          {...list.slice(0, visibleCount)}
          {list.length > initialCount && (
            <Typography
              variant="caption"
              component="p"
              sx={{
                width: 'max-content',
                marginX: 'auto',
              }}
              tabIndex={0}
            >
              <Box
                onClick={visibleCount < list.length ? showMore : showLess}
                component="span"
                sx={{
                  cursor: 'pointer',
                }}
              >
                {visibleCount < list.length ? 'Show more' : 'Show less'}
              </Box>
            </Typography>
          )}
        </AnimatePresence>
      </List>
    </Box>
  );
}
