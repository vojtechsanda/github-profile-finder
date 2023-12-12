import { Error } from '@/components';
import { AxiosError } from 'axios';
import { useAsyncError } from 'react-router-dom';

export default function AccountError() {
  const error = useAsyncError();

  if (error instanceof AxiosError && error.response?.status === 404) {
    return <Error message="We are lost, couldn't find this one!" />;
  }
  return <Error />;
}
