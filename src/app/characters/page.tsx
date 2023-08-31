import { gql } from '@apollo/client';
import { getClient } from '@/lib/client';
import Image from 'next/image';
import Pages from '@/components/Pages';
import { redirect } from 'next/navigation';

export default async function GET(request: Request) {
    redirect('/characters/1')
  }