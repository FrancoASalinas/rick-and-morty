import Link from "next/link";

function NotFound() {
    return ( 
        <>
        <h2>Oh no!</h2>
        <p>Morty didn't find the character you were looking for, bad Morty!</p>
        <Link href='/'>Go to Homepage</Link>
        </>
     );
}

export default NotFound;