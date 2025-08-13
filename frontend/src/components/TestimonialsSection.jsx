import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import ebookData from '../data/mock';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais de {ebookData.stats.testimonials} produtores já transformaram suas propriedades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ebookData.testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
              
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-green-600 opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600">Aumento Médio de Produtividade</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-600">Redução Média de Custos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;