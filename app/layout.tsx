import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import InstallPWA from '@/components/InstallPWA'

export const metadata: Metadata = {
  metadataBase: new URL('https://upnextgrowth.com'),
  title: {
    default: 'Up Next Growth - Agence Marketing Digital & Publicité en Ligne',
    template: '%s | Up Next Growth'
  },
  description: 'Générez plus de clients chaque mois avec nos forfaits de publicité Meta Ads, Google Ads et création web. Forfaits dès 497€/mois.',
  keywords: ['marketing digital', 'publicité en ligne', 'Meta Ads', 'Google Ads', 'génération de leads', 'growth marketing', 'agence digitale', 'Facebook Ads', 'Instagram Ads'],
  authors: [{ name: 'Up Next Growth' }],
  creator: 'Up Next Growth',
  publisher: 'Up Next Growth',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://upnextgrowth.com',
    siteName: 'Up Next Growth',
    title: 'Up Next Growth - Agence Marketing Digital & Publicité en Ligne',
    description: 'Générez plus de clients chaque mois avec nos forfaits de publicité Meta Ads, Google Ads et création web.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Up Next Growth - Marketing Digital',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Up Next Growth - Agence Marketing Digital',
    description: 'Générez plus de clients chaque mois avec nos forfaits de publicité en ligne.',
    images: ['/og-image.png'],
    creator: '@upnextgrowth',
  },
  
  // PWA
  manifest: '/manifest.json',
  
  // Icons
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A2540',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Up Next Growth" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="UNG" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0A2540" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
      </head>
      <body className="overflow-x-hidden">
        {children}
        
        {/* PWA Install Prompt */}
        <InstallPWA />
        
        {/* Service Worker Registration */}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('Service Worker enregistré avec succès:', registration.scope);
                  },
                  function(err) {
                    console.log('Service Worker échec:', err);
                  }
                );
              });
            }
          `}
        </Script>
        
        {/* Google Analytics - À configurer avec votre ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {/* Meta Pixel - À configurer avec votre ID */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}
