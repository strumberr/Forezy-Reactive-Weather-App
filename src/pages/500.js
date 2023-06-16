export default function Custom500() {

    function refreshPage() {
        // Perform any necessary operations before the refresh
        redirect('/');
    }
    
    function scheduleRefresh() {
        setTimeout(refreshPage, 0 * 1 * 1000); // Refresh after 40 minutes (40 minutes * 60 seconds * 1000 milliseconds)
    }

      scheduleRefresh();

    return <h1>500 - Server-side error occurred</h1>
}