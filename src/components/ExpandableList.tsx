import { Box, List, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ExpandableList<T extends JSX.Element>({
  list,
  title,
  initialCount = 3,
  resetTrigger,
  emptyMessage,
}: {
  list: T[];
  title?: string;
  initialCount?: number;
  resetTrigger?: unknown;
  emptyMessage?: string;
}) {
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
        {list.length === 0 && emptyMessage && <Typography>{emptyMessage}</Typography>}
        {...list.slice(0, visibleCount)}
        {list.length > initialCount && (
          <Typography
            variant="caption"
            component="p"
            sx={{
              cursor: 'pointer',
              width: 'max-content',
              marginX: 'auto',
            }}
            tabIndex={0}
          >
            {visibleCount < list.length ? (
              <span onClick={showMore}>Show more</span>
            ) : (
              <span onClick={showLess}>Show less</span>
            )}
          </Typography>
        )}
      </List>
    </Box>
  );
}
