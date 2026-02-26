# 🚀 Up Next Growth - Landing Page (Next.js)

Site web premium de landing page pour agence de marketing digital et growth marketing, construit avec **Next.js 14**, **TypeScript**, **Tailwind CSS** et **Framer Motion**.

## 🎯 Caractéristiques

✨ **Stack Moderne**
- Next.js 14 avec App Router
- TypeScript pour la sécurité des types
- Tailwind CSS 3 pour les styles
- Framer Motion pour les animations
- Lucide React pour les icônes

🎨 **Design Premium**
- Interface moderne et épurée
- Animations fluides et professionelles
- Responsive design parfait
- Palette de couleurs coordonnée
- Gradients et effets visuels premium

⚡ **Performance**
- Static Site Generation (SSG)
- Image optimization
- Code splitting automatique
- Fast refresh
- Optimisé pour SEO

📱 **Sections Incluses**
1. Header avec navigation
2. Hero section avec CTA
3. Problem section
4. Services section
5. Benefits section
6. Process section
7. Trust section
8. CTA avec formulaire
9. FAQ interactive
10. Footer

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn ou pnpm

## 🚀 Installation rapide

```bash
# Cloner ou naviger vers le projet
cd upnextgrowth

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 📁 Structure du projet

```
upnextgrowth/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Styles globaux
│   └── favicon.ico
├── components/
│   ├── Header.tsx           # Header / Navigation
│   ├── HeroSection.tsx       # Hero section
│   ├── ProblemSection.tsx    # Problèmes du client
│   ├── ServicesSection.tsx   # Services
│   ├── BenefitsSection.tsx   # Bénéfices
│   ├── ProcessSection.tsx    # Processus
│   ├── TrustSection.tsx      # Confiance
│   ├── CTASection.tsx        # CTA & Formulaire
│   ├── FAQSection.tsx        # FAQ
│   └── Footer.tsx            # Footer
├── public/                   # Assets statiques
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## ⚙️ Configuration

### Couleurs (tailwind.config.ts)

```typescript
colors: {
  primary: {     // Bleu #0A2540
    50: '#f0f7ff',
    900: '#0A2540',
    950: '#051c34',
  },
  accent: {      // Orange #FF7A18
    50: '#fff8f0',
    500: '#FF7A18',
    950: '#661800',
  },
  success: {     // Vert #00C2A8
    50: '#f0fdf4',
    500: '#00C2A8',
    950: '#003a2f',
  },
}
```

### Typographie

- **Titres**: Poppins (bold)
- **Texte**: Inter (regular)

## 🎨 Personnalisation

### 1. Modifier les informations de contact

Fichier: `components/CTASection.tsx` & `components/Footer.tsx`

```tsx
// Email
<a href="mailto:votre-email@exemple.com">

// Téléphone
<a href="tel:+33612345678">

// WhatsApp
<a href="https://wa.me/33612345678">
```

### 2. Changer les couleurs

Fichier: `tailwind.config.ts`

```typescript
primary: {      // Primary color
  900: '#0A2540',
},
accent: {       // CTA buttons
  500: '#FF7A18',
},
success: {      // Success elements
  500: '#00C2A8',
}
```

### 3. Mettre à jour le logo

Fichier: `components/Header.tsx`

```tsx
<div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center text-white font-bold">
  UNG  {/* Remplacer par votre logo */}
</div>
```

### 4. Modifier le contenu des sections

Chaque section a ses propres fichiers dans le dossier `components/`. Les données sont généralement en haut du fichier:

```tsx
const services = [
  {
    icon: Smartphone,
    title: 'Votre titre',
    description: 'Votre description',
  },
  // ...
]
```

## 🔌 Intégration Formulaire

### Option 1: FormSubmit (Email)

```tsx
// Dans CTASection.tsx, remplacer le fetch par:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // FormSubmit gère les sousissions automatiquement
  const form = e.currentTarget as HTMLFormElement
  form.action = 'https://formsubmit.co/votre-email@exemple.com'
  form.method = 'POST'
  form.submit()
}
```

### Option 2: Votre propre API

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    setIsSubmitted(true)
  }
}
```

### Option 3: Webhook (Zapier/Make)

```tsx
const response = await fetch('https://hooks.zapier.com/hooks/catch/...', {
  method: 'POST',
  body: JSON.stringify(formData),
})
```

## 🚀 Build & Déploiement

### Build local
```bash
npm run build
npm start
```

### Déploiement sur Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Déploiement sur Netlify

1. Connecter le repo GitHub
2. Branch: `main`
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📊 Analytics & Tracking

### Google Analytics

Ajouter dans `app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout() {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `,
          }}
        />
      </head>
      <body>{/* ... */}</body>
    </html>
  )
}
```

### Facebook Pixel

Ajouter dans `app/layout.tsx`:

```tsx
<Script
  id="fb-pixel"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s){...}window.fbq('init','PIXEL_ID');
      window.fbq('track','PageView');
    `,
  }}
/>
```

## 🎯 SEO

### Meta Tags (app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: 'Up Next Growth - Agence Marketing Digital',
  description: 'Attirez plus de clients...',
  openGraph: {
    title: 'Up Next Growth',
    description: 'Attirez plus de clients...',
    type: 'website',
  },
  // ... plus de meta tags
}
```

### Sitemap & Robots

Créer `app/robots.ts`:

```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  }
}
```

## 📝 Commandes

```bash
# Développement
npm run dev          # Démarrer le serveur dev

# Production
npm run build        # Builder le projet
npm start            # Démarrer le serveur prod

# Qualité du code
npm run lint         # Vérifier la syntaxe
```

## 🐛 Debugging

### Mode développement activé
- React DevTools
- NextJS DevTools
- Console (F12)

### Logs importants

```tsx
// Dans les composants
console.log('Debug:', data)

// Dans les APIs
console.error('Error:', error)
```

## 🎓 Apprentissage

### Documentation utile

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)

## ⚡ Optimisations

### Images

```tsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={600}
/>
```

### Code Splitting

Déjà automatique avec Next.js! Les pages sont chargées à la demande.

### Caching

```tsx
// Dans app/layout.tsx
export const revalidate = 3600 // 1 heure
```

## 💡 Bonnes pratiques

✅ **À faire**
- Utiliser les composants `<Image>` pour les images
- Ajouter des `alt` descriptions
- Utiliser TypeScript
- Optimiser les animations (ne pas en abuser)
- Tester sur mobile

❌ **À éviter**
- Utiliser `<img>` au lieu de `<Image>`
- Négliger l'accessibilité
- Ajouter trop d'animations
- Charger trop de polices
- Ignorer les warnings Next.js

## 📞 Support

Pour toute question ou problème:
- [GitHub Issues](https://github.com/yourusername/upnextgrowth/issues)
- contact@upnextgrowth.com
- WhatsApp: +33 6 12 34 56 78

## 📄 Licence

MIT - Libre d'utilisation

## 🎉 Checklist de lancement

- [ ] Modifier tous les textes et descriptions
- [ ] Ajouter vos informations de contact
- [ ] Configuration Google Analytics
- [ ] Configuration Facebook Pixel
- [ ] Tester sur mobile, tablette, desktop
- [ ] Optimiser les images
- [ ] Ajouter favicon
- [ ] Configurer domaine personnalisé
- [ ] Test formulaire contacte
- [ ] Vérifier tous les liens
- [ ] Check SEO (Google Lighthouse)
- [ ] Déployer sur Vercel/Netlify

---

**Made with ❤️ using Next.js, TypeScript & Tailwind CSS**

Bienvenue dans l'ère moderne du web ! 🚀
