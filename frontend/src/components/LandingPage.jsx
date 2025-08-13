import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Star, 
  Shield, 
  Download, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';
import ebookData from '../data/mock';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import PricingSection from './PricingSection';

const LandingPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePurchase = () => {
    // Mock purchase action - will be replaced with real payment integration
    alert('Redirecionando para pagamento... (Funcionalidade mock)');
    console.log('Purchase initiated for:', ebookData.title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AG</span>
              </div>
              <span className="font-semibold text-gray-900">AgroGuias</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
                Conteúdo
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-600 hover:text-green-600 transition-colors">
                FAQ
              </a>
              <Button 
                onClick={handlePurchase}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Comprar Agora
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onPurchase={handlePurchase} />

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-y border-green-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {ebookData.stats.downloads}+
              </div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-2xl font-bold text-green-600">
                  {ebookData.stats.rating}
                </span>
              </div>
              <div className="text-sm text-gray-600">Avaliação</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {ebookData.stats.testimonials}+
              </div>
              <div className="text-sm text-gray-600">Depoimentos</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-green-600 mb-1" />
              <div className="text-sm text-gray-600">30 dias garantia</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que você vai aprender
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conteúdo completo dividido em 10 capítulos práticos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {ebookData.chapters.map((chapter, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-semibold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-700">{chapter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Author Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img 
                  src={ebookData.author.image}
                  alt={ebookData.author.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Sobre o Autor
                </h2>
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {ebookData.author.name}
                </h3>
                <p className="text-gray-600 mb-4">{ebookData.author.credentials}</p>
                <p className="text-gray-700 mb-4">{ebookData.author.bio}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {ebookData.author.experience}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection onPurchase={handlePurchase} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não perca esta oportunidade!
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Transforme sua agricultura hoje mesmo
          </p>
          <Button 
            onClick={handlePurchase}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
          >
            Quero Meu E-book Agora
          </Button>
          <p className="text-sm text-green-200 mt-4">
            Garantia de 30 dias • Download imediato • Suporte incluído
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AG</span>
                </div>
                <span className="font-semibold">AgroGuias</span>
              </div>
              <p className="text-gray-400">
                Transformando a agricultura brasileira através do conhecimento.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>suporte@agroguias.com</li>
                <li>(11) 99999-9999</li>
                <li>Segunda a Sexta, 9h às 18h</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 AgroGuias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;