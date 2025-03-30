# 🔎 Introducción al uso de Postman para testear APIs

Postman es una herramienta gratuita muy utilizada para **probar, analizar y documentar APIs**. Permite enviar peticiones HTTP (GET, POST, PUT, DELETE) de forma visual, sin necesidad de escribir código, lo que la hace ideal para aprender cómo funcionan las APIs y experimentar con distintos endpoints.

---

## 🚀 ¿Qué vamos a hacer?

1. Instalar Postman.
2. Aprender a hacer peticiones GET y POST.
3. Importar colecciones de prueba.
4. Analizar respuestas en formato JSON.

---

## 🧩 1. Instalación de Postman

1. Ir al sitio oficial: https://www.postman.com/downloads/
2. Descargar la versión correspondiente a tu sistema operativo.
3. Instalar y crear una cuenta gratuita (opcional pero recomendado).

También podés usar la versión web en https://web.postman.co

---

## 🧪 2. ¿Cómo testear una API con Postman?

### 🟢 Hacer una petición GET:

1. Abrí Postman.
2. Elegí el método `GET` desde el menú desplegable.
3. Escribí la URL, por ejemplo:

```
https://jsonplaceholder.typicode.com/users
```

4. Hacé clic en el botón **Send**.
5. En la parte inferior verás la **respuesta** de la API en formato JSON.

---

### 🟠 Hacer una petición POST:

1. Cambiá el método a `POST`.
2. URL de ejemplo:

```
https://jsonplaceholder.typicode.com/posts
```

3. Ir a la pestaña **Body** → elegí **raw** y **JSON**.
4. Escribí el siguiente cuerpo:

```json
{
  "title": "Hola mundo",
  "body": "Este es un post de prueba",
  "userId": 1
}
```

5. Hacé clic en **Send**.
6. Vas a ver que la API devuelve un objeto con `id` generado y los datos enviados.

---

## 📦 3. Colecciones de prueba para importar

### 📁 Colección 1: JSONPlaceholder

Archivo: `jsonplaceholder-coleccion.json`

- GET: https://jsonplaceholder.typicode.com/users
- POST: https://jsonplaceholder.typicode.com/posts

### 📁 Colección 2: Cat Facts

Archivo: `catfacts-coleccion.json`

- GET: https://catfact.ninja/fact

---

## 📘 ¿Cómo importar una colección en Postman?

1. Abrí Postman.
2. Hacé clic en **Import** (esquina superior izquierda).
3. Seleccioná la pestaña **Raw Text**.
4. Pegá el JSON de la colección.
5. Hacé clic en **Continue** y luego en **Import**.

¡Listo! Ahora podés hacer clic en cada petición de la colección y probarla.

---

## ✅ Consejos para testear APIs

- Usá **console de Postman** (View → Show Postman Console) para ver más detalles.
- Revisá los **headers** y el **código de estado** HTTP (200, 404, 500...).
- Probá cambiar parámetros y ver cómo responde la API.
- Comprobá que los datos se devuelvan en formato JSON.

---

## 📚 Recursos adicionales

- [MDN - Qué es una API](https://developer.mozilla.org/es/docs/Glossary/API)
- [Documentación de Postman](https://learning.postman.com/)
- [Curso rápido de Postman (YouTube)](https://www.youtube.com/results?search_query=postman+api+curso)

---

> Hecho con ❤️ para prácticas en clase de programación y APIs.
