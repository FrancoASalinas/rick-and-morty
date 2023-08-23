import Link from "next/link";

function NotFound() {
    return ( 
        <>
        <h2>Sorry</h2>
        <p>We couldn't fin the page you were looking for</p>
        <Link href='/'>Back to Homepage</Link>
        </>
     );
}

export default NotFound;