import Navbar from '@/components/Navbar/Navbar';
import './globals.css';

export const metadata = {
  title: 'Infinite Solutions',
  description: 'We are a creative people with big dreams, new technology all for your projects.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
