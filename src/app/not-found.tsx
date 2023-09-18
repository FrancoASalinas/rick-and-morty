import Link from 'next/link';
import jerry from '../../public/jerry.png';
import Image from 'next/image';

function NotFound() {
  return (
    <div className="grid-cols-2 sm:grid pt-3 h-screen w-full">
      <div className="w-full h-full relative sm:block">
        <Image
          src={jerry}
          alt="Jerry Smith"
          fill
          className="object-cover object-right-top"
          quality={100}
        />
      </div>
      <div className="p-6 space-y-4">
        <h2 className="text-4xl">Sorry</h2>
        <p className="text-2xl">
          We couldn&apos;t fin the page you were looking for
        </p>
        <Link href="/" className="hover:underline text-xl">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
