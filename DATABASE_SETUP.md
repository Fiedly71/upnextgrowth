# 🗄️ Guide d'intégration Base de Données

## 🎯 Pourquoi une base de données ?

Actuellement, les données sont stockées dans `localStorage` (temporaire).  
Pour la production, vous devez persister les données côté serveur pour :

- ✅ Sauvegarder les commandes définitivement
- ✅ Gérer l'authentification des clients
- ✅ Stocker les statistiques de campagne
- ✅ Générer des rapports personnalisés
- ✅ Gérer les abonnements Stripe

## 🛠️ Solutions recommandées

### Option 1 : Supabase (Recommandé - Le plus simple) ⭐

**Avantages :**
- Interface visuelle intuitive
- PostgreSQL managé
- Authentification intégrée
- API REST automatique
- Stockage de fichiers inclus
- Gratuit jusqu'à 500 Mo

**Prix :** Gratuit → $25/mois (Pro)

### Option 2 : Firebase

**Avantages :**
- NoSQL (Firestore)
- Temps réel natif
- Excellent pour mobile
- Authentification Google simple

**Inconvénients :**
- Moins adapté aux relations complexes

### Option 3 : Planetscale + Prisma

**Avantages :**
- Base MySQL serverless
- Branches de base de données (comme Git)
- Excellent avec Prisma ORM

## 📋 Schéma de base de données (Supabase)

### Tables nécessaires

#### 1. `users` (Clients)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  website VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 2. `orders` (Commandes)
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  package_id VARCHAR(50) NOT NULL, -- 'essential', 'growth', 'elite'
  duration VARCHAR(20) NOT NULL, -- 'mensuel', 'trimestriel', 'annuel'
  ad_budget INTEGER NOT NULL,
  total_price INTEGER NOT NULL,
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'active', 'cancelled'
  stripe_subscription_id VARCHAR(255),
  stripe_customer_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 3. `order_addons` (Options supplémentaires)
```sql
CREATE TABLE order_addons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  addon_type VARCHAR(50) NOT NULL, -- 'content_creation', 'landing_page', 'tiktok_ads'
  price INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 4. `campaigns` (Statistiques de campagnes)
```sql
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  platform VARCHAR(20) NOT NULL, -- 'meta', 'google', 'tiktok'
  status VARCHAR(20) DEFAULT 'draft', -- 'draft', 'active', 'paused', 'completed'
  
  -- Statistiques
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  leads INTEGER DEFAULT 0,
  ad_spend DECIMAL(10, 2) DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  
  -- Métriques calculées
  ctr DECIMAL(5, 2), -- Click-through rate
  cpl DECIMAL(10, 2), -- Cost per lead
  roas DECIMAL(10, 2), -- Return on ad spend
  
  date_from DATE,
  date_to DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 5. `campaign_stats` (Statistiques détaillées par jour)
```sql
CREATE TABLE campaign_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  leads INTEGER DEFAULT 0,
  ad_spend DECIMAL(10, 2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(campaign_id, date)
);
```

#### 6. `client_assets` (Fichiers clients)
```sql
CREATE TABLE client_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  file_name VARCHAR(255) NOT NULL,
  file_type VARCHAR(50), -- 'logo', 'photo', 'document'
  file_url TEXT NOT NULL,
  file_size INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Indexes pour performance
```sql
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_campaigns_order_id ON campaigns(order_id);
CREATE INDEX idx_campaign_stats_campaign_id ON campaign_stats(campaign_id);
CREATE INDEX idx_campaign_stats_date ON campaign_stats(date);
```

## 🚀 Installation Supabase

### 1. Créer un projet

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un compte
3. Créez un nouveau projet
4. Notez votre **Project URL** et **anon key**

### 2. Installer le client

```bash
npm install @supabase/supabase-js
```

### 3. Configuration

Créez `lib/supabase.ts` :

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types TypeScript générés automatiquement
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
          phone: string | null;
          company: string | null;
          website: string | null;
          created_at: string;
        };
        Insert: {
          email: string;
          first_name: string;
          last_name: string;
          phone?: string;
          company?: string;
          website?: string;
        };
      };
      // ... autres tables
    };
  };
};
```

Ajoutez dans `.env.local` :
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Créer les tables (SQL Editor)

Dans le Dashboard Supabase :
1. Allez dans **SQL Editor**
2. Collez les requêtes SQL ci-dessus
3. Exécutez

## 💾 Exemples d'utilisation

### Créer un utilisateur et une commande

```typescript
// app/api/webhooks/stripe/route.ts
import { supabase } from '@/lib/supabase';

case 'checkout.session.completed':
  const session = event.data.object as Stripe.Checkout.Session;
  const metadata = JSON.parse(session.metadata?.clientInfo || '{}');

  // 1. Créer ou récupérer l'utilisateur
  const { data: user, error: userError } = await supabase
    .from('users')
    .upsert({
      email: metadata.email,
      first_name: metadata.firstName,
      last_name: metadata.lastName,
      phone: metadata.phone,
      company: metadata.company,
      website: metadata.website,
    })
    .select()
    .single();

  if (userError) throw userError;

  // 2. Créer la commande
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: user.id,
      package_id: session.metadata?.packageId,
      duration: session.metadata?.duration,
      ad_budget: parseInt(session.metadata?.adBudget || '1000'),
      total_price: session.amount_total! / 100,
      status: 'active',
      stripe_subscription_id: session.subscription as string,
      stripe_customer_id: session.customer as string,
    })
    .select()
    .single();

  if (orderError) throw orderError;

  // 3. Créer les addons
  const addons = JSON.parse(session.metadata?.addons || '{}');
  if (addons.contentCreation) {
    await supabase.from('order_addons').insert({
      order_id: order.id,
      addon_type: 'content_creation',
      price: 297,
    });
  }
  // ... autres addons

  break;
```

### Récupérer les données dans le Dashboard

```typescript
// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Récupérer l'email du localStorage (temporaire)
      const clientInfo = JSON.parse(localStorage.getItem('clientInfo') || '{}');
      
      // Récupérer l'utilisateur
      const { data: user } = await supabase
        .from('users')
        .select('*')
        .eq('email', clientInfo.email)
        .single();

      setUserData(user);

      // Récupérer les commandes avec les campagnes
      const { data: orders } = await supabase
        .from('orders')
        .select(`
          *,
          campaigns (*)
        `)
        .eq('user_id', user.id);

      if (orders && orders[0]) {
        setCampaigns(orders[0].campaigns);
      }
    }

    fetchData();
  }, []);

  // Afficher les données
  return (
    <div>
      {/* Utiliser userData et campaigns */}
    </div>
  );
}
```

### Mettre à jour les statistiques

```typescript
// app/api/campaigns/update-stats/route.ts
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const { campaignId, stats } = await req.json();

  const { data, error } = await supabase
    .from('campaigns')
    .update({
      impressions: stats.impressions,
      clicks: stats.clicks,
      leads: stats.leads,
      ad_spend: stats.adSpend,
      ctr: (stats.clicks / stats.impressions * 100).toFixed(2),
      cpl: (stats.adSpend / stats.leads).toFixed(2),
      updated_at: new Date().toISOString(),
    })
    .eq('id', campaignId);

  return Response.json({ success: !error, data });
}
```

## 🔐 Authentification (Row Level Security)

Activez RLS pour sécuriser vos données :

```sql
-- Activer RLS sur toutes les tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

-- Politique : Un utilisateur peut voir ses propres données
CREATE POLICY "Users can view own data"
ON users FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can view own orders"
ON orders FOR SELECT
USING (user_id IN (
  SELECT id FROM users WHERE auth.uid() = id
));
```

## 📊 Requêtes avancées

### Rapport mensuel par client

```typescript
const { data } = await supabase
  .from('campaign_stats')
  .select(`
    date,
    impressions,
    clicks,
    leads,
    ad_spend,
    campaigns!inner(
      order_id,
      orders!inner(
        user_id
      )
    )
  `)
  .gte('date', '2026-01-01')
  .lte('date', '2026-01-31')
  .eq('campaigns.orders.user_id', userId);
```

### Top 10 clients par ROAS

```sql
SELECT 
  u.company,
  c.roas,
  c.leads,
  c.ad_spend
FROM campaigns c
JOIN orders o ON c.order_id = o.id
JOIN users u ON o.user_id = u.id
ORDER BY c.roas DESC
LIMIT 10;
```

## 🚀 Migration depuis localStorage

Créez un script de migration :

```typescript
// scripts/migrate-from-localstorage.ts
import { supabase } from '@/lib/supabase';

async function migrate() {
  // Récupérer les données du localStorage
  const clientInfo = JSON.parse(localStorage.getItem('clientInfo') || '{}');
  const orderConfig = JSON.parse(localStorage.getItem('orderConfig') || '{}');

  // Insérer dans Supabase
  const { data: user } = await supabase
    .from('users')
    .insert({
      email: clientInfo.email,
      first_name: clientInfo.firstName,
      last_name: clientInfo.lastName,
      phone: clientInfo.phone,
      company: clientInfo.company,
      website: clientInfo.website,
    })
    .select()
    .single();

  await supabase.from('orders').insert({
    user_id: user.id,
    package_id: orderConfig.packageId,
    duration: orderConfig.duration,
    ad_budget: orderConfig.adBudget,
    total_price: orderConfig.totalPrice,
    status: 'active',
  });

  console.log('Migration réussie !');
}
```

## 💡 Best Practices

### ✅ À faire
- Utiliser des transactions pour les opérations multiples
- Indexer les colonnes fréquemment recherchées
- Sauvegarder régulièrement (Supabase le fait automatiquement)
- Utiliser RLS pour la sécurité
- Logger toutes les erreurs

### ❌ À éviter
- Stocker des données sensibles en clair (hasher les mots de passe)
- Faire trop de requêtes dans une boucle (utiliser `.in()`)
- Oublier de gérer les erreurs
- Exposer les clés Supabase côté client

## 📈 Monitoring

Supabase fournit :
- Dashboard avec statistiques en temps réel
- Logs des requêtes SQL
- Monitoring de performance
- Alertes si surcharge

## 💰 Coûts Supabase

| Plan | Prix | Limites |
|------|------|---------|
| Gratuit | 0€ | 500 Mo DB, 1 Go stockage, 50k requêtes/mois |
| Pro | $25/mois | 8 Go DB, 100 Go stockage, illimité |
| Team | $599/mois | 200 Go DB, 1 To stockage, support prioritaire |

## 🔄 Prochaines étapes

1. ✅ Créer un compte Supabase
2. ✅ Créer les tables avec le SQL ci-dessus
3. ✅ Intégrer dans le webhook Stripe
4. ✅ Migrer les données du localStorage
5. ✅ Mettre à jour le Dashboard pour lire depuis Supabase
6. ✅ Activer RLS pour la sécurité
7. ✅ Configurer les backups automatiques

---

**Besoin d'aide ?** Consultez la [documentation Supabase](https://supabase.com/docs)
