# Levantamiento de Información - Sistema de Agendamiento de Gym

**Proyecto:** Sistema de Agendamiento por Planes Mensuales para Gym  
**Fecha:** Diciembre 2025  
**Moneda:** Pesos Chilenos (CLP)  
**Integraciones:** VirtualPos.cl, Webflow.cl  

---

## 1. MÓDULO DE ADMINISTRACIÓN GENERAL

### 1.1 Gestión de Sucursales
- **Crear/Editar/Eliminar sucursales**
  - Nombre de sucursal
  - Dirección completa
  - Teléfono/Email de contacto
  - Horario de atención
  - Datos bancarios (para comisiones)
  - Identificador único por sucursal
  - Estado (Activa/Inactiva)

### 1.2 Gestión de Profesores/Entrenadores
- **Registro de profesores**
  - Nombre completo
  - RUT
  - Teléfono/Email
  - Especialidades (Yoga, CrossFit, Pilates, etc.)
  - Sucursal asignada(s)
  - Porcentaje de comisión
  - Cuenta bancaria (para transferencias)
  - Documento de identidad
  - Estado (Activo/Inactivo)
  - Fecha de ingreso

### 1.3 Gestión de Planes
- **Tipos de planes**
  - Nombre del plan
  - Duración (30, 60, 90 días)
  - Valor mensual (CLP)
  - Número de clases/créditos incluidos
  - Descripción de beneficios
  - Sucursal(es) disponible(s)
  - Estado (Activo/Inactivo)
  - Descuentos por cantidad (1, 3, 6, 12 meses)

- **Planes especiales**
  - Planes ilimitados
  - Planes de clases específicas por profesor
  - Planes de membresía simple (sin clases)
  - Planes para nuevos usuarios

---

## 2. MÓDULO DE USUARIOS/CLIENTES

### 2.1 Registro y Perfil de Cliente
- **Datos principales**
  - Nombre completo
  - RUT
  - Email
  - Teléfono
  - Género
  - Fecha de nacimiento
  - Dirección
  - Datos de emergencia

- **Datos de membresía**
  - Plan actual
  - Fecha de inicio del plan
  - Fecha de vencimiento del plan
  - Estado de la membresía (Activa/Expirada/Pausada)
  - Créditos/Clases disponibles
  - Créditos/Clases utilizadas
  - Historial de planes

### 2.2 Estado de Cuenta
- **Resumen financiero**
  - Saldo adeudado (CLP)
  - Cuota del mes actual
  - Últimos pagos (fecha, monto, método)
  - Próxima fecha de vencimiento
  - Plan actual y valor
  - Historial de pagos (últimos 12 meses)

- **Estado de suscripción**
  - Suscripción activa/inactiva
  - Método de pago actual
  - Renovación automática (Sí/No)

---

## 3. MÓDULO DE AGENDAMIENTO

### 3.1 Catálogo de Clases
- **Información de clase**
  - Nombre de la clase
  - Descripción
  - Profesor/Entrenador
  - Sucursal
  - Horario (Inicio/Fin)
  - Día(s) de la semana (Lun-Dom)
  - Capacidad máxima
  - Tipo de clase (Grupal/Individual)
  - Modalidad (Presencial/Online)
  - Requisitos previos (si aplica)
  - Estado (Activa/Cancelada)

### 3.2 Horarios y Disponibilidad
- **Agenda de profesor**
  - Horarios disponibles por día
  - Clases recurrentes
  - Clases puntuales
  - Vacaciones/Ausencias
  - Máximo de horas/clases por día
  - Días libres

### 3.3 Agendamiento Manual (Vendedor)
- **Proceso inicial**
  - Vendedor busca cliente en sistema
  - Si no existe, crea nuevo cliente
  - Selecciona plan a contratar
  - Selecciona primera clase/cita
  - Genera cupón/comprobante de venta
  - Estado de agendamiento (Pendiente Pago/Pagado)

- **Agendamiento de cliente**
  - Cliente selecciona clase disponible
  - Visualiza horarios, profesor, sucursal
  - Confirmación de agendamiento
  - Recordatorio por email/SMS
  - Opción de cancelación (24 horas antes)

### 3.4 Cancelación y Reprogramación
- **Políticas**
  - Cancelación 24 horas antes sin costo
  - Cancelación < 24 horas: marcar falta
  - Lista de espera automática
  - Reprogramación a otra clase

---

## 4. MÓDULO DE PAGOS E INTEGRACIONES

### 4.1 Métodos de Pago
- **Integración VirtualPos.cl**
  - Tarjetas de crédito (Visa, Mastercard, American Express)
  - Transacciones seguras
  - Comisión por transacción
  - Confirmación automática de pago

- **Integración Webflow.cl**
  - Pagos por transferencia bancaria
  - Pagos PSE (si aplica)
  - Monedero digital
  - Suscripciones recurrentes

- **Otros métodos**
  - Efectivo (manual en sucursal)
  - Depósito bancario
  - Transferencia bancaria directa

### 4.2 Recaudación y Comisiones
- **Cálculo de comisiones**
  - Porcentaje por profesor
  - Porcentaje por vendedor
  - Base de cálculo (valor neto del plan)
  - Deducción de comisiones de plataforma

- **Gestión de comisiones**
  - Comisión por venta de plan
  - Comisión por clase agendada (si aplica)
  - Acumulación de comisiones por período
  - Pagos a profesores/vendedores
  - Reporte de comisiones por persona

### 4.3 Administración Financiera
- **Control de pagos**
  - Pagos recibidos vs. adeudados
  - Cuotas pagadas/impagadas por cliente
  - Flujo de caja mensual/anual
  - Ingresos por sucursal
  - Ingresos por plan
  - Análisis de comisiones

---

## 5. MÓDULO DE SISTEMA DE REFERIDOS

### 5.1 Registro y Gestión de Referidos
- **Estructura de referidos**
  - Cliente refiere a nuevo cliente
  - Validación de referencia (email/link único)
  - Confirmación de registro del referido

- **Beneficios**
  - Descuento para cliente que refiere (CLP)
  - Bonus para vendedor si aplica
  - Trazabilidad de referencia
  - Fecha de referencia y fecha de consolidación

### 5.2 Control y Seguimiento
- **Reportería de referidos**
  - Referidos activos por cliente
  - Referidos que convirtieron en membresía
  - Descuentos/bonificaciones otorgados
  - ROI de programa de referidos

---

## 6. MÓDULO DE REPORTES

### 6.1 Reportes por Vendedor
- **Desempeño de vendedor**
  - Número de planes vendidos (periodo)
  - Monto total vendido (CLP)
  - Clientes activos adquiridos
  - Tasa de retención de clientes
  - Comisiones generadas
  - Referidos atribuidos
  - Comparativa mes/mes
  - Top productos vendidos

### 6.2 Reportes Administrativos
- **Finanzas**
  - Ingresos totales por período
  - Ingresos por plan
  - Ingresos por sucursal
  - Comisiones por pagar
  - Deuda de clientes
  - Análisis de flujo de caja

- **Operacional**
  - Ocupación de clases (%)
  - Clases más populares
  - Profesores más solicitados
  - Horas pico
  - Tasa de inasistencia
  - Rotación de clientes (Churn)

- **Clientes**
  - Clientes activos/inactivos
  - Historial de pagos por cliente
  - Planes más vendidos
  - Duración promedio de membresía
  - LTV (Lifetime Value) de cliente

### 6.3 Reportes Operacionales
- **Gestión de personal**
  - Comisiones por profesor
  - Clases dictadas vs. programadas
  - Evaluación de profesores
  - Carga de trabajo por profesor

### 6.4 Exportación de Reportes
- **Formatos**
  - Excel (.xlsx)
  - PDF
  - CSV
  - Gráficos interactivos (dashboard)

---

## 7. MÓDULO DE DASHBOARD/ANALÍTICA

### 7.1 Dashboard Administrativo
- **KPIs principales**
  - Ingresos del mes (CLP)
  - Nuevos clientes (semana/mes)
  - Clientes activos
  - Ocupación promedio de clases (%)
  - Deuda pendiente
  - Comisiones por pagar

- **Gráficos**
  - Tendencia de ingresos (últimos 12 meses)
  - Distribución de planes
  - Ingresos por sucursal
  - Ocupación por hora/día
  - Cancelaciones/inasistencias

### 7.2 Dashboard de Vendedor
- **Métricas personales**
  - Planes vendidos en el período
  - Monto vendido (CLP)
  - Comisiones acumuladas
  - Referidos activos
  - Meta de venta vs. real

### 7.3 Dashboard de Cliente
- **Información personal**
  - Plan actual
  - Créditos disponibles
  - Próximas clases agendadas
  - Estado de cuenta
  - Último acceso

---

## 8. MÓDULO CRM (CUSTOMER RELATIONSHIP MANAGEMENT)

### 8.1 Gestión de Contactos y Segmentación
- **Base de datos centralizada**
  - Perfil completo del cliente (datos personales, RUT, contacto)
  - Historial de compras y planes
  - Historial de asistencia a clases
  - Preferencias de comunicación
  - Nivel de satisfacción
  - Score de valor de cliente (LTV proyectado)

- **Segmentación de clientes**
  - Por plan (Básico, Premium, Ilimitado)
  - Por estado (Activo, Inactivo, Vencido, Pausado)
  - Por antigüedad (Nuevo, 3-6 meses, 6-12 meses, >1 año)
  - Por inactividad (Sin clases en últimas 2 semanas, 1 mes, 3 meses)
  - Por valor económico (Bajo, Medio, Alto)
  - Por tipo de actividad preferida (Yoga, CrossFit, Pilates, etc.)
  - Geográfica por sucursal

### 8.2 Historial de Interacciones
- **Registro completo**
  - Todas las interacciones del cliente (venta, mensaje, llamada, clase)
  - Fecha y hora de cada interacción
  - Tipo de interacción (Venta, Soporte, Recordatorio, Promoción)
  - Canal utilizado (WhatsApp, Email, Push, SMS, Presencial)
  - Respuesta del cliente (Abierto, Leído, Ignorado, Respondido)
  - Notas y comentarios del vendedor/admin
  - Resolución de problemas o inquietudes

- **Timeline de cliente**
  - Vista cronológica completa de todas las acciones
  - Seguimiento de etapas del customer journey
  - Identificación de pain points

### 8.3 Sistema de Seguimiento (Pipeline)
- **Estados de seguimiento**
  - Prospecto (no ha comprado)
  - Cliente potencial (interesado, sin cierre)
  - Cliente nuevo (primera compra)
  - Cliente activo (plan vigente, activo en clases)
  - Cliente en riesgo (baja actividad, próximo a vencer)
  - Cliente inactivo (plan vencido, sin renovar)
  - Cliente recuperado (vuelve después de inactividad)
  - Cliente churn (desactivado permanentemente)

- **Métricas del pipeline**
  - Número de clientes por etapa
  - Tiempo promedio en cada etapa
  - Tasa de conversión entre etapas
  - Ingresos proyectados por etapa

### 8.4 Gestión de Campañas y Comunicaciones
- **Creación de campañas**
  - Nombre y descripción de campaña
  - Objetivo (Reactivación, Venta, Retención, Cross-sell)
  - Segmento de clientes seleccionado
  - Canal principal (WhatsApp, Email, Push, SMS)
  - Contenido del mensaje
  - Fecha de envío (Inmediato, Programado, Automático)
  - Variables dinámicas (Nombre cliente, Plan, Descuento, etc.)

- **Tipos de campañas automáticas**
  - Bienvenida (nuevo cliente)
  - Recordatorio de clase (24h, 1h antes)
  - Recordatorio de vencimiento (7 días, 3 días, 1 día antes)
  - Renovación de plan (automática o manual)
  - Recuperación de inactivos (2 semanas sin clases)
  - Oferta especial (cumpleaños, aniversario, plan vencido)
  - Confirmación de pago
  - Invitación a nuevas clases/promociones

- **Historial de campañas**
  - Campañas enviadas por cliente/segmento
  - Tasa de entrega y apertura
  - Tasa de respuesta y conversión
  - ROI por campaña
  - A/B testing de mensajes

---

## 9. MÓDULO DE GESTIÓN DE PLANTILLAS DE MENSAJES

### 9.1 Biblioteca de Plantillas
- **Estructura general de plantilla**
  - ID único de plantilla
  - Nombre descriptivo
  - Descripción del propósito
  - Canal (WhatsApp, Email, Push, SMS)
  - Categoría (Bienvenida, Recordatorio, Oferta, Recuperación)
  - Estado (Activa/Inactiva/Archivada)
  - Versión y fecha de creación
  - Autor/Propietario
  - Aprobación (Pendiente/Aprobada/Rechazada)

- **Contenido de plantilla**
  - Asunto (para Email)
  - Cuerpo del mensaje
  - Imagen/Media (si aplica)
  - Botones/CTA (Call-to-Action)
  - Variables dinámicas disponibles
  - Tokens de personalización ({{nombre}}, {{plan}}, {{descuento}})

### 9.2 Plantillas WhatsApp Business
- **Requisitos WhatsApp**
  - Plantillas pre-aprobadas por Meta
  - Idioma (español)
  - Categoría (Marketing, Utility, Authentication)
  - Variables permitidas por plantilla
  - Límite de caracteres
  - Número de parámetros

- **Tipos de plantillas WhatsApp**
  - **Bienvenida**: "Hola {{nombre}}, ¡Bienvenido a {{gym}}!"
  - **Recordatorio de clase**: "{{nombre}}, recuerda tu clase {{tipo_clase}} con {{profesor}} mañana a las {{hora}}"
  - **Recordatorio de vencimiento**: "Tu plan vence en {{días}} días. Renueva ahora con {{descuento}}% desc"
  - **Confirmación de pago**: "Pago recibido. Tu plan {{plan}} está activo hasta {{fecha_vencimiento}}"
  - **Oferta especial**: "{{nombre}}, 30% descuento en {{tipo_plan}} válido hasta {{fecha_límite}}"
  - **Recuperación**: "Te extrañamos {{nombre}}, vuelve con {{descuento}}% en tu próximo plan"
  - **Encuesta**: "¿Qué tal tu experiencia en {{gym}}? Dinos en esta breve encuesta"
  - **Actualización**: "Nueva clase: {{tipo_clase}} con {{profesor}} los {{días}} a las {{hora}}"

- **Gestión de estado de plantillas**
  - Versión 1, 2, 3... con histórico
  - Cambios realizados por versión
  - Aprobación/Rechazo por Meta
  - Fecha de aprobación
  - Validación de variables

### 9.3 Plantillas Email
- **Configuración de email**
  - Remitente (nombre y email)
  - Asunto personalizable
  - Diseño HTML responsive
  - Logos y colores corporativos
  - Pie de página con datos de contacto
  - Links de desuscripción (LGPD)

- **Tipos de plantillas Email**
  - **Bienvenida**: Presentación del gym y beneficios del plan
  - **Confirmación de compra**: Detalles del plan, fecha de inicio, créditos
  - **Recordatorio de vencimiento**: 30, 7, 3 días antes
  - **Recibo/Factura**: Documento de pago con detalles
  - **Newsletter**: Promociones, nuevas clases, tips
  - **Recuperación**: Oferta especial para clientes inactivos
  - **Encuesta**: Feedback de satisfacción con link a encuesta
  - **Noticia importante**: Cambios de horario, clausura, etc.
  - **Confirmación de agendamiento**: Detalles de clase, profesor, ubicación

- **Elementos de email**
  - Hero image (banner superior)
  - Secciones de contenido (máx 5)
  - Tabla de detalles (plan, fecha, valor)
  - Botones CTA (Aceptar, Renovar, Ver más)
  - Social media links
  - Unsubscribe link

### 9.4 Plantillas Push Notifications
- **Especificaciones Push**
  - Título (máx 65 caracteres)
  - Descripción (máx 240 caracteres)
  - Icono de notificación
  - Color de fondo
  - Sonido personalizado
  - Vibración
  - Acción al hacer click (deep link)

- **Tipos de plantillas Push**
  - **Recordatorio clase**: "Tu clase de {{tipo_clase}} inicia en 30 minutos"
  - **Oferta flash**: "⏰ Descuento 50% válido SOLO hoy en {{plan}}"
  - **Alerta vencimiento**: "⚠️ Tu plan vence en 1 día. Renueva ahora"
  - **Invitación**: "{{profesor}} te invita a nueva clase de {{tipo_clase}}"
  - **Confirmación**: "✓ Tu clase fue agendada correctamente"
  - **Encuesta**: "¿Cómo fue tu clase? Califica en 10 segundos"
  - **Actualización**: "Cambio de horario en {{tipo_clase}}, revisa detalles"

### 9.5 Plantillas SMS
- **Configuración SMS**
  - Remitente (nombre o número)
  - Máximo 160 caracteres (o 306 con Unicode)
  - Variables dinámicas limitadas
  - Enlace corto (bit.ly, etc.)

- **Tipos de plantillas SMS**
  - **Recordatorio**: "{{nombre}}, no olvides tu clase {{tipo}} mañana a {{hora}} con {{profesor}}"
  - **Alerta**: "Tu plan vence mañana. Renueva en: [link]"
  - **Código 2FA**: "Tu código de verificación es: {{código}}"
  - **Confirmación pago**: "Pago confirmado. {{plan}} activo hasta {{fecha}}"

---

## 10. MÓDULO DE NOTIFICACIONES MULTICANAL

### 10.1 Integración WhatsApp
- **Configuración**
  - Número de WhatsApp Business asociado
  - API de WhatsApp Business (Meta)
  - Plantillas aprobadas por WhatsApp
  - Autenticación y seguridad

- **Tipos de mensajes**
  - Recordatorios de clases (automático 24h y 1h antes)
  - Confirmación de compra/plan
  - Recordatorio de vencimiento de plan
  - Oferta especial/promoción
  - Respuesta a consultas
  - Chat directo con vendedor/admin
  - Confirmación de pago
  - Encuesta de satisfacción

- **Seguimiento**
  - Entrega de mensaje (✓ enviado)
  - Lectura de mensaje (✓✓ leído)
  - Respuesta del cliente
  - Horarios de respuesta más efectivos
  - Estadísticas por horario/día

### 10.2 Integración Email
- **Configuración**
  - SMTP del servidor
  - Dirección email del remitente
  - Plantillas personalizables
  - Autenticación DKIM/SPF

- **Tipos de emails**
  - Bienvenida (nuevo cliente)
  - Confirmación de compra/plan
  - Recordatorio de vencimiento
  - Recordatorio de clase (opcional)
  - Recibo de pago
  - Factura electrónica
  - Promociones y ofertas
  - Newsletter informativo
  - Encuesta de satisfacción
  - Estado de cuenta

- **Seguimiento**
  - Tasa de entrega
  - Tasa de apertura
  - Tasa de click (si aplica)
  - Personas que marcaron como spam
  - Emails no entregados (bounce)

### 10.3 Integración Push Notifications
- **Configuración**
  - Servicio de push (Firebase Cloud Messaging, OneSignal, etc.)
  - Tokens de dispositivos
  - Permisos en app
  - Testing y validación

- **Tipos de notificaciones**
  - Recordatorio de clase (30 min, 1 hora antes)
  - Confirmación de agendamiento
  - Oferta flash/promoción limitada
  - Alerta de plan próximo a vencer
  - Invitación a nueva clase/profesor
  - Encuesta rápida
  - Actualización de estado de cuenta

- **Seguimiento**
  - Tasa de entrega
  - Tasa de click (app abierta)
  - Tasa de desactivación
  - Conversión de notificación a acción
  - Mejor horario de envío

### 10.4 Integración SMS (Opcional)
- **Configuración**
  - Proveedor SMS (Twilio, Vonage, etc.)
  - Número de envío
  - Límites de mensajes

- **Casos de uso**
  - Recordatorio de clase (para clientes sin app)
  - Verificación de código (2FA)
  - Alertas críticas (plan vencido, deuda)
  - Respuesta automática a STOP

---

## 11. EDITOR DE PLANTILLAS

### 11.1 Interfaz de Edición
- **Editor visual (Drag & Drop)**
  - Bloques predefinidos (texto, imagen, botón, tabla)
  - Vista previa en tiempo real
  - Responsive design preview (móvil/desktop)
  - Validación automática de caracteres

- **Editor de código**
  - Editor HTML/JSON para usuarios avanzados
  - Syntax highlighting
  - Validación de variables

- **Historial de versiones**
  - Guardar borradores
  - Historial de cambios (quién, qué, cuándo)
  - Revertir a versión anterior
  - Comparar versiones

### 11.2 Variables y Personalización
- **Variables disponibles por tipo de cliente**
  - {{nombre}}: Nombre del cliente
  - {{apellido}}: Apellido del cliente
  - {{plan}}: Nombre del plan actual
  - {{fecha_vencimiento}}: Fecha de vencimiento
  - {{profesor}}: Nombre del profesor
  - {{tipo_clase}}: Tipo de clase
  - {{horario}}: Horario de la clase
  - {{sucursal}}: Nombre de la sucursal
  - {{descuento}}: Porcentaje de descuento
  - {{fecha_límite}}: Fecha límite de oferta
  - {{créditos_disponibles}}: Cantidad de clases disponibles
  - {{días}}: Días para vencimiento

- **Condicionales**
  - Si cliente es nuevo: mostrar bienvenida especial
  - Si tiene plan vencido: mostrar oferta renovación
  - Si es inactivo: mostrar oferta reactivación
  - Si es cliente VIP: mostrar beneficio premium

### 11.3 Pruebas y Validación
- **Envío de prueba**
  - Enviar a número/email de prueba
  - Validar variables se reemplazan correctamente
  - Ver vista final del cliente
  - Verificar links y botones funcionan

- **Validación automática**
  - Verificar todas las variables están definidas
  - Verificar caracteres no exceden límite
  - Verificar enlaces son válidos
  - Verificar cumplimiento LGPD (links desuscripción)

### 11.4 Aprobación de Plantillas
- **Flujo de aprobación**
  - Creador: Crea y prueba plantilla
  - Revisor: Revisa contenido y cumplimiento
  - Administrador: Aprueba y activa
  - Estado: Pendiente → Aprobada → Activa

- **Requisitos para aprobación**
  - Plantilla probada sin errores
  - Contenido alineado a marca
  - Cumplimiento de LGPD/RGPD
  - Links y variables validadas
  - Para WhatsApp: aprobación de Meta

---

## 12. PREFERENCIAS DE COMUNICACIÓN POR CLIENTE

### 12.1 Centro de Preferencias
- **Configuración por cliente**
  - Canal preferido (WhatsApp, Email, Push, SMS)
  - Frecuencia de comunicación (Diaria, 2-3 veces/semana, Semanal, Mensual)
  - Horarios permitidos para notificaciones (ej: 8am-9pm)
  - Tipos de mensajes aceptados
  - Opt-in/Opt-out por canal
  - Idioma preferido

- **Gestión de consentimiento**
  - RGPD/LGPD compliance
  - Fecha de consentimiento
  - Posibilidad de revocar consentimiento
  - Registro de cambios de preferencias

### 12.2 Do Not Disturb (DND)
- **Restricciones de comunicación**
  - Horarios de silencio por cliente
  - Días específicos sin comunicación
  - Excepción para mensajes críticos
  - Pausa temporal de campañas

---

## 13. AUTOMATIZACIONES Y FLUJOS DE TRABAJO

### 13.1 Flujos de Bienvenida
- **Nuevo cliente (post-venta)**
  - Día 0: Email de bienvenida + descuento primer mes
  - Día 1: WhatsApp con horarios disponibles
  - Día 3: Push con invitación a clase de prueba
  - Día 7: Email con tips de principiante

### 13.2 Flujos de Retención
- **Cliente sin actividad**
  - 7 días sin clases: WhatsApp de recordatorio
  - 14 días sin clases: Email + Push con oferta incentivo
  - 21 días sin clases: Llamada de vendedor (automatizada o manual)

- **Plan próximo a vencer**
  - 30 días antes: Email informativo
  - 7 días antes: WhatsApp reminder + link renovación
  - 3 días antes: Push + Email con descuento renovación
  - 1 día antes: SMS alerta (opcional)
  - Post-vencimiento: Campaña re-activación

### 13.3 Flujos de Reactivación
- **Cliente inactivo**
  - Envío de campaña "Te extrañamos" en email
  - WhatsApp con promoción especial
  - Push con nueva clase/profesor
  - Encuesta: ¿Por qué nos abandonaste?

### 13.4 Flujos de Upsell/Cross-sell
- **Cliente con plan activo**
  - Ofrecer plan superior si actividad es alta
  - Sugerir clases específicas basadas en preferencia
  - Invitar a servicios adicionales (nutrición, coaching)

---

## 14. ANALÍTICA Y REPORTES CRM

### 14.1 Dashboards CRM
- **Vista general**
  - Total de contactos en base datos
  - Clientes por estado (Activo, Inactivo, En riesgo)
  - Tasa de conversión general
  - Revenue por cliente promedio
  - Churn rate mensual

- **Analítica de campañas**
  - Campañas activas
  - Tasa de entrega por canal
  - Tasa de apertura/lectura
  - Tasa de conversión (click a venta)
  - ROI por campaña
  - Mejor horario y día de envío

- **Salud del segmento**
  - Clientes por segmento
  - Actividad promedio por segmento
  - Ingresos por segmento
  - Churn por segmento

### 14.2 Reportes Disponibles
- **Reporte de campañas**
  - Nombre campaña, fecha, segmento
  - Cantidad de envíos
  - Tasa de entrega, apertura, conversión
  - Ingresos generados
  - Costo de campaña vs. ingresos (ROI)

- **Reporte de interacciones**
  - Cliente, fecha, tipo interacción, canal, resultado
  - Historial completo con timestamps
  - Exportable a Excel/PDF

- **Reporte de seguimiento**
  - Pipeline por etapa
  - Tiempo promedio en cada etapa
  - Conversión esperada por etapa
  - Pronóstico de ingresos

- **Reporte de preferencias**
  - Canales más efectivos por segmento
  - Horarios óptimos de envío
  - Mejor tipo de mensaje
  - Tasa de respuesta por tema

### 14.3 Analítica de Plantillas
- **Performance de plantillas**
  - Plantilla más utilizada
  - Tasa de entrega por plantilla
  - Tasa de apertura/lectura por plantilla
  - Tasa de conversión por plantilla
  - Plantillas que generan más ingresos
  - A/B testing resultados

- **Mejora continua**
  - Plantillas con bajo rendimiento
  - Variaciones que funcionan mejor
  - Horarios óptimos por plantilla
  - Segmentos que responden mejor

---

## 15. INTEGRACIÓN CON OTROS MÓDULOS

### 15.1 Conexión con Módulo de Agendamiento
- Recordatorios automáticos de clase
- Seguimiento de asistencia vs. no-asistencia
- Análisis de preferencia por tipo clase/profesor

### 15.2 Conexión con Módulo de Pagos
- Notificación de pago recibido
- Alerta de pago vencido
- Recordatorio de renovación automática
- Confirmación de transacción

### 15.3 Conexión con Módulo de Ventas
- Historial de vendedor por cliente
- Seguimiento de leads por vendedor
- Comisión por conversiones de campañas
- Atribución de referidos

### 15.4 Conexión con Módulo de Reportes
- Datos de CRM disponibles en reportes generales
- Segmentación en análisis de desempeño
- Correlación actividad CRM vs. financiero

---

## 16. CONSIDERACIONES TÉCNICAS CRM

### 16.1 Infraestructura
- **Almacenamiento**
  - Base de datos centralizada de contactos
  - Historiales con retención >= 12 meses
  - Copias de seguridad automáticas

- **Procesamiento**
  - Cola de mensajes para envíos masivos
  - Scheduler para campañas programadas
  - Webhooks para eventos en tiempo real

### 16.2 Seguridad y Privacidad
- Encriptación de datos personales
- Cumplimiento LGPD (Chile)
- Auditoría de accesos a datos de clientes
- Derecho al olvido (GDPR-like)

### 16.3 Integraciones Externas CRM
- **WhatsApp Business API** (Meta)
- **SendGrid/Mailgun** (Email)
- **Firebase Cloud Messaging** (Push)
- **Twilio** (SMS, opcional)
- **Webhooks** para sincronización

---

## 17. MÓDULO DE CONFIGURACIÓN Y ADMINISTRACIÓN

### 17.1 Configuración General
- **Parámetros del sistema**
  - Moneda por defecto (CLP)
  - Zona horaria
  - Formato de fechas
  - Porcentajes de comisión
  - Políticas de cancelación

### 17.2 Gestión de Usuarios del Sistema
- **Roles y permisos**
  - Administrador general
  - Administrador de sucursal
  - Vendedor
  - Profesor/Entrenador
  - Cliente
  - Soporte técnico

### 17.3 Seguridad
- **Autenticación**
  - Login con email/contraseña
  - Recuperación de contraseña
  - Autenticación de dos factores (opcional)
  - Cierre de sesión automático

- **Auditoría**
  - Registro de cambios (quién, qué, cuándo)
  - Intentos de login fallidos
  - Cambios en datos sensibles
  - Descarga de reportes

### 17.4 Integraciones
- **APIs externas**
  - VirtualPos.cl (procesamiento de pagos)
  - Webflow.cl (pagos recurrentes)
  - Email (confirmaciones, notificaciones)
  - SMS (recordatorios)
  - Webhooks para sincronización

---

## 18. FLUJOS DE NEGOCIO PRINCIPALES

### 18.1 Flujo: Nueva Venta (Agendamiento Manual)
1. Cliente ingresa a sucursal
2. Vendedor abre sistema
3. Vendedor busca cliente o crea uno nuevo
4. Vendedor selecciona plan
5. Sistema calcula valor (descuentos aplicables)
6. Vendedor realiza cobro (VirtualPos/Webflow/Efectivo)
7. Sistema confirma pago
8. Vendedor agenda primera clase
9. Cliente recibe confirmación (email/SMS)

### 18.2 Flujo: Agendamiento de Cliente en Plataforma
1. Cliente inicia sesión
2. Cliente busca clase por profesor/tipo/hora
3. Cliente selecciona horario disponible
4. Sistema valida créditos disponibles
5. Cliente confirma agendamiento
6. Sistema envía confirmación y recordatorio
7. Cliente asiste o cancela (24 h antes)

### 18.3 Flujo: Renovación de Plan
1. Plan próximo a vencer (notificación)
2. Cliente elige renovar o cambiar plan
3. Pago automático (si está registrado)
4. Sistema extiende vigencia del plan
5. Confirmación de renovación enviada

### 18.4 Flujo: Pago de Comisiones
1. Período de liquidación cierra
2. Sistema calcula comisiones acumuladas
3. Genera detalle de comisiones
4. Realiza transferencia a cuenta bancaria
5. Genera comprobante de pago

### 18.5 Flujo: Campaña de Reactivación (CRM)
1. Sistema identifica cliente sin actividad (14+ días)
2. CRM segmenta automáticamente a cliente
3. Flujo de reactivación se activa
4. WhatsApp enviado con oferta especial (plantilla pre-aprobada)
5. Si cliente no responde en 3 días: Email seguimiento (plantilla personalizada)
6. Si abre email: Push con descuento limitado (plantilla corta)
7. Si convierte: Vendedor notificado para seguimiento
8. Si no responde: Esperar 30 días para reintentar

### 18.6 Flujo: Gestión de Plantillas de Mensajes
1. Administrador crea nueva plantilla
2. Define variables dinámicas necesarias
3. Editor prueba en staging
4. Revisa vista previa en móvil/desktop
5. Envía prueba a email/número de test
6. Revisa en cliente de correo/WhatsApp/SMS
7. Revisa cumplimiento LGPD
8. Solicita aprobación a supervisor
9. Supervisor aprueba o rechaza con comentarios
10. Si WhatsApp: Meta debe aprobar
11. Plantilla pasa a estado "Activa"
12. Se puede usar en campañas automáticas

---

## 19. REQUISITOS TÉCNICOS PRELIMINARES

### 19.1 Tecnología
- **Frontend**
  - Aplicación web responsive
  - Apps móviles (iOS/Android) - futuro
  - Dashboard administrativo
  - Interfaz para vendedores
  - Panel CRM para gestión de campañas
  - Editor visual de plantillas

- **Backend**
  - API REST o GraphQL
  - Base de datos relacional
  - Sistema de notificaciones (email/SMS/Push/WhatsApp)
  - Generación de reportes
  - Motor de automatizaciones
  - Cola de mensajes (RabbitMQ, Redis)
  - Scheduler de tareas (Cron, Celery)
  - Sistema de versioning de plantillas

### 19.2 Seguridad
- **Datos sensibles**
  - Encriptación de datos en tránsito (HTTPS)
  - Encriptación de contraseñas
  - Cumplimiento LGPD/PDPA (protección datos)
  - PCI DSS para procesamiento de pagos
  - Privacidad de consentimientos de comunicación

### 19.3 Escalabilidad
- **Capacidad**
  - Múltiples sucursales
  - Cientos de profesores
  - Miles de clientes simultáneos
  - Procesamiento paralelo de pagos
  - Envío masivo de notificaciones (miles/día)
  - Gestión de miles de plantillas

---

## 20. FASES RECOMENDADAS DE IMPLEMENTACIÓN

### Fase 1 (MVP - Semanas 1-4)
- Gestión de sucursales y profesores
- Gestión básica de planes
- Registro de clientes
- Agendamiento manual por vendedor
- Integración VirtualPos.cl
- Dashboard simple
- CRM básico: Historial de interacciones, Email
- Editor de plantillas: Email básico

### Fase 2 (Semanas 5-8)
- Agendamiento de cliente en plataforma
- Reportes por vendedor
- Sistema de comisiones básico
- Integración Webflow.cl
- Notificaciones: Email + Push
- Automatizaciones básicas (bienvenida, recordatorio clase)
- CRM: Segmentación de clientes
- Plantillas: WhatsApp (pre-aprobadas), SMS

### Fase 3 (Semanas 9-12)
- Sistema de referidos
- Renovación automática de planes
- Reportes avanzados
- Apps móviles (inicio)
- SMS de recordatorios
- Integración WhatsApp Business API
- CRM: Campañas automáticas avanzadas
- Flujos de reactivación
- Editor de plantillas avanzado (A/B testing)
- Analítica de plantillas

### Fase 4 (Futuro)
- Apps móviles completas
- Sistema de calificaciones/reviews
- Contenido adicional (vídeos, entrenamientos)
- Integración con centros de fitness adicionales
- IA para predicción de churn
- Chatbot con IA en WhatsApp
- Optimización automática de plantillas

---

## 21. PREGUNTAS ADICIONALES PARA PROFUNDIZAR

1. **¿Cuántas sucursales se esperan?** (inicial y proyectado)
2. **¿Cuántos clientes se estiman inicialmente?** (proyección anual)
3. **¿Qué horarios de atención tienen los gyms?** (24h, abiertos, cerrados)
4. **¿Modelos de comisión específicos?** (% exacto por rol)
5. **¿Necesitan control de asistencia física?** (check-in)
6. **¿Desean sistema de evaluación de clases/profesores?**
7. **¿Integraciones adicionales?** (CRM, contabilidad, etc.)
8. **¿Cuál es el presupuesto aproximado?**
9. **¿Timeline de lanzamiento?**
10. **¿Soporte en múltiples idiomas?** (Solo español)
11. **¿Cuenta de WhatsApp Business ya disponible?**
12. **¿Necesitan IA/Chatbot en WhatsApp?**
13. **¿Frecuencia de comunicación deseada con clientes?**
14. **¿Plantillas de email/WhatsApp preexistentes?**
15. **¿Quién aprobará las plantillas de mensajes?**
16. **¿Necesitan A/B testing de plantillas automático?**
17. **¿Multilenguaje en plantillas (futuro)?**

---

## 22. CASOS DE USO DETALLADOS (Ejemplos)

### Caso 1: Juan (Cliente New) - Venta Inicial + CRM + Plantillas
- Juan llega al gym sin membresía
- Vendedor María crea perfil: Juan García, juan@email.com, RUT 12.345.678-9, +56987654321 (WhatsApp)
- CRM registra interacción: "Venta en sucursal"
- María vende Plan Básico (30 días) = $50.000 CLP
- Sistema genera venta de comisión para María (5% = $2.500)
- Juan paga con Tarjeta de Crédito (VirtualPos)
- Sistema asigna 12 créditos a Juan (plan = 12 clases/mes)
- **CRM dispara automáticamente usando plantillas:**
  - Email de bienvenida (plantilla: "bienvenida_cliente_nuevo")
  - Variables: {{nombre}} = Juan, {{plan}} = Básico, {{descuento}} = 10%
  - WhatsApp con horarios disponibles (plantilla: "horarios_disponibles_wp")
  - Push notification con descuento primera clase (plantilla: "descuento_primera_clase_push")
- María agenda la primera clase: Yoga lunes 18:00 con Prof. Ana
- Juan recibe confirmación por email + recordatorio WhatsApp 24h antes + push 1h antes

### Caso 2: Ana (Profesor) - Liquidación de Comisiones
- Mes termina: 31 de diciembre
- Sistema calcula clases dictadas por Ana: 60 clases
- Comisión por clase: $1.000 CLP
- Comisión total mes: $60.000 CLP
- Sistema genera comprobante
- Dinero se transfiere a cuenta bancaria de Ana
- Ana recibe confirmación de pago

### Caso 3: María (Vendedor) - Reporte Mensual + CRM + Plantillas
- María accede a su dashboard
- Reportes del mes: 45 planes vendidos = $2.250.000 CLP
- Comisiones generadas: $112.500 CLP
- Retención de clientes: 92%
- **Dashboard CRM muestra:**
  - Clientes en riesgo (sin actividad 14+ días): 5 clientes
  - Campañas enviadas: 23 (email, WhatsApp, push)
  - Plantillas más utilizadas: "recordatorio_clase_wp" (85% apertura)
  - Tasa de conversión campañas: 18%
  - Ingresos generados por campañas: $250.000 CLP
  - Plantilla con mejor ROI: "oferta_reactivacion_email" ($450 ingresos por envío)
- Descargar reporte en Excel
- Compartir con gerente general

### Caso 4: Pedro (Cliente Inactivo) - Flujo de Reactivación con Plantillas
- Pedro compró plan hace 2 meses pero hace 18 días sin asistir
- Sistema identifica automáticamente a Pedro como "Cliente en Riesgo"
- CRM segmenta a Pedro y activa flujo de reactivación
- Día 1: WhatsApp "Te extrañamos Pedro, 30% desc en renovación" (plantilla: "reactivacion_whatsapp_v1")
  - Variable: {{descuento}} = 30%, {{fecha_límite}} = 7 días
- Día 3: Email "Nuevas clases con Prof. Carlos que te gustaban" (plantilla: "clases_nuevas_email")
  - Variable: {{profesor}} = Carlos, {{tipos_clase}} = Yoga
- Día 5: Push "Solo hoy: Clase gratis si asistes mañana" (plantilla: "oferta_flash_push")
- Si Pedro responde WhatsApp: Vendedor notificado para follow-up personal
- Si Pedro abre email pero no actúa: Push con oferta limitada 24h (plantilla: "oferta_urgente_push")
- Si convierte: María obtiene comisión, se registra en historial CRM
- Si no responde: Esperar 30 días y reintentar con plantilla diferente

### Caso 5: Administrador - Creación de Nueva Plantilla
- Admin crea plantilla "oferta_cumpleaños_email"
- Define variables: {{nombre}}, {{descuento}}, {{tipo_plan}}
- Usa editor visual drag & drop
- Diseña con logo, colores corporativos
- Agrega botón CTA "Renovar ahora"
- Crea versión 1 (Asunto: "{{nombre}}, 20% desc en tu cumpleaños")
- Envía prueba a su email de test
- Revisa en Outlook, Gmail, móvil
- Verifica links funcionan
- Agrega link de desuscripción (LGPD)
- Solicita aprobación a supervisor
- Supervisor aprueba
- Admin la activa para campañas automáticas
- Sistema envía automáticamente a clientes en sus cumpleaños
- Después de 2 semanas, analítica muestra:
  - Tasa apertura: 42%
  - Tasa click: 18%
  - Tasa conversión: 8%
  - ROI: $500 ingresos per envío

---

**Fin del levantamiento de información actualizado con módulo CRM y Gestión de Plantillas de Mensajes**
