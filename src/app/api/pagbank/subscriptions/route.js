import { NextResponse } from 'next/server';

const API_BASE_URL = 'https://sandbox.api.assinaturas.pagseguro.com';
const TOKEN = process.env.NEXT_PUBLIC_PAGBANK_TOKEN || '81a614e8-9efa-4d14-817a-0300a8a9c2a2c7d189b3439684ce4ffe60b920629f3ba74f-9a98-45b2-ac42-c615e251f54a';

export async function POST(request) {
  try {
    const dados = await request.json();

    const response = await fetch(`${API_BASE_URL}/subscriptions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Erro ao processar requisição' },
      { status: 500 }
    );
  }
}
