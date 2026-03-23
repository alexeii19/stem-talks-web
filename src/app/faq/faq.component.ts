import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent {
  // Array of FAQ questions and answers
  faqs = [
    {
      question: "¿A quién va dirigido este evento?",
      answer: "STEM Talks Menorca es un evento para todos aquellos que estén interesados en ciencia y tecnología. Queremos que sea un espacio de innovación y conexión. La mayoría de perfiles que acuden al evento son profesionales y empresas de software y tecnología, estudiantes y aficionados. Si te interesa, os invitamos a pasar dos días donde descubrirás el increible mundo de las STEM"
    },
    {
      question: "¿Puedo atender a todas las actividades?",
      answer: "La mañana del viernes está pensada para estudiantes de instituto por lo que se dará prioridad a los centros que quieran asistir. No obstante, todas las charlas estan abiertas a todo el mundo hasta llenar la capacidad de la sala."
    },
    {
      question: "¿Hay que pagar entrada?",
      answer: "Nuestros eventos son 100% gratuitos. Creemos que el conocimiento no puede tener barreras y para divulgar sobre ciencia y tecnología y llegar a todo el mundo que le pueda interesar no es compatible con cobrar entrada. Queremos crear comunidad y aprender juntos, nada más :)"
    },
    {
      question: "¿Como puedo estar al día de las noticias del STEM Talks Menorca?",
      answer: "Puedes seguir todas las novedades del evento por <a href='https://x.com/GDGMenorca/' target='_blank'>nuestro X</a> o <a href='https://www.instagram.com/gdgmenorca/' target='_blank'>nuestro instagram</a>. Te recomendamos reservar tu entrada para que podamos ponernos en contacto contigo más fácilmente."
    },
    {
      question: "¿Hay algún código de conducta?",
      answer: "Si, nuestros eventos son eventos gratuitos, inclusivos y no se apcetará ningún tipo de agresión, abuso o mal comportamiento contra ningún otro asistente. Entre todos debemos crear un espacio para todos. Puedes leer nuestro código de contuca <a href='https://developers.google.com/events/gdd-europe/code-of-conduct?hl=es-419' target='_blank'>aquí</a>"
    }
  ];

  isOpen: boolean[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  toggleAnswer(index: number): void {
    this.isOpen[index] = !this.isOpen[index];
  }

  getSanitizedAnswer(answer: string) {
    return this.sanitizer.bypassSecurityTrustHtml(answer);
  }
}
