import './globals.css'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Task 01 from Tekvek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex h-screen'>
            <div className='w-[7%] h-full'>
              <Menu/>
            </div>
            <div className='w-[93%]'>
              {children}
            </div>
        </main>
      </body>
    </html>
  )
}
