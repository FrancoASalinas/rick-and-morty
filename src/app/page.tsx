'use client';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import image1 from '../../public/image1.webp';
import image2 from '../../public/image2.webp';
import image3 from '../../public/image3.webp';
import Link from 'next/link';

export default function Home() {
  const [focusedItem, setFocusedItem] = useState<number>(0);

  const focusItem = (id: number) => setFocusedItem(id);

  function switchStyle() {
    let style = '';

    switch (focusedItem) {
      case 1:
        style = 'grid-rows-[2fr,_1fr,_1fr]';
        break;
      case 2:
        style = 'grid-rows-[1fr,_2fr,_1fr]';
        break;
      case 3:
        style = 'grid-rows-[1fr,_1fr,_2fr]';
        break;
      case 0:
        style = 'grid-rows-[1fr,_1fr,_1fr]';
        break;
    }

    return style;
  }

  return (
    <>
      <div
        className={`w-full h-screen grid transition-all ${switchStyle()}`}
        onMouseOut={() => setFocusedItem(0)}
      >
        <MenuItem
          src={image1}
          focusedItem={focusedItem}
          onMouseEnter={focusItem}
          id={1}
          position="center"
          label="Characters"
        />
        <MenuItem
        src={image2}
          focusedItem={focusedItem}
          onMouseEnter={focusItem}
          id={2}
          position="top"
          label="Locations"
        />
        <MenuItem
        src={image3}
          focusedItem={focusedItem}
          onMouseEnter={focusItem}
          id={3}
          position="center"
          label="Episodes"
        />
      </div>
    </>
  );
}

function MenuItem({
  onMouseEnter,
  id,
  src,
  label,
  position,
  focusedItem,
}: {
  onMouseEnter: (x: number) => void;
  id: number;
  src: StaticImageData;
  label: string;
  position: 'top' | 'bottom' | 'center';
  focusedItem: number;
}) {
  const router = useRouter();

  return (
    <Link href={`${label.toLowerCase()}/1`}>
    <div
      className={`w-full h-full text-2xl cursor-pointer relative overflow-hidden bg-black`}
      onMouseEnter={() => onMouseEnter(id)}
    >
      <Image
        src={src}
        alt="background image"
        fill
        placeholder='blur'
        style={{
          opacity: focusedItem === id ? '33%' : '100%',
          objectFit: 'cover',
          objectPosition: position,
          filter: focusedItem === id ? 'blur(2px)' : 'initial',
        }}
      />
      <span
        className={`absolute w-full h-full z-10 before:content-[attr(id)] before:absolute before:font-r&m before:text-lb before:transition-all before:text-5xl shadow before:top-1/2 before:left-1/2 ${
          focusedItem === id
            ? 'before:-translate-x-1/2'
            : 'before:translate-x-[22rem]'
        }`}
        id={label}
      ></span>
    </div>
    </Link>
  );
}
