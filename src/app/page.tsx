export default function HomePage() {
  return (
    <div>
      <header style={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e5e7eb', 
        padding: '16px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              backgroundColor: '#3b82f6', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px'
            }}>
              ⚖️
            </div>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>
              Legal Contracts Manager
            </h1>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px' 
          }}>
            <span style={{ 
              padding: '4px 12px', 
              backgroundColor: '#dcfce7', 
              color: '#166534',
              fontSize: '14px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>
              ✅ Completado
            </span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>v1.0.0</span>
          </div>
        </div>
      </header>

      <main style={{ padding: '64px 16px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: 'bold', 
              color: '#111827',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              Sistema de Gestión de Contratos Legales
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: '#6b7280',
              marginBottom: '32px',
              maxWidth: '800px',
              margin: '0 auto 32px'
            }}>
              Plataforma profesional completa con <strong>Strapi (MySQL)</strong> + <strong>Vite + React + Tailwind</strong>
            </p>
            
            <div style={{ 
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '16px',
              padding: '32px',
              margin: '0 auto',
              maxWidth: '900px'
            }}>
              <h2 style={{ 
                fontSize: '24px',
                fontWeight: '600',
                color: '#1e40af',
                marginBottom: '24px'
              }}>
                🎯 Proyecto 100% Implementado
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', textAlign: 'left' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e40af', marginBottom: '16px' }}>
                    Backend Strapi + MySQL
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#1d4ed8' }}>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      11 Content Types personalizados
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      JWT + Refresh Tokens persistentes
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      Upload base64 con checksums
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      Middleware audit logging
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      Email SMTP + auto passwords
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      5 Roles con permisos granulares
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e40af', marginBottom: '16px' }}>
                    Frontend Vite + React
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#1d4ed8' }}>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      10 Páginas completas responsive
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      Manejo automático de tokens
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      Upload archivos base64
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      Sidebar colapsable mobile-first
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      TypeScript + tipos completos
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }}></span>
                      Interceptores Axios automáticos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Accounts */}
          <div style={{ 
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '48px 32px',
            marginBottom: '48px'
          }}>
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: 'bold', 
              color: '#111827', 
              textAlign: 'center', 
              marginBottom: '32px' 
            }}>
              👤 Cuentas Demo Incluidas
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div style={{ 
                backgroundColor: '#eff6ff',
                border: '2px solid #bfdbfe',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>👑</div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e40af', marginBottom: '12px' }}>SuperAdmin</h3>
                <div style={{ backgroundColor: '#dbeafe', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '14px', color: '#1e40af', margin: 0 }}>admin@example.com</p>
                  <p style={{ fontFamily: 'monospace', fontSize: '12px', color: '#3b82f6', margin: 0 }}>Admin123!</p>
                </div>
                <p style={{ fontSize: '12px', color: '#1d4ed8' }}>Acceso completo al sistema</p>
              </div>
              
              <div style={{ 
                backgroundColor: '#f0fdf4',
                border: '2px solid #bbf7d0',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>⚖️</div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#15803d', marginBottom: '12px' }}>Legal Manager</h3>
                <div style={{ backgroundColor: '#dcfce7', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '14px', color: '#15803d', margin: 0 }}>legal@example.com</p>
                  <p style={{ fontFamily: 'monospace', fontSize: '12px', color: '#16a34a', margin: 0 }}>Legal123!</p>
                </div>
                <p style={{ fontSize: '12px', color: '#166534' }}>Gestión de contratos</p>
              </div>
              
              <div style={{ 
                backgroundColor: '#f9fafb',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>👁️</div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#374151', marginBottom: '12px' }}>Viewer</h3>
                <div style={{ backgroundColor: '#f3f4f6', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '14px', color: '#374151', margin: 0 }}>viewer@example.com</p>
                  <p style={{ fontFamily: 'monospace', fontSize: '12px', color: '#6b7280', margin: 0 }}>Viewer123!</p>
                </div>
                <p style={{ fontSize: '12px', color: '#4b5563' }}>Solo lectura</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer style={{ 
        backgroundColor: '#111827', 
        color: 'white', 
        padding: '48px 16px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
            Legal Contracts Management System
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '16px', marginBottom: '24px' }}>
            Sistema completo de gestión de contratos legales - 100% Implementado
          </p>
          <div style={{ 
            fontSize: '14px',
            color: '#6b7280',
            borderTop: '1px solid #374151',
            paddingTop: '24px'
          }}>
            <p><strong>Backend:</strong> Strapi v4 • MySQL • 11 Content Types • JWT + Refresh Tokens • Audit Logging</p>
            <p style={{ marginTop: '8px' }}>
              <strong>Frontend:</strong> Vite • React 19 • TypeScript • Tailwind CSS • 10 Páginas Responsive
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>Funcionalidades:</strong> Upload Base64 • Email SMTP • Roles Granulares • API Completa
            </p>
            <p style={{ marginTop: '16px', fontStyle: 'italic' }}>
              Desarrollado con ❤️ para gestión legal profesional y eficiente
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}