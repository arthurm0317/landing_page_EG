import { NextResponse } from 'next/server';

const API_BASE_URL = 'https://sandbox.api.assinaturas.pagseguro.com';
const TOKEN = process.env.NEXT_PUBLIC_PAGBANK_TOKEN || '81a614e8-9efa-4d14-817a-0300a8a9c2a2c7d189b3439684ce4ffe60b920629f3ba74f-9a98-45b2-ac42-c615e251f54a';

export async function POST(request) {
  try {
    const dados = await request.json();

    // Função para limpar dados recursivamente
    const cleanData = (obj) => {
      if (Array.isArray(obj)) {
        return obj.map(item => cleanData(item)).filter(item => item !== undefined && item !== null && item !== '');
      } else if (obj !== null && typeof obj === 'object') {
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)) {
          if (value !== undefined && value !== null && value !== '') {
            const cleanedValue = cleanData(value);
            if (cleanedValue !== undefined && cleanedValue !== null && cleanedValue !== '') {
              cleaned[key] = cleanedValue;
            }
          }
        }
        return Object.keys(cleaned).length > 0 ? cleaned : undefined;
      }
      return obj === '' ? undefined : obj;
    };

    const cleanedPayload = cleanData(dados);

    const response = await fetch(`${API_BASE_URL}/customers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cleanedPayload),
    });

    let data;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text || 'Erro desconhecido' };
      }
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro na API route:', error);
    console.error('Stack:', error.stack);
    return NextResponse.json(
      { 
        error: {
          message: error.message || 'Erro ao processar requisição',
          details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }
      },
      { status: 500 }
    );
  }
}
