import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { 
  CheckCircle, 
  Download, 
  Users, 
  Mail, 
  MessageCircle, 
  ArrowRight,
  Gift,
  Star
} from 'lucide-react';
import ebookData from '../data/mock';

const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(10);
  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDownload = () => {
    setDownloadStarted(true);
    // Mock download functionality
    console.log('Iniciando download do e-book...');
    alert('Download iniciado! (Funcionalidade mock)');
  };

  const handleJoinCommunity = () => {
    // Mock community join functionality
    console.log('Redirecionando para grupo da comunidade...');
    alert('Redirecionando para WhatsApp da comunidade... (Funcionalidade mock)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🎉 Parabéns! Compra realizada com sucesso!
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              Você agora tem acesso ao <strong>{ebookData.title}</strong>
            </p>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>Enviamos também por email as instruções de download</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Download Section */}
            <Card className="border-2 border-green-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Seu E-book Está Pronto!
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Clique no botão abaixo para fazer o download imediato
                  </p>
                </div>

                <Button 
                  onClick={handleDownload}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg mb-4"
                  disabled={downloadStarted}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {downloadStarted ? 'Download Iniciado!' : 'Baixar E-book Agora'}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Download automático em: <span className="font-bold text-green-600">{countdown}s</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Formato: PDF • Tamanho: ~15MB • Compatível com todos os dispositivos
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Próximos Passos
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Baixe seu e-book</h3>
                      <p className="text-gray-600 text-sm">Faça o download e salve em seus dispositivos</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Entre no grupo exclusivo</h3>
                      <p className="text-gray-600 text-sm">Conecte-se com outros produtores</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Comece a implementar</h3>
                      <p className="text-gray-600 text-sm">Aplique as técnicas em sua propriedade</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleJoinCommunity}
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Entrar no Grupo Exclusivo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bonus Section */}
          <Card className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <Gift className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                🎁 Bônus Especial Desbloqueado!
              </h2>
              <p className="text-green-100 mb-6">
                Por ser nosso cliente, você ganhou acesso a:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <Users className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Grupo VIP</h3>
                  <p className="text-green-100">Comunidade exclusiva de produtores</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <Star className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Atualizações</h3>
                  <p className="text-green-100">Novas versões sem custo adicional</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <MessageCircle className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Suporte</h3>
                  <p className="text-green-100">Tire dúvidas diretamente conosco</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Info */}
          <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">
              Precisa de ajuda?
            </h3>
            <p className="text-gray-600 mb-4">
              Nossa equipe está aqui para garantir seu sucesso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="mailto:suporte@agroguias.com" 
                className="text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                <Mail className="w-4 h-4 mr-1" />
                suporte@agroguias.com
              </a>
              <span className="hidden sm:block text-gray-400">•</span>
              <a 
                href="tel:+5511999999999" 
                className="text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                (11) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;