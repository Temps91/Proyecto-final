---
layout: base.njk
title: Índice de Repositorio
---

# Bienvenido al Índice de Repositorio

Aquí están todos los repositorios disponibles:

<ul>
  {% for post in collections.all %}
    {% if post.url != "/" %} <!-- Esto evita incluir la página principal de Eleventy -->
      <li><a href="{{ post.url }}">{{ post.data.title }}</a></li> <!-- Enlace a cada repositorio -->
    {% endif %}
  {% endfor %}
</ul>