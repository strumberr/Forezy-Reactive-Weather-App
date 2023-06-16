import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  useEffect(() => {
    const router = useRouter();

    const handleClick = () => {
      router.push('/');
    };

    function scheduleRefresh() {
      setTimeout(handleClick, 0 * 1 * 1000);
    }

    scheduleRefresh();
  }, []);

  return <h1>500 - Server error</h1>;
}