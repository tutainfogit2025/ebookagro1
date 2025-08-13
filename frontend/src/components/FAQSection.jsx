import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import ebookData from '../data/mock';

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Respostas para as principais perguntas sobre nosso e-book
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {ebookData.faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border-0 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Support */}
          <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-4">
              Nossa equipe de suporte está pronta para ajudar você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:suporte@agroguias.com" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                📧 suporte@agroguias.com
              </a>
              <span className="hidden sm:block text-gray-400">•</span>
              <a 
                href="tel:+5511999999999" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                📱 (11) 99999-9999
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Atendimento de segunda a sexta, das 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;