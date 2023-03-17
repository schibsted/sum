import { NextResponse, type NextRequest } from 'next/server';

export const GET = async (_request: NextRequest) =>
  NextResponse.json({ status: 'ok' });

export const revalidate = 0;
