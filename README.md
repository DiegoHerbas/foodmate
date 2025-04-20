# 🍔 FoodMate – Planificador de Comidas Semanales

FoodMate es una plataforma que permite a los usuarios planificar sus comidas semanales, gestionar recetas y generar listas de compras automáticas.

Este proyecto está desarrollado con una arquitectura de microservicios utilizando [NestJS v11](https://docs.nestjs.com/), PostgreSQL, Docker, RabbitMQ y Prisma.

---

## 🧱 Arquitectura

- `auth-service`: Registro, login y gestión de JWT.
- `users-service`: Perfil de usuario y datos personales.
- `recipes-service`: CRUD de recetas y búsqueda.
- `planner-service`: Planificación semanal de comidas.
- `shopping-list-service`: Generación automática de lista de compras.
- `gateway`: Orquestador principal que expone APIs REST y GraphQL.

---

## 🚀 Tecnologías principales

- **NestJS v11** (Microservicios)
- **GraphQL + REST API**
- **RabbitMQ** (mensajería entre servicios)
- **PostgreSQL** (base de datos relacional)
- **Prisma ORM**
- **bcryptjs** (hashing de contraseñas)
- **Docker y Docker Compose**

---

## 🛠️ Configuración del entorno

1. Cloná el repositorio:

```bash
git clone https://github.com/tu_usuario/foodmate.git
cd foodmate
