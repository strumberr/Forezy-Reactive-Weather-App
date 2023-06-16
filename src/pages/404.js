import { redirect } from 'next/navigation';

export default function Custom404() {

    function refreshPage() {
        // Perform any necessary operations before the refresh
        redirect('/');
    }
    
    function scheduleRefresh() {
        setTimeout(refreshPage, 0 * 1 * 1000); // Refresh after 40 minutes (40 minutes * 60 seconds * 1000 milliseconds)
    }

      scheduleRefresh();


    return <h1>404 - Page Not Found</h1>
}