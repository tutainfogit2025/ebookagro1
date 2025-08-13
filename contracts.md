# API Contracts - Landing Page E-book

## Overview
Este documento define os contratos de API e integrações necessárias para transformar a landing page mock em uma aplicação full-stack funcional.

## Dados Mockados para Remover
- `/app/frontend/src/data/mock.js` - Todos os dados estáticos serão substituídos por APIs reais
- Alertas de mock nos componentes (handlePurchase, handleDownload, etc.)

## Backend APIs Necessárias

### 1. E-book Management API
```
GET /api/ebooks
- Retorna informações do e-book (title, price, description, features, etc.)
- Substitui: ebookData do mock.js

GET /api/ebooks/{id}
- Retorna detalhes específicos de um e-book
```

### 2. Payment Integration API
```
POST /api/payments/create
- Cria sessão de pagamento (PagSeguro/Mercado Pago)
- Body: { ebookId, customerEmail, customerName }
- Retorna: { paymentUrl, orderId }

GET /api/payments/status/{orderId}
- Verifica status do pagamento
- Retorna: { status, orderId, customerEmail }

POST /api/payments/webhook
- Webhook para receber notificações de pagamento
- Atualiza status do pedido no banco
```

### 3. Order Management API
```
GET /api/orders/{orderId}
- Retorna informações do pedido
- Usado na página de obrigado

POST /api/orders/{orderId}/download
- Gera link temporário de download seguro
- Apenas para pedidos pagos
- Retorna: { downloadUrl, expiresAt }
```

### 4. Customer API
```
POST /api/customers
- Cria/atualiza dados do cliente
- Body: { email, name, phone }
```

### 5. Analytics API (Opcional)
```
GET /api/stats
- Retorna estatísticas para exibição (downloads, avaliações, etc.)
- Substitui: ebookData.stats do mock
```

## Database Models

### EBook
```
{
  id: String,
  title: String,
  subtitle: String,
  description: String,
  price: Number,
  originalPrice: Number,
  coverImage: String,
  fileUrl: String, // Link para arquivo PDF
  features: Array,
  benefits: Array,
  chapters: Array,
  author: Object,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Order
```
{
  id: String,
  ebookId: String,
  customerEmail: String,
  customerName: String,
  customerPhone: String,
  amount: Number,
  status: String, // pending, paid, cancelled, refunded
  paymentProvider: String, // pagseguro, mercadopago
  paymentId: String,
  paymentUrl: String,
  downloadCount: Number,
  lastDownloadAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Customer
```
{
  id: String,
  email: String,
  name: String,
  phone: String,
  orders: Array<String>, // Order IDs
  createdAt: Date,
  updatedAt: Date
}
```

## Payment Integration Requirements

### PagSeguro Integration
- Vai precisar de: PAGSEGURO_APPLICATION_ID, PAGSEGURO_APPLICATION_KEY
- Implementar webhook para receber notificações
- Gerar links de pagamento via API

### Mercado Pago Integration (Alternativa)
- Vai precisar de: MERCADOPAGO_ACCESS_TOKEN
- Implementar webhook para receber notificações
- Gerar preference de pagamento

## Frontend Changes Required

### 1. Remove Mock Data
- Deletar /app/frontend/src/data/mock.js
- Criar serviço para APIs: /app/frontend/src/services/api.js

### 2. Update Components
- `LandingPage.jsx`: Buscar dados do e-book via API
- `HeroSection.jsx`: Conectar botão de compra com pagamento real
- `PricingSection.jsx`: Conectar com API de pagamento
- `ThankYouPage.jsx`: Buscar status do pedido e permitir download real

### 3. Add Loading States
- Spinners durante carregamento de dados
- Estados de erro para APIs
- Feedback visual durante processo de pagamento

### 4. Add Real Navigation
- Parsing de orderId da URL na página /obrigado
- Redirect após pagamento bem-sucedido

## File Upload/Storage
- Implementar upload seguro de arquivos PDF
- Armazenar arquivos em local protegido
- Gerar URLs temporárias para download

## Security Considerations
- Validar webhooks de pagamento (assinatura)
- Proteger endpoints de download
- Sanitizar inputs do usuário
- Rate limiting em APIs públicas

## Environment Variables Needed
```
# Payment
PAGSEGURO_APPLICATION_ID=
PAGSEGURO_APPLICATION_KEY=
PAGSEGURO_ENVIRONMENT=sandbox|production

# File Storage
UPLOAD_DIR=/app/uploads
MAX_FILE_SIZE=50MB

# JWT for download links
JWT_SECRET=
DOWNLOAD_LINK_EXPIRY=24h
```

## Testing Strategy
1. Testar fluxo completo de compra
2. Testar webhooks de pagamento
3. Testar download de arquivos
4. Testar estados de erro
5. Testar responsividade e UX

## Deployment Notes
- Configurar webhooks nos provedores de pagamento
- Definir URLs de callback corretas
- Configurar storage seguro para arquivos
- Monitorar logs de pagamento