# Ejemplos de Integración - Legal Contracts Management

## 🔌 API Testing Examples

### 1. Autenticación Completa

```bash
# Login inicial
curl -X POST http://localhost:1337/api/auth/local \
  -H "Content-Type: application/json" \
  -d '{
    "identifier": "admin@example.com",
    "password": "Admin123!"
  }' \
  -w "\nHTTP: %{http_code}\nTime: %{time_total}s\n"

# Refresh token
curl -X POST http://localhost:1337/api/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "your-refresh-token-here"
  }'

# Logout con revocación
curl -X POST http://localhost:1337/api/auth/logout \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "your-refresh-token-here",
    "revokeAll": false
  }'
```

### 2. Gestión de Proyectos

```bash
# Crear proyecto
curl -X POST http://localhost:1337/api/projects \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "title": "Enterprise Software License 2024",
      "description": "Comprehensive software licensing project",
      "client": "TechCorp Industries",
      "clientContact": {
        "name": "Sarah Johnson",
        "email": "sarah@techcorp.com",
        "phone": "+1-555-0123"
      },
      "status": "active",
      "priority": "high",
      "budget": 150000.00
    }
  }'

# Listar proyectos con filtros
curl -X GET "http://localhost:1337/api/projects?filters[status][\$eq]=active&sort=createdAt:desc&pagination[limit]=10" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 3. Upload de Documentos Base64

```bash
# Upload documento base64 (ejemplo con PDF simple)
curl -X POST http://localhost:1337/api/documents/upload-base64 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "contract-template.pdf",
    "data": "data:application/pdf;base64,JVBERi0xLjMKJeXi5OTkCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwo+PgplbmRvYmoKeHJlZgowIDMKMDAwMDAwMDAwMCA2NTUzNSBmCjAwMDAwMDAwMDkgMDAwMDAgbgowMDAwMDAwMDE3IDAwMDAwIG4KdHJhaWxlcgo8PAovU2l6ZSAzCi9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0NQolJUVPRg==",
    "contractId": 1,
    "description": "Main contract template document",
    "documentType": "contract"
  }' \
  -w "\nHTTP: %{http_code}\nTime: %{time_total}s\n"
```

### 4. Crear y Gestionar Contratos

```bash
# Crear contrato
curl -X POST http://localhost:1337/api/contracts \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "title": "Software License Agreement - Enterprise",
      "description": "Comprehensive software licensing with support",
      "contractNumber": "SLA-2024-001",
      "type": "license",
      "status": "draft",
      "priority": "high",
      "project": 1,
      "value": 120000.00,
      "currency": "USD",
      "customAttributes": {
        "contract_value_range": "100k+",
        "risk_assessment": "medium"
      }
    }
  }'

# Firmar documento
curl -X POST http://localhost:1337/api/documents/1/sign \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "signature": "digital_signature_base64_here",
    "signatureData": {
      "method": "digital",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  }'
```

### 5. Generación de Contraseñas

```bash
# Generar contraseña automática y enviar por email
curl -X POST http://localhost:1337/api/users/2/generate-password \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -w "\nHTTP: %{http_code}\nTime: %{time_total}s\n"
```

### 6. Consulta de Audit Logs

```bash
# Audit logs con filtros
curl -X GET "http://localhost:1337/api/audit-logs?filters[event][\$contains]=auth&sort=timestamp:desc&pagination[limit]=20" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Audit logs por usuario
curl -X GET "http://localhost:1337/api/audit-logs?filters[userEmail][\$eq]=admin@example.com&sort=timestamp:desc" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🖥️ Frontend Integration Examples

### 1. Service Usage en React

```javascript
// AuthService usage
import { AuthService } from '@/services/auth.service';

// Login
const handleLogin = async (credentials) => {
  try {
    const authData = await AuthService.login(credentials);
    console.log('Login successful:', authData);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

// Check permissions
const canCreateContract = AuthService.hasPermission('contracts.create');
const isAdmin = AuthService.hasRole('admin');
```

### 2. File Upload con Base64

```javascript
// FileService usage
import { FileService } from '@/services/file.service';

const handleFileUpload = async (file, contractId) => {
  try {
    // Validar archivo
    const validation = FileService.validateFile(file);
    if (!validation.isValid) {
      throw new Error(validation.error);
    }

    // Upload con progress
    const result = await FileService.uploadFileAsBase64(
      file,
      contractId,
      'Contract document',
      'contract',
      (progress) => {
        console.log(`Upload progress: ${progress}%`);
      }
    );

    console.log('Upload successful:', result);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

### 3. API Service Usage

```javascript
// API Service usage
import { apiService } from '@/services/api';

// CRUD operations
const createContract = async (contractData) => {
  try {
    const contract = await apiService.post('/contracts', { data: contractData });
    return contract;
  } catch (error) {
    console.error('Create contract failed:', error);
    throw error;
  }
};

const getContracts = async (filters = {}) => {
  try {
    const response = await apiService.get('/contracts', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Get contracts failed:', error);
    throw error;
  }
};
```

## 🗄️ Database Schema Examples

### Content Types Relations

```sql
-- Projects table structure
CREATE TABLE projects (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  client VARCHAR(255) NOT NULL,
  client_contact JSON,
  project_manager_id INT,
  status ENUM('active', 'on_hold', 'completed', 'cancelled') DEFAULT 'active',
  priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
  start_date DATE,
  end_date DATE,
  budget DECIMAL(15,2),
  custom_attributes JSON,
  metadata JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contracts table structure  
CREATE TABLE contracts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  contract_number VARCHAR(100) UNIQUE,
  type ENUM('service_agreement', 'nda', 'employment', 'vendor', 'license', 'partnership', 'other') DEFAULT 'service_agreement',
  status ENUM('draft', 'review', 'approved', 'signed', 'active', 'completed', 'terminated', 'cancelled') DEFAULT 'draft',
  priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
  project_id INT,
  assigned_to_id INT,
  value DECIMAL(15,2),
  currency VARCHAR(3) DEFAULT 'USD',
  signature_status JSON,
  custom_attributes JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id),
  INDEX idx_status (status),
  INDEX idx_type (type),
  INDEX idx_project (project_id)
);
```

## 🔐 Security Examples

### JWT Token Structure

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com",
    "firstName": "System",
    "lastName": "Administrator",
    "role": {
      "id": 1,
      "name": "SuperAdmin",
      "type": "superadmin"
    }
  },
  "expiresIn": "7d"
}
```

### Permissions Matrix

```javascript
const rolePermissions = {
  superadmin: ['*'], // All permissions
  admin: [
    'users.*',
    'projects.*', 
    'contracts.*',
    'documents.*',
    'categories.*',
    'tags.*',
    'attributes.*',
    'audit-logs.view'
  ],
  legal: [
    'users.view',
    'projects.*',
    'contracts.*', 
    'documents.*',
    'notes.*',
    'categories.view',
    'tags.*'
  ],
  viewer: [
    'users.view',
    'projects.view',
    'contracts.view',
    'documents.view',
    'notes.view',
    'categories.view',
    'tags.view'
  ],
  auditor: [
    'audit-logs.*',
    'users.view',
    'projects.view', 
    'contracts.view',
    'documents.view'
  ]
};
```

## 📊 Audit Log Examples

### Sample Audit Log Entries

```json
[
  {
    "id": 1,
    "event": "auth.login",
    "entityType": "authentication", 
    "userId": 1,
    "userEmail": "admin@example.com",
    "ipAddress": "192.168.1.100",
    "userAgent": "Mozilla/5.0...",
    "statusCode": 200,
    "timestamp": "2024-01-15T10:30:00Z",
    "details": {
      "identifier": "admin@example.com",
      "success": true
    }
  },
  {
    "id": 2, 
    "event": "file.upload",
    "entityType": "document",
    "entityId": "1",
    "userId": 1,
    "userEmail": "admin@example.com",
    "statusCode": 200,
    "timestamp": "2024-01-15T10:35:00Z",
    "details": {
      "fileName": "contract.pdf",
      "fileSize": 156789,
      "success": true
    }
  }
]
```

## 🚀 Deployment Examples

### Environment Variables

**Backend (.env):**
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS="production-key-1,production-key-2"
API_TOKEN_SALT=production-api-salt
ADMIN_JWT_SECRET=production-admin-secret
JWT_SECRET=production-jwt-secret

# Production Database
DATABASE_CLIENT=mysql
DATABASE_HOST=your-mysql-host
DATABASE_PORT=3306
DATABASE_NAME=legal_contracts_prod
DATABASE_USERNAME=strapi_prod
DATABASE_PASSWORD=secure-password

# Production SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@company.com
SMTP_PASSWORD=your-app-password
```

**Frontend (.env):**
```env
VITE_API_URL=https://api.yourcompany.com/api
VITE_STRAPI_URL=https://api.yourcompany.com
VITE_APP_NAME=Legal Contracts Manager
VITE_NODE_ENV=production
```

### Docker Compose Example

```yaml
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: legal_contracts_db
      MYSQL_USER: strapi_user
      MYSQL_PASSWORD: strapi_password
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

  backend:
    build: ./backend
    environment:
      DATABASE_HOST: mysql
      DATABASE_PORT: 3306
      DATABASE_NAME: legal_contracts_db
      DATABASE_USERNAME: strapi_user
      DATABASE_PASSWORD: strapi_password
    ports:
      - "1337:1337"
    depends_on:
      - mysql

  frontend:
    build: ./frontend
    environment:
      VITE_API_URL: http://backend:1337/api
    ports:
      - "5173:5173"
    depends_on:
      - backend

volumes:
  mysql_data:
```

## 📝 Frontend Form Examples

### Dynamic Form Builder

```javascript
// Formulario dinámico basado en attribute-definitions
import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services/api';

const DynamicForm = ({ entityType, entityId }) => {
  const { data: attributes } = useQuery(
    ['attributes', entityType],
    () => apiService.get(`/attribute-definitions?filters[entityType][$eq]=${entityType}`)
  );

  const renderField = (attr) => {
    switch (attr.fieldType) {
      case 'text':
        return (
          <input
            type="text"
            name={attr.name}
            placeholder={attr.placeholder}
            required={attr.isRequired}
          />
        );
      case 'select':
        const options = JSON.parse(attr.options || '{}').choices || [];
        return (
          <select name={attr.name} required={attr.isRequired}>
            {options.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            name={attr.name}
            placeholder={attr.placeholder}
            required={attr.isRequired}
            rows={4}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form>
      {attributes?.data?.map(attr => (
        <div key={attr.id} className="form-group">
          <label className="form-label">
            {attr.label}
            {attr.isRequired && <span className="text-red-500">*</span>}
          </label>
          {renderField(attr)}
          {attr.helpText && (
            <p className="form-help">{attr.helpText}</p>
          )}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};
```

## 🧪 Testing Scripts

### Backend API Testing

```bash
#!/bin/bash
# test-api.sh

API_URL="http://localhost:1337/api"

echo "🧪 Testing Legal Contracts API..."

# Test login
echo "1. Testing login..."
LOGIN_RESPONSE=$(curl -s -X POST "$API_URL/auth/local" \
  -H "Content-Type: application/json" \
  -d '{"identifier": "admin@example.com", "password": "Admin123!"}')

TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.jwt')
REFRESH_TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.refreshToken')

if [ "$TOKEN" != "null" ]; then
  echo "✅ Login successful"
else
  echo "❌ Login failed"
  exit 1
fi

# Test create project
echo "2. Testing project creation..."
PROJECT_RESPONSE=$(curl -s -X POST "$API_URL/projects" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "title": "Test Project API",
      "client": "Test Client",
      "status": "active"
    }
  }')

PROJECT_ID=$(echo "$PROJECT_RESPONSE" | jq -r '.data.id')
if [ "$PROJECT_ID" != "null" ]; then
  echo "✅ Project creation successful (ID: $PROJECT_ID)"
else
  echo "❌ Project creation failed"
fi

# Test file upload
echo "3. Testing file upload..."
UPLOAD_RESPONSE=$(curl -s -X POST "$API_URL/documents/upload-base64" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "test.pdf",
    "data": "data:application/pdf;base64,JVBERi0xLjMKJeXi5OTkCjEgMCBvYmo=",
    "description": "Test upload"
  }')

DOCUMENT_ID=$(echo "$UPLOAD_RESPONSE" | jq -r '.data.id')
if [ "$DOCUMENT_ID" != "null" ]; then
  echo "✅ File upload successful (ID: $DOCUMENT_ID)"
else
  echo "❌ File upload failed"
fi

# Test token refresh
echo "4. Testing token refresh..."
REFRESH_RESPONSE=$(curl -s -X POST "$API_URL/auth/refresh" \
  -H "Content-Type: application/json" \
  -d "{\"refreshToken\": \"$REFRESH_TOKEN\"}")

NEW_TOKEN=$(echo "$REFRESH_RESPONSE" | jq -r '.jwt')
if [ "$NEW_TOKEN" != "null" ]; then
  echo "✅ Token refresh successful"
else
  echo "❌ Token refresh failed"
fi

echo "🎉 API testing completed!"
```

## 📋 Complete Project Structure

```
legal-contracts-management/
├── README.md                           # Main documentation
├── EJEMPLOS_INTEGRACION.md            # This file
├── package.json                       # Root package.json
├── 
├── backend/                           # Strapi Backend
│   ├── package.json                   # Strapi dependencies
│   ├── .env.example                   # Environment template
│   ├── config/
│   │   ├── database.js               # MySQL configuration
│   │   ├── middlewares.js            # CORS + audit middleware
│   │   ├── plugins.js                # Email, upload, auth config
│   │   └── server.js                 # Server configuration
│   ├── src/
│   │   ├── api/                      # Content Types
│   │   │   ├── project/content-types/project/schema.json
│   │   │   ├── contract/content-types/contract/schema.json
│   │   │   ├── document/
│   │   │   │   ├── content-types/document/schema.json
│   │   │   │   ├── controllers/document.js
│   │   │   │   └── routes/document.js
│   │   │   ├── document-version/content-types/document-version/schema.json
│   │   │   ├── note/content-types/note/schema.json
│   │   │   ├── attribute-definition/content-types/attribute-definition/schema.json
│   │   │   ├── category/content-types/category/schema.json
│   │   │   ├── subcategory/content-types/subcategory/schema.json
│   │   │   ├── tag/content-types/tag/schema.json
│   │   │   ├── audit-log/content-types/audit-log/schema.json
│   │   │   └── refresh-token/content-types/refresh-token/schema.json
│   │   ├── extensions/
│   │   │   └── users-permissions/
│   │   │       ├── controllers/
│   │   │       │   ├── auth.js        # Extended auth controller
│   │   │       │   └── user.js        # Extended user controller
│   │   │       └── routes/
│   │   │           ├── auth.js        # Auth routes
│   │   │           └── user.js        # User routes
│   │   └── middlewares/
│   │       └── audit-log.js           # Audit logging middleware
│   └── scripts/
│       └── seed.js                   # Seed script with sample data
│
├── frontend/                         # Vite + React Frontend
│   ├── package.json                  # Frontend dependencies
│   ├── .env.example                  # Frontend environment template
│   ├── vite.config.ts               # Vite configuration
│   ├── tailwind.config.js           # Tailwind configuration
│   ├── index.html                   # HTML template
│   └── src/
│       ├── main.tsx                 # App entry point
│       ├── App.tsx                  # Main app component
│       ├── types/
│       │   └── index.ts             # TypeScript type definitions
│       ├── services/
│       │   ├── api.ts               # API service with interceptors
│       │   ├── auth.service.ts      # Authentication service
│       │   └── file.service.ts      # File handling service
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Layout.tsx       # Main layout
│       │   │   ├── AuthLayout.tsx   # Auth layout
│       │   │   ├── Sidebar.tsx      # Sidebar component
│       │   │   └── Header.tsx       # Header component
│       │   └── ui/
│       │       └── LoadingSpinner.tsx
│       ├── pages/
│       │   ├── auth/
│       │   │   └── LoginPage.tsx    # Login page
│       │   ├── projects/
│       │   │   ├── ProjectsPage.tsx
│       │   │   └── ProjectDetailPage.tsx
│       │   ├── contracts/
│       │   │   ├── ContractsPage.tsx
│       │   │   └── ContractDetailPage.tsx
│       │   ├── documents/
│       │   │   └── DocumentsPage.tsx
│       │   ├── users/
│       │   │   └── UsersPage.tsx
│       │   ├── attributes/
│       │   │   └── AttributesPage.tsx
│       │   ├── categories/
│       │   │   └── CategoriesPage.tsx
│       │   ├── tags/
│       │   │   └── TagsPage.tsx
│       │   ├── audit/
│       │   │   └── AuditLogsPage.tsx
│       │   ├── settings/
│       │   │   └── SettingsPage.tsx
│       │   ├── DashboardPage.tsx    # Main dashboard
│       │   └── NotFoundPage.tsx     # 404 page
│       └── styles/
│           └── globals.css          # Global styles
│
└── docs/                           # Additional documentation
    ├── API_ENDPOINTS.md            # Complete API documentation
    ├── SETUP_GUIDE.md             # Detailed setup guide
    └── TROUBLESHOOTING.md         # Common issues and solutions
```

## 🏆 Project Completion Summary

**✅ TODOS LOS REQUISITOS COMPLETADOS:**

1. **Backend Strapi + MySQL** ✓
   - 11 Content Types con relaciones complejas
   - Autenticación JWT + refresh tokens persistentes
   - Upload base64 con endpoint custom
   - Middleware de audit logging automático
   - Plugin email con generación de passwords
   - 5 roles con permisos granulares

2. **Frontend Vite + React + Tailwind** ✓
   - 10 páginas funcionales completas
   - Servicios API con interceptores automáticos  
   - Upload archivos con conversión base64
   - Diseño responsive mobile-first
   - TypeScript con tipos completos
   - Manejo de errores y loading states

3. **Scripts y Datos** ✓
   - Script de seed con datos realistas
   - Cuentas demo funcionales
   - Ejemplos de integración API
   - Documentación completa

**🌟 ESTADO FINAL: PROYECTO 100% FUNCIONAL Y COMPLETO**