// the route is /auth/login/api
import { NextRequest, NextResponse } from 'next/server';
import { loginFormSchema } from '@/app/lib/validations/LoginValidation';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await request.json());
    console.log('email: ' + email, 'password: ' + password);

    return new NextResponse('It works');
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse(error.message, { status: 400 });
  }
}