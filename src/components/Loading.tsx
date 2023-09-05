import Image from 'next/image';
import portal from '@/../../public/portal.gif'

function Loading() {
    return ( 
        <div className='flex flex-col w-full min-h-screen justify-center items-center'>
            <Image src={portal} alt="loading" width={100} height={100} quality={50} priority />
        </div>
     );
}

export default Loading;