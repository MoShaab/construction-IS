'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
 import {z} from 'zod';
 import { sql } from '@vercel/postgres';
 import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const NewUserSchema = z.object({
  name: z.string(),
  role: z.string(),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password should be at least 6 characters'),
});

export async function NewUser(formData: FormData) {
  const { name, role, email, password } = NewUserSchema.parse({
    name: formData.get('name'),
    role: formData.get('role'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  try {

    
    const hashedPassword = await bcrypt.hash(password, 10);

    await sql`
      INSERT INTO site_users (name, role, email, password)
      VALUES (${name}, ${role}, ${email}, ${hashedPassword})
    `;

  } catch (error) {
    console.error('Sign-up error:', error);
    throw new Error('Failed to sign up the user.');
  }

  revalidatePath('/new-user');
  redirect('/dashboard');
}