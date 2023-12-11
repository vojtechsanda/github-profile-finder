import { Box, Button, Container, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import type { FieldErrors, Resolver, SubmitHandler } from 'react-hook-form';
import { AppAvatar } from '.';

interface FormData {
  githubAccount: string;
}

const formResolver: Resolver<FormData> = (values) => {
  const errors: FieldErrors<FormData> = {};

  const isFilled = values?.githubAccount?.length > 0;
  if (!isFilled) {
    errors.githubAccount = {
      type: 'required',
      message: 'You need to fill GitHub account',
    };
  }

  return {
    values,
    errors,
  };
};

export default function SearchHeader() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: formResolver,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  {
    /* TODO: Remove the negative margin on other than the entry view */
  }
  return (
    <Container maxWidth="xs" sx={{ marginTop: '-4rem' }}>
      <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <Stack alignItems="center" gap={2}>
          <AppAvatar />
          <Box sx={{ position: 'relative', width: '100%' }}>
            <TextField
              label="GitHub account"
              sx={{ bgcolor: 'background.default' }}
              fullWidth
              error={!!errors.githubAccount}
              helperText={errors.githubAccount?.message}
              {...register('githubAccount')}
              InputProps={{
                endAdornment: (
                  <Button variant="contained" type="submit">
                    Access
                  </Button>
                ),
              }}
            />
          </Box>
        </Stack>
      </form>
    </Container>
  );
}
