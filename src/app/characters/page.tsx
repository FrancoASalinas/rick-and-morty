import { redirect } from 'next/navigation';

export default async function GET(request: Request) {
    redirect('/characters/1')
  }