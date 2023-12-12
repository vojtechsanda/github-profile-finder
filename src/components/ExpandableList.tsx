import { List, Typography } from '@mui/material';
import { useState } from 'react';

export default function ExpandableList<T extends JSX.Element>({
  list,
  title,
  initialCount = 3,
}: {
  list: T[];
  title?: string;
  initialCount?: number;
}) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

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
    <>
      {!!title && (
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
      )}
      <List
        sx={{
          marginTop: '0!important',
        }}
      >
        {...list.slice(0, visibleCount)}
        {list.length > initialCount && (
          <Typography
            variant="caption"
            component="p"
            sx={{
              textAlign: 'center',
              marginTop: '0.5rem',
            }}
          >
            {visibleCount < list.length ? (
              <span onClick={showMore}>Show more</span>
            ) : (
              <span onClick={showLess}>Show less</span>
            )}
          </Typography>
        )}
      </List>
    </>
  );
}
