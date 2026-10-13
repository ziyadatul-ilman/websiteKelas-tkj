import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || '';

  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  // ❌ SENGATAN RENTAN: Menggabungkan string input langsung ke query SQL
  const query = `SELECT * FROM siswa WHERE nama = '${name}'`;
  
  try {
    const [rows] = await connection.query(query);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}