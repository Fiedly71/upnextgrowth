'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  MousePointerClick, 
  Calendar,
  FileText,
  Phone,
  Download,
  Bell,
  Settings,
  BarChart3,
  Target
} from 'lucide-react';

interface DashboardStats {
  totalLeads: number;
  adSpend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpl: number;
  roas: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [clientInfo, setClientInfo] = useState<any>(null);
  const [orderConfig, setOrderConfig] = useState<any>(null);

  useEffect(() => {
    const client = localStorage.getItem('clientInfo');
    const order = localStorage.getItem('orderConfig');
    const completed = localStorage.getItem('orderCompleted');

    if (!completed) {
      router.push('/services');
      return;
    }

    if (client) setClientInfo(JSON.parse(client));
    if (order) setOrderConfig(JSON.parse(order));
  }, [router]);

  // Mock stats (in production, fetch from API)
  const stats: DashboardStats = {
    totalLeads: 147,
    adSpend: orderConfig?.adBudget || 2500,
    impressions: 125840,
    clicks: 3867,
    ctr: 3.07,
    cpl: 17.01,
    roas: 4.2,
  };

  const recentActivity = [
    { date: '29 Jan 2026', event: 'Nouvelle campagne lancée', type: 'success' },
    { date: '28 Jan 2026', event: '12 nouveaux leads générés', type: 'info' },
    { date: '27 Jan 2026', event: 'Rapport hebdomadaire envoyé', type: 'info' },
    { date: '26 Jan 2026', event: 'Budget mis à jour', type: 'warning' },
  ];

  if (!clientInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de votre espace...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-section max-w-7xl">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Bienvenue, {clientInfo.firstName} ! 👋
          </h1>
          <p className="text-xl text-gray-600">
            Voici un aperçu de vos campagnes publicitaires
          </p>
        </div>

        {/* Success Banner */}
        <div className="mb-8 bg-gradient-accent text-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full p-4">
              <Target className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">🎉 Votre compte est activé !</h2>
              <p className="opacity-90">
                Notre équipe va vous contacter sous 24h pour démarrer vos campagnes. En attendant, 
                explorez votre tableau de bord et préparez vos assets marketing.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-success-500">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-success-100 rounded-lg p-3">
                <Users className="w-6 h-6 text-success-600" />
              </div>
              <span className="text-success-600 font-semibold text-sm">+12% ce mois</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalLeads}</div>
            <div className="text-gray-600 text-sm">Leads générés</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-blue-600 font-semibold text-sm">Budget</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.adSpend.toLocaleString()}€</div>
            <div className="text-gray-600 text-sm">Dépenses pub/mois</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 rounded-lg p-3">
                <MousePointerClick className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-purple-600 font-semibold text-sm">{stats.ctr}% CTR</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.clicks.toLocaleString()}</div>
            <div className="text-gray-600 text-sm">Clics totaux</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 rounded-lg p-3">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-orange-600 font-semibold text-sm">Excellent</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.roas}x</div>
            <div className="text-gray-600 text-sm">ROAS moyen</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Performance Chart Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-primary-900" />
                  Performance des campagnes
                </h2>
                <select className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary-500">
                  <option>7 derniers jours</option>
                  <option>30 derniers jours</option>
                  <option>3 derniers mois</option>
                </select>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-primary-50 to-success-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-primary-300 mx-auto mb-4" />
                  <p className="text-gray-600">Graphique de performance</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Les données seront disponibles une fois vos campagnes lancées
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{stats.impressions.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Impressions</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{stats.cpl}€</div>
                  <div className="text-sm text-gray-600">CPL moyen</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{stats.ctr}%</div>
                  <div className="text-sm text-gray-600">Taux de clic</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Bell className="w-6 h-6 text-primary-900" />
                Activité récente
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`
                      w-2 h-2 rounded-full mt-2
                      ${activity.type === 'success' ? 'bg-success-500' : ''}
                      ${activity.type === 'info' ? 'bg-blue-500' : ''}
                      ${activity.type === 'warning' ? 'bg-orange-500' : ''}
                    `} />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{activity.event}</div>
                      <div className="text-sm text-gray-600">{activity.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <button className="w-full btn btn-primary flex items-center justify-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  Réserver un appel
                </button>
                <button className="w-full btn btn-secondary flex items-center justify-center gap-2 text-sm">
                  <FileText className="w-4 h-4" />
                  Télécharger rapport
                </button>
                <button className="w-full btn btn-secondary flex items-center justify-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  Support WhatsApp
                </button>
              </div>
            </div>

            {/* Account Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Mon forfait</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Forfait actuel</div>
                  <div className="font-bold text-lg text-primary-900">
                    {orderConfig?.packageId?.toUpperCase() || 'GROWTH'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Engagement</div>
                  <div className="font-semibold capitalize">{orderConfig?.duration || 'Mensuel'}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Prochain paiement</div>
                  <div className="font-semibold">29 Fév 2026</div>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Montant</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {orderConfig?.totalPrice || 997}€
                    </span>
                  </div>
                </div>
                <button className="w-full btn btn-outline flex items-center justify-center gap-2 text-sm mt-4">
                  <Settings className="w-4 h-4" />
                  Gérer mon forfait
                </button>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Besoin d'aide ?</h3>
              <p className="text-sm opacity-90 mb-4">
                Notre équipe est là pour vous accompagner dans votre réussite.
              </p>
              <a
                href="mailto:contact@upnextgrowth.com"
                className="btn btn-outline w-full flex items-center justify-center gap-2 text-sm"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
