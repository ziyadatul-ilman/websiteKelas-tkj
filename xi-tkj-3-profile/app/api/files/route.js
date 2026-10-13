import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') || '';

  // ❌ SENGATAN RENTAN: Langsung menggabungkan filename tanpa pembatasan folder
  const filePath = path.join('/var/www/uploads', filename);

  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    return new NextResponse(fileData);
  } catch (error) {
    return NextResponse.json({ error: 'File tidak ditemukan' }, { status: 404 });
  }
}