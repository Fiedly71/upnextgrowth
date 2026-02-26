# 🚀 Système d'Automatisation des Ventes - Up Next Growth

## 📋 Vue d'ensemble

Ce système automatisé permet à vos clients de sélectionner un forfait, le configurer selon leurs besoins, et procéder au paiement en ligne de manière fluide.

## 🎯 Fonctionnalités implémentées

### 1. **Page Catalogue de Services** (`/services`)
- Affichage de 3 forfaits : ESSENTIAL, GROWTH, ELITE
- Filtres par plateforme (Meta Ads, Google Ads, Création Web)
- Cartes détaillées avec features, prix, et objectifs
- Badge "BEST-SELLER" sur le forfait Growth
- CTA direct vers le configurateur

### 2. **Configurateur Multi-Étapes** (`/configurateur`)
- **Étape 1** : Choix de la durée (Mensuel, Trimestriel -15%, Annuel -25%)
- **Étape 2** : Sélection du budget publicitaire (500€ - 10 000€)
- **Étape 3** : Options additionnelles (contenu, landing pages, TikTok Ads)
- **Étape 4** : Récapitulatif avec prix total mis à jour en temps réel
- Barre de progression visuelle
- Prix calculé automatiquement selon les choix

### 3. **Page Checkout** (`/checkout`)
- Formulaire d'informations client complet
- Section entreprise et objectifs marketing
- Collecte des accès Facebook Business Manager & Google Ads
- Placeholder pour intégration Stripe
- Design sécurisé avec icônes et badges de confiance

### 4. **Espace Client / Dashboard** (`/dashboard`)
- Statistiques de campagne (leads, clics, ROAS, etc.)
- Graphique de performance
- Activité récente
- Actions rapides (réserver appel, télécharger rapport)
- Informations de forfait et prochain paiement
- Support WhatsApp intégré

## 📦 Structure des fichiers créés

```
upnextgrowth/
├── types/
│   └── services.ts              # Types TypeScript pour services
├── data/
│   └── packages.ts              # Données des 3 forfaits
├── components/
│   ├── PricingCard.tsx          # Carte de forfait réutilisable
│   └── Header.tsx               # Navigation mise à jour
├── app/
│   ├── services/
│   │   └── page.tsx             # Page catalogue
│   ├── configurateur/
│   │   └── page.tsx             # Configurateur multi-étapes
│   ├── checkout/
│   │   └── page.tsx             # Page de paiement
│   └── dashboard/
│       └── page.tsx             # Espace client
```

## 🎨 Design & Cohérence

✅ Utilise les mêmes classes Tailwind que votre site actuel
✅ Couleurs : primary-900, success-500, gradient-accent
✅ Composants réutilisables (btn, btn-primary, btn-secondary)
✅ Animations et effets hover cohérents
✅ Mobile-first et responsive

## 🔧 Installation & Configuration

### 1. Installer les dépendances

```bash
npm install lucide-react
```

### 2. Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Base de données (optionnel pour v1)
DATABASE_URL=postgresql://...

# Email (Resend)
RESEND_API_KEY=re_...
```

### 3. Lancer le projet

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## 🔗 Flux utilisateur

```
Page d'accueil
    ↓
/services (Choix du forfait)
    ↓
/configurateur?package=growth (Configuration)
    ↓
/checkout (Formulaire + Paiement)
    ↓
/dashboard (Espace client)
```

## 💳 Intégration Stripe (À faire)

Pour activer les paiements réels, suivez le guide dans `STRIPE_INTEGRATION.md`

### Version actuelle (Demo)
- Simulation de paiement avec délai de 2 secondes
- Données stockées en `localStorage`
- Redirection vers dashboard après validation

### Version production
- API Route Next.js pour créer session Stripe
- Webhooks pour confirmer paiements
- Base de données pour stocker commandes

## 📧 Emails automatiques (Recommandé)

Intégrez **Resend** ou **SendGrid** pour :
- Confirmation de commande
- Instructions d'onboarding
- Rappels de paiement
- Rapports mensuels

## 🗄️ Base de données (Recommandé)

Pour la version production, utilisez **Supabase** ou **Firebase** :

### Tables nécessaires
```sql
-- clients
id, firstName, lastName, email, phone, company, createdAt

-- orders
id, clientId, packageId, duration, totalPrice, status, createdAt

-- campaigns
id, orderId, platform, adSpend, leads, clicks, impressions, updatedAt
```

## 🎁 Avantages de ce système

✅ **Automatisation complète** : Plus besoin de devis manuels
✅ **Expérience fluide** : Le client configure et paie en 5 minutes
✅ **Scalable** : Gère 1 ou 1000 clients sans effort supplémentaire
✅ **Professionnelle** : Design premium et crédible
✅ **Flexible** : Facile d'ajouter de nouveaux forfaits ou options

## 🚧 Prochaines étapes recommandées

1. **Intégrer Stripe** pour les paiements réels
2. **Connecter une base de données** (Supabase recommandé)
3. **Configurer les emails automatiques** (Resend)
4. **Ajouter l'authentification** pour l'espace client
5. **Connecter les vraies stats de campagne** via APIs Meta/Google
6. **Implémenter Calendly** pour la réservation d'appels

## 🤝 Support

Pour toute question sur l'implémentation :
- 📧 Email : contact@upnextgrowth.com
- 💬 WhatsApp : [Votre numéro]

---

**Made with ❤️ for Up Next Growth**
