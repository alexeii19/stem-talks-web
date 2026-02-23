import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-entradas',
  standalone: true,
  template: `
    <div class="ticket-button-container">
      <a href="https://gdg.community.dev/events/details/google-gdg-menorca-presents-stem-talks-menorca-2026/" target="_blank" class="ticket-button">
        ¡SOLICITA TU ENTRADA GRATUITA PARA ENTRAR EN EL SORTEO DE PRODUCTOS DE GOOGLE!
      </a>
    </div>
  `,
  styleUrls: ['./boton-entradas.component.css']
})
export class BotonEntradasComponent { } 