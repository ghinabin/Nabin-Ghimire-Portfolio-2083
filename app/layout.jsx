import { Fraunces, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import '@/assets/css/tokens.css'
import '@/assets/css/base.css'
import '@/assets/css/layout/container.css'
import '@/assets/css/components/skip-link.css'
import '@/assets/css/components/nav.css'
import '@/assets/css/components/footer.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  style: ['normal', 'italic'],
  weight: 'variable',
  axes: ['opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: 'Nabin Ghimire — Senior Product Designer',
  description:
    'Senior Product Designer with 9+ years building enterprise SaaS and US healthcare products. Currently at Viveka Health.',
}

const ANTI_FOUC = `(function(){try{var t=localStorage.getItem('ng-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
