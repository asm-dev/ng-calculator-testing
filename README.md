# Aplicación de Calculadora

Una aplicación sencilla pero completa desarrollada con **Angular 19** y componentes standalone. Permite realizar sumas, restas y multiplicaciones, con un enfoque claro en la **calidad del software** a través de pruebas unitarias y testeo.

![image](https://github.com/user-attachments/assets/cf628316-d2bf-4746-b25e-11d28df6e483)

## La importancia del testing

Las pruebas son una necesidad fundamental en el desarrollo moderno. En este proyecto utilizamos tests unitarios y E2E.

Las **pruebas unitarias** son rápidas, automatizadas y nos dan confianza para refactorizar el código sin temor a introducir errores. En este proyecto se asegura que los valores iniciales sean `0`, se valida la lógica de operaciones y se verifica el resultado mostrado en el HTML.

Con Cypress realizamos pruebas **end-to-end** o E2E, que simulan el comportamiento del usuario final, comprobando que pueden introducirse valores numéricos y realizar cálculos con ellos, generando resultados correctos.

Básicamente, este proyecto sigue el principio de la **pirámide de pruebas** de Google:

- Muchas pruebas unitarias rápidas
- Algunas pruebas de integración
- Pocas pruebas E2E, pero cubren los flujos críticos

> Más información: [Google Testing Blog - The Test Pyramid](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)
