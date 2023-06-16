import { useRouter } from 'next/router';

export default function Custom404() {

    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };
    
    function scheduleRefresh() {
        setTimeout(handleClick, 0 * 1 * 1000); // Refresh after 40 minutes (40 minutes * 60 seconds * 1000 milliseconds)
    }

      scheduleRefresh();


    return <h1>404 - Page Not Found</h1>
}