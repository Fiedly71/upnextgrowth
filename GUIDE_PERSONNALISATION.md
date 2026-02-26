# 🎨 Guide de Personnalisation - Up Next Growth

Ce guide détaillé vous aide à personnaliser le site selon vos besoins.

## 📝 1. Changer le contenu textuel

### Hero Section
**Fichier**: `components/HeroSection.tsx` (lignes 1-80)

```tsx
// Titre principal
"Attirez plus de clients ${' '}
<span className="...">chaque mois</span>"

// Sous-titre
"Nous aidons les entreprises à générer des leads..."

// Boutons CTA
"Audit gratuit de votre business"
"Discutons de votre projet"
```

### Problem Section
**Fichier**: `components/ProblemSection.tsx`

Modifier l'array `problems`:
```tsx
const problems = [
  {
    icon: Target,
    title: 'Votre problème 1',
    color: 'text-red-500',
  },
  // ...
]
```

### Services
**Fichier**: `components/ServicesSection.tsx`

Modifier l'array `services`:
```tsx
const services = [
  {
    icon: Smartphone,
    title: 'Votre service',
    description: 'Description du service',
  },
  // ...
]
```

**Important**: Vous pouvez ajouter des icônes de `lucide-react`:
- `<Globe>`
- `<Zap>`
- `<TrendingUp>`
- `<Users>`
- etc.

### Benefits
**Fichier**: `components/BenefitsSection.tsx`

Modifier l'array `benefits`.

### Process
**Fichier**: `components/ProcessSection.tsx`

Modifier l'array `steps`:
```tsx
const steps = [
  {
    number: '1️⃣',
    title: 'Votre étape 1',
    description: 'Description',
    icon: '📊',
  },
  // ...
]
```

### FAQ
**Fichier**: `components/FAQSection.tsx`

Modifier l'array `faqs`:
```tsx
const faqs = [
  {
    question: 'Votre question ?',
    answer: 'Votre réponse détaillée',
  },
  // ...
]
```

## 🎨 2. Couleurs et Design

### Modifier la palette de couleurs
**Fichier**: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    900: '#0A2540',  // Changez cette valeur
    // ...
  },
  accent: {
    500: '#FF7A18',  // Changez cette valeur
    // ...
  },
  success: {
    500: '#00C2A8',  // Changez cette valeur
    // ...
  },
}
```

### Gradient du Hero
**Fichier**: `tailwind.config.ts` (backgroundImage)

```typescript
'gradient-hero': 'linear-gradient(135deg, #0A2540 0%, #0d3659 100%)',
```

### Ombres customisées
**Fichier**: `tailwind.config.ts` (boxShadow)

```typescript
'sm-premium': '0 2px 8px rgba(10, 37, 64, 0.08)',
'md-premium': '0 4px 16px rgba(10, 37, 64, 0.12)',
// ...
```

## 📱 3. Navigation et Links

### Liens dans le Header
**Fichier**: `components/Header.tsx` (lignes 10-15)

```tsx
const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Processus', href: '#process' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]
```

**Important**: Les `href` doivent correspondre aux `id` des sections:
- `#services` → `<section id="services">`
- `#process` → `<section id="process">`
- `#faq` → `<section id="faq">`
- `#contact` → `<section id="contact">`

## 📱 4. Formulaire de Contact

### Gérer les soumissions
**Fichier**: `components/CTASection.tsx`

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsLoading(true)

  // Option 1: Envoyer à une API
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  // Option 2: Utiliser FormSubmit.co
  // form.action = 'https://formsubmit.co/email@example.com'
  // form.method = 'POST'
  // form.submit()

  setIsSubmitted(true)
  setIsLoading(false)
}
```

### Ajouter des champs au formulaire

Dans `CTASection.tsx`, ajoutez dans le state:
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  nouveauChamp: '', // Ajouter ici
})
```

Puis ajoutez un input:
```tsx
<input
  type="text"
  name="nouveauChamp"
  placeholder="Votre nouveau champ"
  value={formData.nouveauChamp}
  onChange={handleChange}
/>
```

## 🔗 5. Informations de Contact

### Email et téléphone
**Fichiers**:
- `components/CTASection.tsx` (ligne ~240 pour les liens)
- `components/Footer.tsx` (ligne ~85 pour les infos)

```tsx
// Email
<a href="mailto:votre.email@domain.com">votre.email@domain.com</a>

// Téléphone
<a href="tel:+33612345678">+33 6 12 34 56 78</a>

// WhatsApp (enlever les espaces et +)
<a href="https://wa.me/33612345678">Écrire sur WhatsApp</a>
```

## 🎬 Animations

### Modifier les animations
**Fichier**: `tailwind.config.ts` (keyframes)

```typescript
keyframes: {
  fadeInUp: {
    '0%': { opacity: '0', transform: 'translateY(30px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  // Ajouter vos propriétés personalissées
}
```

### Utiliser les animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  animate={{ y: [0, 10, 0] }}  // Animation loop
>
  Contenu
</motion.div>
```

### Duration (durée)
- `duration: 0.3` → 300ms
- `duration: 0.6` → 600ms
- `duration: 0.8` → 800ms
- `duration: 1` → 1 seconde

### Easing (courbe d'animation)
- `ease: 'easeOut'`
- `ease: 'easeInOut'`
- `ease: 'easeIn'`
- `ease: 'circInOut'`

## 🖼️ Images et Médias

### Ajouter une image dans une section

```tsx
import Image from 'next/image'

<Image
  src="/my-image.jpg"
  alt="Description de l'image"
  width={1200}
  height={600}
  className="rounded-2xl"
/>
```

**Important**: Mettre les images dans le dossier `public/`.

### Icônes supplémentaires
Voir la liste complète sur [lucide.dev](https://lucide.dev):

```tsx
import { 
  Heart, 
  Star, 
  Eye, 
  Clock, 
  Check 
} from 'lucide-react'

<Heart className="w-6 h-6 text-red-500" />
<Star className="w-6 h-6 text-yellow-400" />
```

## 🔐 Informations sensibles

### Variables d'environnement
**Fichier**: `.env.local` (créer le fichier)

```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_XXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXX
API_URL=https://api.example.com
API_SECRET=super_secret_key
```

Utiliser dans le code:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const secret = process.env.API_SECRET // Serveur seulement
```

## 🎯 Sections Personnalisables

Chaque section a un ID pour les liens d'ancrage:

```html
<section id="services">     <!-- Lier avec #services -->
<section id="process">      <!-- Lier avec #process -->
<section id="faq">          <!-- Lier avec #faq -->
<section id="contact">      <!-- Lier avec #contact -->
```

## 📊 Stats Section

**Fichier**: `components/TrustSection.tsx` (ligne ~130)

Modifier les statistiques:
```tsx
{[
  { number: '120+', label: 'Clients satisfaits' },
  { number: '300%', label: 'ROI moyen' },
  { number: '10K+', label: 'Leads générés' },
  { number: '4.9/5', label: 'Note client' },
]}
```

## 🔔 Messages de Confirmation

**Fichier**: `components/CTASection.tsx`

Messages personnalisés:
```tsx
{isSubmitted && (
  <motion.div className="...">
    ✅ Merci ! Message personnalisé ici
  </motion.div>
)}
```

## 📱 Responsive Design

Tailwind CSS classes pour responsive:
- `md:` - Tablet (≥768px)
- `lg:` - Desktop (≥1024px)
- `xl:` - Large (≥1280px)

Exemple:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Texte adaptatif
</div>
```

## 🚀 Déploiement

### Variables d'environnement en prod

**Vercel**:
1. Aller à Settings → Environment Variables
2. Ajouter vos variables

**Netlify**:
1. Build & Deploy → Environment
2. Ajouter vos variables

## 💡 Astuces pratiques

1. **Copier une section**: Sauvegarder le fichier `.tsx` et dupliquer-le
2. **Changer les icônes**: Aller sur [lucide.dev](https://lucide.dev) et chercher
3. **Tester sur mobile**: Appuyer F12 → Toggle Device Toolbar
4. **Réset des styles**: Effacer `.next` et relancer `npm run dev`
5. **Rechercher du texte**: Ctrl+Shift+F dans VS Code

## 🎓 Ressources

- Documentationimages Next.js: https://nextjs.org/docs
- Tailwind utilities: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev

---

**Besoin d'aide ?** Contactez-nous ou consultez la documentation officielle !
