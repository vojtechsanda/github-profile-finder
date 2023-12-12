import { getGeneralFadeIn } from '@/utils/animationUtils';
import { Container, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div key={`loading`} {...getGeneralFadeIn()}>
      <Container maxWidth="xs">
        <LinearProgress />
      </Container>
    </motion.div>
  );
}
