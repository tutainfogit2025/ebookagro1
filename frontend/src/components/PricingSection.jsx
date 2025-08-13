import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Download, Shield, Clock, CreditCard } from 'lucide-react';
import ebookData from '../data/mock';

const PricingSection = ({ onPurchase }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Investimento que se paga sozinho
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Por menos que uma saca de soja, você tem acesso a técnicas que podem aumentar sua produtividade em até 40%
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-green-600 shadow-2xl relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-green-600 text-white px-6 py-2 text-sm font-semibold">
                🔥 OFERTA LIMITADA
              </Badge>
            </div>

            <CardContent className="p-8 pt-12">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {ebookData.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  Guia completo para revolucionar sua agricultura
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-5xl font-bold text-green-600">{ebookData.price}</span>
                    <div className="text-left">
                      <div className="text-2xl text-gray-500 line-through">{ebookData.originalPrice}</div>
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-sm">
                        {ebookData.discount}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Pagamento único • Sem mensalidades
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={onPurchase}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Comprar Agora - Download Imediato
                </Button>

                {/* Payment Methods */}
                <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 mr-1" />
                    <span>Cartão</span>
                  </div>
                  <span>•</span>
                  <span>PIX</span>
                  <span>•</span>
                  <span>Boleto</span>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900 text-center mb-4">
                  O que está incluído:
                </h4>
                
                <div className="space-y-3">
                  {ebookData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600">
                      <div className="font-semibold">30 Dias</div>
                      <div>Garantia</div>
                    </div>
                  </div>
                  <div>
                    <Download className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600">
                      <div className="font-semibold">Download</div>
                      <div>Imediato</div>
                    </div>
                  </div>
                  <div>
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600">
                      <div className="font-semibold">Acesso</div>
                      <div>Vitalício</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Reversal */}
          <div className="text-center mt-8 p-6 bg-green-50 rounded-lg">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Garantia Incondicional de 30 Dias
            </h4>
            <p className="text-gray-600 text-sm">
              Se você não ficar 100% satisfeito com o conteúdo, devolvemos todo o seu dinheiro. 
              Sem perguntas, sem burocracia.
            </p>
          </div>

          {/* Urgency */}
          <div className="text-center mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium text-sm">
              ⏰ Oferta válida apenas esta semana! Não perca esta oportunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;