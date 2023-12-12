import { Error } from '@/components';
import { AxiosError } from 'axios';
import { useAsyncError } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getGeneralFadeIn } from '@/utils/animationUtils';

export default function AccountError() {
  const error = useAsyncError();

  return (
    <motion.div key={`error-${new Date().getTime()}`} {...getGeneralFadeIn()}>
      {error instanceof AxiosError && error.response?.status === 404 ? (
        <Error message="We are lost, couldn't find this one!" />
      ) : (
        <Error />
      )}
    </motion.div>
  );
}
