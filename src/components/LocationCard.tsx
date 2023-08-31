'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

function LocationCard({location} : {
    location: {

        name: string;
        type: string;
        dimension: string;
        residents: { image: string }[];
        id: string
    }
  }) {
    const router = useRouter()
    return ( 
        <div
                onClick={() => router.push(`/locations/id/${location.id}`)}
                className={` border border-white rounded-xl  relative overflow-hidden w-52 h-60 bg-white cursor-pointer ${
                  location.residents.length >= 4
                    ? 'grid grid-rows-2 grid-cols-2'
                    : location.residents.length < 4 &&
                      location.residents.length >= 2
                    ? 'grid grid-cols-2 grid-rows-1'
                    : ''
                }`}
              >
                <div className="backdrop-blur absolute top-full -translate-y-full w-full left-0 z-10 p-2 justify-center flex items-center">
                  <span>{location.name}</span>
                </div>
                {location.residents.length >= 4 ? (
                  <>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[0].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[1].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[2].image}
                        style={{ objectFit: 'fill' }}
                      />
                    </div>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[3].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </>
                ) : location.residents.length < 4 &&
                  location.residents.length >= 2 ? (
                  <>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[0].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[1].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </>
                ) : location.residents.length > 0 ? (
                  <Image
                    fill
                    alt="character image"
                    src={location.residents[0].image}
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <span className="p-3">No residents known</span>
                )}
              </div>
            );
          }

export default LocationCard;