# 📧 Guide des Emails Automatiques

## 🎯 Objectif

Automatiser la communication avec vos clients à chaque étape du parcours pour créer une expérience premium et professionnelle.

## 📬 Emails à envoyer

### 1. Email de confirmation de commande
**Trigger** : Après le paiement Stripe réussi  
**Délai** : Immédiat

### 2. Email d'onboarding
**Trigger** : 1 heure après la commande  
**Délai** : +1h

### 3. Email de bienvenue de l'équipe
**Trigger** : 24h après la commande  
**Délai** : +24h

### 4. Rappel upload assets
**Trigger** : Si pas d'assets uploadés après 48h  
**Délai** : +48h

### 5. Rapport hebdomadaire
**Trigger** : Tous les lundis 9h  
**Récurrence** : Hebdomadaire

### 6. Rappel de paiement
**Trigger** : 3 jours avant échéance  
**Délai** : -3 jours

## 🛠️ Outils recommandés

### Option 1 : Resend (Recommandé)
✅ API simple et moderne  
✅ Templates React  
✅ Analytics intégrées  
✅ 100 emails/jour gratuits  

### Option 2 : SendGrid
✅ Très scalable  
✅ Templates HTML  
✅ 100 emails/jour gratuits  

### Option 3 : AWS SES
✅ Très économique  
✅ Haute délivrabilité  
⚠️ Configuration plus complexe

## 📦 Installation (Resend)

```bash
npm install resend
```

Configuration `.env.local` :
```env
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=contact@upnextgrowth.com
```

## 📄 Templates d'emails

### Email 1 : Confirmation de commande

**Fichier :** `emails/OrderConfirmation.tsx`

```tsx
import * as React from 'react';

interface OrderConfirmationEmailProps {
  customerName: string;
  packageName: string;
  totalPrice: number;
  orderDate: string;
}

export const OrderConfirmationEmail: React.FC<OrderConfirmationEmailProps> = ({
  customerName,
  packageName,
  totalPrice,
  orderDate,
}) => (
  <html>
    <head>
      <style>
        {`
          body { font-family: 'Helvetica', 'Arial', sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0A2540 0%, #00C2A8 100%); 
                    color: white; padding: 40px; text-align: center; border-radius: 10px; }
          .content { background: #f9f9f9; padding: 30px; margin-top: 20px; border-radius: 10px; }
          .button { background: #00C2A8; color: white; padding: 15px 30px; 
                    text-decoration: none; border-radius: 8px; display: inline-block; 
                    margin: 20px 0; font-weight: bold; }
          .footer { text-align: center; color: #666; margin-top: 30px; font-size: 12px; }
        \`}
      </style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1>✅ Commande confirmée !</h1>
          <p>Merci pour votre confiance</p>
        </div>
        
        <div className="content">
          <p>Bonjour <strong>{customerName}</strong>,</p>
          
          <p>Nous avons bien reçu votre commande et votre paiement a été confirmé avec succès ! 🎉</p>
          
          <h2>Récapitulatif de votre commande</h2>
          <ul>
            <li><strong>Forfait :</strong> {packageName}</li>
            <li><strong>Montant :</strong> {totalPrice}€/mois</li>
            <li><strong>Date :</strong> {orderDate}</li>
          </ul>
          
          <h3>🚀 Prochaines étapes</h3>
          <ol>
            <li>Notre équipe va analyser vos besoins (sous 24h)</li>
            <li>Vous recevrez un email pour planifier votre appel de lancement</li>
            <li>Nous configurons vos premières campagnes</li>
            <li>Lancement officiel dans 3-5 jours ouvrés</li>
          </ol>
          
          <center>
            <a href="https://upnextgrowth.com/dashboard" className="button">
              Accéder à mon espace client
            </a>
          </center>
          
          <p style="margin-top: 30px; padding: 15px; background: #fff; border-left: 4px solid #00C2A8;">
            💡 <strong>Conseil :</strong> Préparez vos logos, photos, et textes pour accélérer le lancement de vos campagnes.
          </p>
        </div>
        
        <div className="footer">
          <p>Up Next Growth - Votre agence de croissance digitale</p>
          <p>Une question ? Répondez à cet email ou contactez-nous sur WhatsApp</p>
        </div>
      </div>
    </body>
  </html>
);
```

### Email 2 : Onboarding (Guide de démarrage)

```tsx
export const OnboardingEmail: React.FC<{ customerName: string }> = ({ customerName }) => (
  <html>
    <body>
      <div className="container">
        <div className="header">
          <h1>🎯 Préparez votre succès</h1>
        </div>
        
        <div className="content">
          <p>Bonjour {customerName},</p>
          
          <p>Votre aventure vers la croissance commence maintenant ! Voici comment préparer le lancement de vos campagnes :</p>
          
          <h3>📋 Checklist de démarrage</h3>
          <ul>
            <li>✅ Accès Facebook Business Manager</li>
            <li>✅ Accès Google Ads (si applicable)</li>
            <li>✅ Logos et visuels de votre entreprise</li>
            <li>✅ Offre principale et avantages clés</li>
            <li>✅ Budget publicitaire prêt</li>
          </ul>
          
          <h3>📁 Assets à nous envoyer</h3>
          <p>Téléchargez vos fichiers directement dans votre espace client :</p>
          <ul>
            <li>Logo vectoriel (.png fond transparent ou .svg)</li>
            <li>Photos de produits/services (haute qualité)</li>
            <li>Charte graphique (couleurs, polices)</li>
            <li>Textes publicitaires existants (si vous en avez)</li>
          </ul>
          
          <center>
            <a href="https://upnextgrowth.com/dashboard" className="button">
              Uploader mes assets
            </a>
          </center>
          
          <p style="margin-top: 30px;">
            <strong>Notre équipe vous contactera dans les 24h</strong> pour planifier votre appel stratégique de lancement.
          </p>
          
          <p>À très vite ! 🚀</p>
          <p>L'équipe Up Next Growth</p>
        </div>
      </div>
    </body>
  </html>
);
```

### Email 3 : Rapport hebdomadaire

```tsx
interface WeeklyReportEmailProps {
  customerName: string;
  leads: number;
  clicks: number;
  impressions: number;
  adSpend: number;
  cpl: number;
  roas: number;
}

export const WeeklyReportEmail: React.FC<WeeklyReportEmailProps> = ({
  customerName,
  leads,
  clicks,
  impressions,
  adSpend,
  cpl,
  roas,
}) => (
  <html>
    <body>
      <div className="container">
        <div className="header">
          <h1>📊 Rapport hebdomadaire</h1>
          <p>Semaine du {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
        
        <div className="content">
          <p>Bonjour {customerName},</p>
          
          <p>Voici les performances de vos campagnes cette semaine :</p>
          
          <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
            <tr style="background: #0A2540; color: white;">
              <th style="padding: 15px; text-align: left;">Métrique</th>
              <th style="padding: 15px; text-align: right;">Valeur</th>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 12px;">👥 Nouveaux leads</td>
              <td style="padding: 12px; text-align: right; font-weight: bold;">{leads}</td>
            </tr>
            <tr>
              <td style="padding: 12px;">👆 Clics</td>
              <td style="padding: 12px; text-align: right; font-weight: bold;">{clicks.toLocaleString()}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 12px;">👁️ Impressions</td>
              <td style="padding: 12px; text-align: right; font-weight: bold;">{impressions.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 12px;">💰 Dépenses publicitaires</td>
              <td style="padding: 12px; text-align: right; font-weight: bold;">{adSpend}€</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 12px;">📉 Coût par lead</td>
              <td style="padding: 12px; text-align: right; font-weight: bold;">{cpl}€</td>
            </tr>
            <tr>
              <td style="padding: 12px;">📈 ROAS</td>
              <td style="padding: 12px; text-align: right; font-weight: bold; color: #00C2A8;">{roas}x</td>
            </tr>
          </table>
          
          <div style="background: linear-gradient(135deg, #00C2A8 0%, #0A2540 100%); 
                      color: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="margin-top: 0;">💡 Insights de la semaine</h3>
            <p>Vos campagnes performent bien ! Le coût par lead est en baisse de 15% grâce aux optimisations effectuées.</p>
            <p><strong>Prochaine action :</strong> Nous allons tester 3 nouvelles variations de visuels pour augmenter le taux de conversion.</p>
          </div>
          
          <center>
            <a href="https://upnextgrowth.com/dashboard" className="button">
              Voir le rapport complet
            </a>
          </center>
          
          <p style="margin-top: 30px;">
            Des questions ? Répondez à cet email ou planifiez un appel avec votre gestionnaire de compte.
          </p>
        </div>
      </div>
    </body>
  </html>
);
```

## 🔌 Intégration avec Resend

### Configuration

Créez `lib/email.ts` :

```typescript
import { Resend } from 'resend';
import { OrderConfirmationEmail } from '@/emails/OrderConfirmation';
import { OnboardingEmail } from '@/emails/Onboarding';
import { WeeklyReportEmail } from '@/emails/WeeklyReport';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderConfirmation(data: {
  to: string;
  customerName: string;
  packageName: string;
  totalPrice: number;
}) {
  return await resend.emails.send({
    from: 'Up Next Growth <contact@upnextgrowth.com>',
    to: data.to,
    subject: '✅ Votre commande a été confirmée !',
    react: OrderConfirmationEmail({
      customerName: data.customerName,
      packageName: data.packageName,
      totalPrice: data.totalPrice,
      orderDate: new Date().toLocaleDateString('fr-FR'),
    }),
  });
}

export async function sendOnboarding(to: string, customerName: string) {
  return await resend.emails.send({
    from: 'Up Next Growth <contact@upnextgrowth.com>',
    to,
    subject: '🎯 Préparez votre succès - Guide de démarrage',
    react: OnboardingEmail({ customerName }),
  });
}

export async function sendWeeklyReport(data: {
  to: string;
  customerName: string;
  leads: number;
  clicks: number;
  impressions: number;
  adSpend: number;
  cpl: number;
  roas: number;
}) {
  return await resend.emails.send({
    from: 'Rapports <rapports@upnextgrowth.com>',
    to: data.to,
    subject: `📊 Votre rapport hebdomadaire - ${data.leads} nouveaux leads`,
    react: WeeklyReportEmail(data),
  });
}
```

### Utilisation dans le webhook Stripe

Dans `app/api/webhooks/stripe/route.ts` :

```typescript
import { sendOrderConfirmation, sendOnboarding } from '@/lib/email';

// Dans le case 'checkout.session.completed':
case 'checkout.session.completed':
  const session = event.data.object as Stripe.Checkout.Session;
  
  // Envoyer email de confirmation
  await sendOrderConfirmation({
    to: session.customer_email!,
    customerName: session.metadata?.customerName || 'Client',
    packageName: session.metadata?.packageName || 'Pack Growth',
    totalPrice: session.amount_total! / 100,
  });
  
  // Programmer l'email d'onboarding (1h plus tard)
  setTimeout(async () => {
    await sendOnboarding(
      session.customer_email!,
      session.metadata?.customerName || 'Client'
    );
  }, 60 * 60 * 1000); // 1 heure
  
  break;
```

## ⏰ Automatisation avec Cron Jobs

Pour les emails récurrents (rapports hebdomadaires), utilisez Vercel Cron ou un service tiers.

### Option 1 : Vercel Cron

Créez `app/api/cron/weekly-reports/route.ts` :

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { sendWeeklyReport } from '@/lib/email';

export async function GET(req: NextRequest) {
  // Vérifier le token secret
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // TODO : Récupérer tous les clients actifs depuis la DB
  const clients = []; // Fetch from database

  for (const client of clients) {
    await sendWeeklyReport({
      to: client.email,
      customerName: client.name,
      leads: client.stats.leads,
      clicks: client.stats.clicks,
      impressions: client.stats.impressions,
      adSpend: client.stats.adSpend,
      cpl: client.stats.cpl,
      roas: client.stats.roas,
    });
  }

  return NextResponse.json({ success: true });
}
```

Configurez dans `vercel.json` :

```json
{
  "crons": [
    {
      "path": "/api/cron/weekly-reports",
      "schedule": "0 9 * * 1"
    }
  ]
}
```

### Option 2 : Zapier ou Make.com

1. Créer un Zap/Scénario
2. Trigger : Tous les lundis à 9h
3. Action : HTTP Request vers votre API
4. Body : Liste des clients et leurs stats

## 📊 Tracking des emails

Resend fournit automatiquement :
- ✅ Taux d'ouverture
- ✅ Taux de clic
- ✅ Bounces
- ✅ Plaintes spam

Accédez aux stats dans le dashboard Resend.

## 🎨 Best Practices

### ✅ À faire
- Personnaliser avec le prénom du client
- Utiliser des call-to-actions clairs
- Optimiser pour mobile
- Tester avant d'envoyer
- A/B tester les sujets

### ❌ À éviter
- Spam keywords ("gratuit", "urgent", "cliquez ici")
- Trop d'images (ratio texte/image = 60/40)
- Liens cassés
- Envoyer aux heures impaires
- Oublier le lien de désinscription

## 🔒 Conformité RGPD

Assurez-vous d'avoir :
- ✅ Lien de désinscription dans chaque email
- ✅ Consentement explicite (case à cocher lors de l'achat)
- ✅ Politique de confidentialité accessible
- ✅ Possibilité de télécharger/supprimer les données

## 💰 Coûts

| Service | Gratuit | Payant |
|---------|---------|--------|
| Resend | 100/jour | $20/mois (50k emails) |
| SendGrid | 100/jour | $15/mois (40k emails) |
| AWS SES | 0 | $0.10/1000 emails |

## 🚀 Prochaines étapes

1. Créer un compte Resend
2. Vérifier votre domaine (upnextgrowth.com)
3. Créer les templates d'emails
4. Intégrer dans le webhook Stripe
5. Tester avec des commandes de test
6. Configurer les Cron jobs pour les rapports

---

**Questions ?** Consultez la [documentation Resend](https://resend.com/docs)
