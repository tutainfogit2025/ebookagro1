import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, Download, Clock, Shield } from 'lucide-react';
import ebookData from '../data/mock';

const HeroSection = ({ onPurchase }) => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-sm px-4 py-2">
              🌱 Mais de {ebookData.stats.downloads} agricultores transformaram suas propriedades
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-green-600">Revolucione</span> sua agricultura com técnicas{' '}
                <span className="text-green-600">sustentáveis</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {ebookData.description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {ebookData.benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onPurchase}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Comprar por {ebookData.price}
                </Button>
                
                <div className="flex flex-col justify-center">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Download imediato</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span>Garantia de 30 dias</span>
                  </div>
                </div>
              </div>

              {/* Price Information */}
              <div className="flex items-center space-x-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-green-600">{ebookData.price}</span>
                  <span className="text-lg text-gray-500 line-through">{ebookData.originalPrice}</span>
                </div>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                  {ebookData.discount}
                </Badge>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {ebookData.stats.rating} ({ebookData.stats.testimonials}+ avaliações)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - E-book Cover */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main E-book Cover */}
              <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={ebookData.coverImage}
                  alt={ebookData.title}
                  className="w-full rounded-lg shadow-2xl"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-green-400 rounded-lg blur-2xl opacity-20 -z-10 transform scale-105"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-600 text-white rounded-full p-3 shadow-lg">
                <span className="font-bold text-sm">PDF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;