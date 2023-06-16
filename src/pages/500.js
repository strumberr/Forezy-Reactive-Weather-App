import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  function handleClick() {
    router.push('/');
  }

  function scheduleRefresh() {
    setTimeout(handleClick, 0 * 1 * 1000);
  }

  scheduleRefresh();

  return <h1>404 - Page Not Found</h1>;
}