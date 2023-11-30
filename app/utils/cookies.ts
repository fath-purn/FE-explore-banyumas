'use server'
 
import { cookies } from 'next/headers'
 
export async function setCookiesToken(token: string) {
  cookies().set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/login',
  })
}

export async function getCookiesToken() {
  return cookies().get('token');
}