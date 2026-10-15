# Vinarte Vinoteca — Web Oficial & Catálogo Editorial

Sitio web editorial y de alta conversión diseñado para **Vinarte Vinoteca** en **San Carlos de Bariloche, Río Negro, Patagonia Argentina**.

---

## 🍇 Concepto & Dirección Creativa
- **Esencia:** *"El vino como experiencia, descubrimiento y cultura."*
- **Paleta cromática:** Bordó profundo (`#481B28`), Borgoña oscuro (`#29151C`), Negro cálido (`#171513`), Crema (`#F4EFE5`), Dorado apagado (`#B79A68`), Blanco cálido (`#FCFAF6`).
- **Tipografía:** *Cormorant Garamond* (titulares editoriales y frases de marca) + *Plus Jakarta Sans* (lectura funcional, navegación y botones).

---

## 🛠️ Stack Tecnológico
- **Framework:** React 19 + TypeScript + Vite
- **Estilos:** Tailwind CSS v4 con variables semánticas personalizadas
- **Iconografía:** Lucide React + Componente SVG artesanal para Instagram
- **Linter & Calidad:** Oxlint (0 errores, 0 advertencias)

---

## 🚀 Comandos Rápidos
```bash
# Servidor de desarrollo
npm run dev

# Compilar para producción (typecheck + minificación Vite)
npm run build

# Previsualizar el build de producción
npm run preview

# Verificar calidad de código y linter
npm run lint
```

---

## 📂 Organización de Archivos Centralizados

| Archivo | Función |
| :--- | :--- |
| `src/data/config.ts` | Enlaces oficiales (WhatsApp, Instagram, Uber Eats, Google Maps, Reseñas), dirección en Bariloche, horarios y teléfono. |
| `src/data/wines.ts` | Catálogo centralizado de vinos, notas de cata, maridajes sugeridos, terruño, añada y precios. |
| `src/components/common/` | Navbar sticky con drawer móvil, Modal de Ficha de Cata, Asesor Virtual de Maridaje, Botón flotante WhatsApp, Banner +18. |
| `src/components/sections/` | Hero, Franja de Identidad, Destacados, Catálogo interactivo con filtros, Editorial, Momentos, Instagram, Ubicación, Pedidos/Contacto, Reseñas, Footer. |

---

## 📍 Enlaces Oficiales Integrados
- **Instagram:** [https://www.instagram.com/vinartevinoteca/](https://www.instagram.com/vinartevinoteca/)
- **Ubicación Google Maps:** [https://maps.app.goo.gl/kXwPYjfkWMUsZ9RP7](https://maps.app.goo.gl/kXwPYjfkWMUsZ9RP7)
- **Pedidos Uber Eats:** [https://www.ubereats.com/ar/store/vinarte-vinoteca/_ZkQN76sUDCaG0BTbHEvGw](https://www.ubereats.com/ar/store/vinarte-vinoteca/_ZkQN76sUDCaG0BTbHEvGw)
- **WhatsApp Directo:** [https://wa.me/5492944251925](https://wa.me/5492944251925)
- **Escribir Reseña en Google:** [https://search.google.com/local/writereview?placeid=ChIJPaeP-Ah7GpYRG02h9MK0llg](https://search.google.com/local/writereview?placeid=ChIJPaeP-Ah7GpYRG02h9MK0llg)

---

## ⚖️ Aviso Legal
*Beber con moderación. Prohibida su venta a menores de 18 años. Ley Nacional 24.788.*
