# 🛠️ Commandes Utiles - Up Next Growth

## 📦 Installation et Démarrage

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder le projet pour la production
npm run build

# Lancer le serveur de production
npm start

# Vérifier la sintaxe et le linting
npm run lint
```

## 🔧 Développement

```bash
# Démarrer en mode debug
npm run dev -- --debug

# Ouvrir l'app dans le navigateur
# Généralement: http://localhost:3000

# Réinitialiser le cache Next.js
rm -r .next
npm run dev
```

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer (premier déploiement)
vercel

# Déployer une mise à jour
vercel --prod

# Voir les logs
vercel logs
```

### Netlify

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Déployer
netlify deploy --prod

# Voir les logs
netlify logs
```

### Docker

```bash
# Créer l'image
docker build -t upnext-growth .

# Lancer le container
docker run -p 3000:3000 upnext-growth
```

## 📝 Snippets Code Utiles

### Ajouter une nouvelle section

```tsx
'use client'

import { motion } from 'framer-motion'

export default function NewSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Titre de ma section
        </motion.h2>
        {/* Contenu */}
      </div>
    </section>
  )
}
```

### Ajouter un bouton CTA

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="btn btn-primary"
>
  Texte du bouton
</motion.button>
```

### Ajouter une carte/card

```tsx
<motion.div
  whileHover={{ y: -5 }}
  className="bg-white rounded-2xl p-8 shadow-md-premium hover:shadow-lg-premium border border-gray-100"
>
  <h3 className="text-xl font-bold text-primary-900">Titre</h3>
  <p className="text-gray-600">Description</p>
</motion.div>
```

### Ajouter une animation au scroll

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Contenu visible au scroll
</motion.div>
```

### Ajouter un gradient text

```tsx
<h1 className="gradient-text">
  Texte avec dégradé
</h1>
```

### Ajouter une icône

```tsx
import { Heart, Star, ChevronDown } from 'lucide-react'

<Heart className="w-6 h-6 text-red-500" />
<Star className="w-6 h-6 text-yellow-400" />
<ChevronDown className="w-6 h-6 text-blue-500" />
```

## 🔍 Debugging

### Chrome DevTools

```
F12 ou Ctrl+Shift+I
```

Onglets importants:
- **Elements**: Inspecter le HTML/CSS
- **Console**: Voir les erreurs JavaScript
- **Network**: Voir les requêtes API
- **Performance**: Analyser les perfs
- **Application**: LocalStorage, Cookies

### VS Code Debugging

Dans `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "runtimeArgs": ["dev"],
      "console": "integratedTerminal"
    }
  ]
}
```

## 📱 Testing sur Mobile

### Localement

```bash
# Obtenir votre IP local
ipconfig getifaddr en0  # Mac/Linux
ipconfig  # Windows - chercher "Adresse IPv4"

# Accéder depuis le mobile sur: http://YOUR_IP:3000
```

### Services en ligne

- [ngrok](https://ngrok.com/) - Tunnel HTTP/HTTPS
- [localtunnel](https://localtunnel.me/) - Expose votre localhost
- [serveo](https://serveo.net/) - Tunnel SSH

```bash
# Avec ngrok
ngrok http 3000
# Puis accéder via https://xxxxx.ngrok.io
```

## 🔐 Sécurité

### Vérifier les vulnérabilités

```bash
npm audit
npm audit fix  # Corriger automatiquement
npm audit fix --force  # Forcer les corrections
```

### Créer un fichier .env.local sécurisé

```bash
# Ne pas committer les secrets
echo ".env.local" >> .gitignore

# Créer le fichier
cp .env.example .env.local

# Remplir avec vos données secrètes (ne pas pusher !)
```

## 📊 Performance

### Lighthouse (Google)

```bash
# F12 → Lighthouse → Analyze
```

### Next.js Analytics

```bash
# Voir dans le build output
npm run build
```

### Bundle Analysis

```bash
# Installer analyse tool
npm install -D @next/bundle-analyzer

# Utiliser dans next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

# Analyser le bundle
ANALYZE=true npm run build
```

## 🎯 Maintenance

### Mettre à jour les packages

```bash
# Voir quels packages ont des mises à jour
npm outdated

# Mettre à jour tous les packages
npm update

# Mettre à jour un package spécifique
npm install package-name@latest
```

### Nettoyer le cache

```bash
# .next cache
rm -rf .next

# node_modules (si problème)
rm -rf node_modules package-lock.json
npm install

# npm cache
npm cache clean --force
```

## 🐛 Erreurs Communes

### Erreur: "Cannot find module"

```bash
# Solution
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreur: "Port 3000 already in use"

```bash
# Trouver quel process utilise le port
lsof -i :3000  # Mac/Linux
netstat -ano | findstr :3000  # Windows (Admin)

# Terminer le process (Windows)
taskkill /PID XXXX /F
```

### Erreur: "EACCES: permission denied"

```bash
# Solution (Mac/Linux)
sudo chown -R $USER:$USER .
npm install
```

## 📚 Ressources utiles

### Documentation
- [Next.js Official](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React](https://react.dev)

### Outils
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Tailwind UI](https://tailwindui.com)
- [Lucide Icons](https://lucide.dev)

### Community
- [Stack Overflow](https://stackoverflow.com)
- [GitHub Discussions](https://github.com)
- [Discord Next.js](https://discord.gg/bUG7V3QJRF)

## 🎓 Apprentissage rapide

### 5 minutes - Démarrer
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

### 30 minutes - Personnaliser
1. Changer les textes dans `components/`
2. Modifier les couleurs dans `tailwind.config.ts`
3. Ajouter vos informations de contact

### 2 heures - Full Customization
1. Ajouter/retirer des sections
2. Intégrer votre API
3. Configurer les analytics
4. Tests sur mobile

### 1 jour - Mise en production
1. Créer un compte Vercel
2. Connecter votre repo GitHub
3. Configurer les variables d'environnement
4. Déployer avec `git push`

## 💡 Pro Tips

1. **Utiliser un éditeur différent**:  VS Code, WebStorm, Cursor
2. **Hot Reload**: Les modifications sont appliquées en temps réel
3. **Shortcuts utiles**:
   - `Cmd/Ctrl + K` - Ouvrir la commande
   - `Cmd/Ctrl + P` - Ouvrir un fichier
   - `Cmd/Ctrl + Shift + F` - Chercher dans tous les fichiers
4. **Prettier**: Auto-format le code
5. **GitHub Copilot**: Intelligence artificielle pour le code

---

**Questions?** Consultez la documentation officielle ou contactez-nous !
