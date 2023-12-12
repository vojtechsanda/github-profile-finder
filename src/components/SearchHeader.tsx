import { Box, Button, Container, Stack, TextField } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { useForm } from 'react-hook-form';
import type { FieldErrors, Resolver, SubmitHandler } from 'react-hook-form';
import { AppAvatar } from '.';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getGeneralFadeIn } from '@/utils/animationUtils';

interface FormData {
  githubAccount: string;
}

const formResolver: Resolver<FormData> = (values) => {
  const errors: FieldErrors<FormData> = {};

  const isFilled = values?.githubAccount?.trim()?.length > 0;
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

interface SearchHeaderProps {
  sx?: SxProps<Theme> | undefined;
}

export default function SearchHeader({ sx }: SearchHeaderProps) {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: formResolver,
  });

  const navigate = useNavigate();
  const { accountId } = useParams();

  useEffect(() => {
    setValue('githubAccount', accountId ?? '');
  }, [accountId, setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    navigate(`/account/${encodeURIComponent(data.githubAccount)}`);
  };

  const additionalSx: SxProps<Theme> = accountId
    ? {
        marginBottom: '2rem',
      }
    : {
        marginBottom: '1rem',
        marginTop: '-4rem',
      };

  return (
    <motion.div key={`search`} {...getGeneralFadeIn()}>
      <Container maxWidth="xs" sx={{ ...additionalSx, ...sx }} disableGutters key={accountId}>
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
    </motion.div>
  );
}
