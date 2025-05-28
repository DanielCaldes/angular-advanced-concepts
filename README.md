# Angular Basic Concepts

Este proyecto es una demostración práctica de conceptos básicos de Angular. Se desarrolla desde cero utilizando Angular CLI, sin enrutamiento y con SCSS como preprocesador de estilos.

He incluido validación propia en los formularios para dar más información al usuario.

Desplegado en GitHub Pages: https://danielcaldes.github.io/angular-advanced-concepts/

## Tecnologías usadas
- Angular
- SCSS
- TypeScript
- GitHub Pages para despliegue

## Cómo ejecutar localmente
1. ``git clone https://github.com/DanielCaldes/angular-advanced-concepts.git``
2. ``cd angular-advanced-concepts``
3. ``npm install``
4. ``ng serve``
5. Accede a la app en ``http://localhost:4200``

Cómo desplegar en GitHub Pages
1. ``ng build --base-href "https://danielcaldes.github.io/angular-advanced-concepts/"``
2. ``npx angular-cli-ghpages --dir=dist/angular-advanced-concepts/browser``

## Descripción del proyecto

1. Componente: Tabla (table)
- Permite cambiar el estilo de una tabla y ocultar dos columnas.
- Usa *ngFor para rellenar los datos de la tabla.

2. Componente: Formulario (form)
- Formulario que recoge:
  - Nombre
  - Apellido
  - Email
  - Contraseña
  - Teléfono
  - Fecha de nacimiento
  - Dirección
- Valida todos las campos antes de mostrar el botón para enviar mostrando los errores de forma clara al usuario.

3. Componente principal (AppComponent)
- Integra los 2 componentes anteriores y los organiza en secciones.
- Hace uso de routing para navegar entre componentes mediante dos botones y en la ruta predefinida llama a la tabla.
- Estilizado con SCSS para una mejor presentación visual.

## Estructura del proyecto
```
📁 src/
├── 📁 app/
│   ├── 📁 components/
│   │   ├── 📁 form/
│   │   │   ├── 📄 form.component.html
│   │   │   ├── 📄 form.component.scss
│   │   │   ├── 📄 form.component.spec.ts
│   │   │   └── 📄 form.component.ts
│   │   ├── 📁 form-error/
│   │   │   ├── 📄 form-error.component.html
│   │   │   ├── 📄 form-error.component.scss
│   │   │   ├── 📄 form-error.component.spec.ts
│   │   │   └── 📄 form-error.component.ts
│   │   └── 📁 table/
│   │       ├── 📄 table.component.html
│   │       ├── 📄 table.component.scss
│   │       ├── 📄 table.component.spec.ts
│   │       └── 📄 table.component.ts
│   ├── 📁 models/
│   │   ├── 📄 productSale.model.ts         //Modelo de datos para los productos de la tabla
│   │   └── 📄 user.model.ts                //Modelo de datos para los usuarios registrados del formulario
│   ├── 📁 utils/
│   │   ├── 📁 validators/
│   │   │   ├── 📄 adult.validator.ts
│   │   │   ├── 📄 name.validator.ts
│   │   │   ├── 📄 password.validator.ts
│   │   │   ├── 📄 phone.validator.ts
│   │   │   └── 📄 validators.ts            //Centralizar el acceso a los validadores
│   ├── 📄 app.component.html
│   ├── 📄 app.component.scss
│   ├── 📄 app.component.spec.ts
│   └── 📄 app.component.ts
├── 📁 assets/
└── 📄 styles.scss
```