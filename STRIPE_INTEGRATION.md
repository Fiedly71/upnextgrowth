# 💳 Guide d'Intégration Stripe

## 🎯 Objectif

Ce guide vous explique comment intégrer Stripe pour accepter les paiements récurrents (abonnements) et les paiements uniques pour vos forfaits.

## 📦 Installation

```bash
npm install stripe @stripe/stripe-js
```

## 🔑 Configuration

### 1. Créer un compte Stripe

1. Allez sur [stripe.com](https://stripe.com)
2. Créez un compte
3. Activez le mode Test
4. Récupérez vos clés API :
   - **Clé publique** : `pk_test_...`
   - **Clé secrète** : `sk_test_...`

### 2. Variables d'environnement

Ajoutez dans `.env.local` :

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51xxxxx
STRIPE_SECRET_KEY=sk_test_51xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

## 🏗️ Structure de l'intégration

### Étape 1 : Créer les produits dans Stripe

#### Option A : Via le Dashboard Stripe (Recommandé pour démarrer)

1. Allez dans **Produits** > **Ajouter un produit**
2. Créez 3 produits :
   - **Pack ESSENTIAL** - 497€/mois
   - **Pack GROWTH** - 997€/mois  
   - **Pack ELITE** - 2497€/mois
3. Activez la facturation récurrente
4. Récupérez les Price IDs : `price_xxxxx`

#### Option B : Via l'API (Automatisé)

Créez `scripts/create-stripe-products.ts` :

```typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

async function createProducts() {
  // Pack ESSENTIAL
  const essential = await stripe.products.create({
    name: 'Pack ESSENTIAL',
    description: 'Le test de marché',
  });
  const essentialPrice = await stripe.prices.create({
    product: essential.id,
    currency: 'eur',
    unit_amount: 49700, // 497€ en centimes
    recurring: { interval: 'month' },
  });

  // Pack GROWTH
  const growth = await stripe.products.create({
    name: 'Pack GROWTH',
    description: 'Le best-seller',
  });
  const growthPrice = await stripe.prices.create({
    product: growth.id,
    currency: 'eur',
    unit_amount: 99700, // 997€
    recurring: { interval: 'month' },
  });

  // Pack ELITE
  const elite = await stripe.products.create({
    name: 'Pack ELITE',
    description: "L'arsenal complet",
  });
  const elitePrice = await stripe.prices.create({
    product: elite.id,
    currency: 'eur',
    unit_amount: 249700, // 2497€
    recurring: { interval: 'month' },
  });

  console.log({
    essential: essentialPrice.id,
    growth: growthPrice.id,
    elite: elitePrice.id,
  });
}

createProducts();
```

Exécutez : `npx tsx scripts/create-stripe-products.ts`

### Étape 2 : Créer l'API Route pour le Checkout

Créez `app/api/create-checkout-session/route.ts` :

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

// Mapping des packages vers les Price IDs Stripe
const PRICE_IDS: Record<string, string> = {
  essential: 'price_xxxxx', // Remplacez par vos vrais IDs
  growth: 'price_xxxxx',
  elite: 'price_xxxxx',
};

export async function POST(req: NextRequest) {
  try {
    const { packageId, duration, addons, clientInfo } = await req.json();

    // Récupérer le Price ID
    const priceId = PRICE_IDS[packageId];
    if (!priceId) {
      return NextResponse.json({ error: 'Invalid package' }, { status: 400 });
    }

    // Créer ou récupérer le client Stripe
    const customer = await stripe.customers.create({
      email: clientInfo.email,
      name: `${clientInfo.firstName} ${clientInfo.lastName}`,
      metadata: {
        company: clientInfo.company,
        phone: clientInfo.phone,
      },
    });

    // Items de la session
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price: priceId,
        quantity: 1,
      },
    ];

    // Ajouter les addons
    if (addons.contentCreation) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: { name: 'Création de contenu premium' },
          unit_amount: 29700, // 297€
          recurring: { interval: 'month' },
        },
        quantity: 1,
      });
    }

    if (addons.extraLandingPage) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: { name: 'Landing page supplémentaire' },
          unit_amount: 49700, // 497€
          recurring: { interval: 'month' },
        },
        quantity: 1,
      });
    }

    if (addons.tikTokAds) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: { name: 'TikTok Ads' },
          unit_amount: 39700, // 397€
          recurring: { interval: 'month' },
        },
        quantity: 1,
      });
    }

    // Créer la session Checkout
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: lineItems,
      success_url: `${req.headers.get('origin')}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/checkout?canceled=true`,
      metadata: {
        packageId,
        duration,
        clientInfo: JSON.stringify(clientInfo),
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

### Étape 3 : Modifier la page Checkout

Mettez à jour `app/checkout/page.tsx` :

```typescript
// Ajoutez en haut du fichier
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Dans handleSubmit, remplacez le setTimeout par :
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    // Créer la session Stripe
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        packageId: orderConfig.packageId,
        duration: orderConfig.duration,
        addons: orderConfig.addons,
        clientInfo,
      }),
    });

    const { sessionId, url } = await response.json();

    // Rediriger vers Stripe Checkout
    if (url) {
      window.location.href = url;
    }
  } catch (error) {
    console.error('Payment error:', error);
    alert('Erreur lors du paiement. Veuillez réessayer.');
    setLoading(false);
  }
};
```

### Étape 4 : Gérer les Webhooks Stripe

Les webhooks permettent de recevoir les confirmations de paiement en temps réel.

Créez `app/api/webhooks/stripe/route.ts` :

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  // Gérer les différents types d'événements
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      
      // TODO : Sauvegarder la commande en base de données
      console.log('Payment successful:', session.id);
      
      // TODO : Envoyer email de confirmation
      
      break;

    case 'customer.subscription.created':
      const subscription = event.data.object as Stripe.Subscription;
      console.log('Subscription created:', subscription.id);
      break;

    case 'customer.subscription.updated':
      console.log('Subscription updated');
      break;

    case 'customer.subscription.deleted':
      console.log('Subscription canceled');
      break;

    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice;
      console.log('Invoice paid:', invoice.id);
      break;

    case 'invoice.payment_failed':
      console.log('Payment failed');
      // TODO : Envoyer email d'alerte
      break;
  }

  return NextResponse.json({ received: true });
}
```

### Étape 5 : Tester les Webhooks en local

```bash
# Installer Stripe CLI
brew install stripe/stripe-cli/stripe  # macOS
# ou télécharger depuis stripe.com/docs/stripe-cli

# Se connecter
stripe login

# Écouter les webhooks
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Dans un autre terminal, tester
stripe trigger checkout.session.completed
```

## 🧪 Tests

### Cartes de test Stripe

| Carte | Numéro | Résultat |
|-------|--------|----------|
| Succès | 4242 4242 4242 4242 | ✅ Paiement réussi |
| Échec | 4000 0000 0000 0002 | ❌ Carte refusée |
| 3D Secure | 4000 0027 6000 3184 | 🔐 Authentification requise |

**Date d'expiration** : N'importe quelle date future  
**CVC** : N'importe quel 3 chiffres  
**Code postal** : N'importe lequel

## 📊 Dashboard Stripe

Accédez à votre dashboard pour :
- Voir les paiements en temps réel
- Gérer les abonnements
- Rembourser des clients
- Exporter les factures
- Analyser les revenus

## 🚀 Passage en production

1. Activez votre compte Stripe (vérification d'identité)
2. Remplacez les clés `pk_test_` par `pk_live_`
3. Testez avec de vrais petits montants
4. Configurez les emails de confirmation
5. Ajoutez les mentions légales et CGV

## 💡 Fonctionnalités avancées

### Coupons de réduction

```typescript
const session = await stripe.checkout.sessions.create({
  // ...
  discounts: [{
    coupon: 'PROMO20', // 20% de réduction
  }],
});
```

### Essai gratuit

```typescript
const session = await stripe.checkout.sessions.create({
  // ...
  subscription_data: {
    trial_period_days: 14,
  },
});
```

### Facturation personnalisée

```typescript
await stripe.invoiceItems.create({
  customer: 'cus_xxxxx',
  amount: 50000, // 500€
  currency: 'eur',
  description: 'Setup fee',
});
```

## 🆘 Dépannage

### Erreur : "No such price"
→ Vérifiez que le Price ID est correct dans `PRICE_IDS`

### Webhook non reçu
→ Vérifiez que `STRIPE_WEBHOOK_SECRET` est correct  
→ Testez avec Stripe CLI en local

### Paiement bloqué
→ Mode test activé ? Utilisez les cartes de test  
→ Vérifiez les logs dans le Dashboard Stripe

## 📚 Ressources

- [Documentation Stripe](https://stripe.com/docs)
- [API Reference](https://stripe.com/docs/api)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)
- [Webhooks](https://stripe.com/docs/webhooks)

---

**Need help?** Contact support@stripe.com ou consultez la communauté Discord
