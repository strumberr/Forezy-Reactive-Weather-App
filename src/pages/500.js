import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Custom500() {

    useEffect(() => {
        const router = useRouter();

        const handleClick = () => {
            router.push('/');
        };
        
        function scheduleRefresh() {
            setTimeout(handleClick, 0 * 1 * 1000); // Refresh after 40 minutes (40 minutes * 60 seconds * 1000 milliseconds)
        }

        scheduleRefresh();
    }, []);

    return <h1>500 - Server-side error occurred</h1>
}