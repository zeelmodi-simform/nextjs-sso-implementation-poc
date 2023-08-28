import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: 'Home API route' }, { status: 200 });
}
