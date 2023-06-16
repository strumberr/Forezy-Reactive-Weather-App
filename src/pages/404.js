import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const handleClick = () => {
      router.push('/');
    };

    function scheduleRefresh() {
      setTimeout(handleClick, 0 * 1 * 1000);
    }

    scheduleRefresh();
  }, [router]);

  return <h1>404 - Page Not Found</h1>;
}