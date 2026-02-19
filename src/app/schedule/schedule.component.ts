import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonEntradasComponent } from '../shared/boton-entradas/boton-entradas.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, BotonEntradasComponent],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule = [
    {
      day: 'Jueves 30 (Mañana) - Meetup #3 GDG Menorca',
      talks: [
        {
          time: '9:15',
          title: 'Abertura de puertas para el Meetup de GDG Menorca',
          summary: 'Bienvenida de los organizadores y presentación del Meetup de GDG Menorca',
        },
        {
          time: '9:30',
          title: 'Rediseñando Matrix con IA',
          speaker: 'Santiago Barro',
          summary: 'En esta charla exploraremos el impacto filosófico y práctico de la inteligencia artificial en el ámbito de la programación. Reflexionaremos sobre preguntas clave: ¿nos hace la IA más productivos o dependientes? ¿Estamos delegando nuestra capacidad de pensar a las máquinas o estas nos están ayudando a explorar nuevas fronteras intelectuales? \n Analizaremos cómo herramientas como ChatGPT o Github Copilot están transformando el trabajo del programador, desde la resolución de problemas hasta la creatividad en el código, y debatiremos sobre los temores comunes: ¿nos quitará la IA el trabajo? \n Con un enfoque filosófico, pero aterrizado en ejemplos prácticos, la charla invita a los programadores a pensar críticamente sobre su rol en un futuro compartido con la inteligencia artificial. ¿Estamos en una revolución que nos empodera, o en un proceso que nos redefine como meros supervisores de algoritmos?',
        },
        {
          time: '10:00',
          title: 'TBA',
          speaker: 'Ernest Teniente',
          summary: 'TBA',
        },
        {
          time: '10:30',
          title: 'Descanso y desayuno',
          speaker: '',
          summary: 'Se ofrecerá desayuno a los asistentes',
        },
        {
          time: '11:00',
          title: 'Open Space',
          speaker: '',
          summary: 'A raíz de las charlas escuchadas y de temas que vayan surgiendo, tendremos un espacio de discusión donde se podrá hablar tanto de actualidad en la tecnología como de la comunidad y sus intereses para futuras activdades.',
        },
        {
          time: '12:30',
          title: 'Cierre de la jornada',
          summary: 'Cierre de la jornada y agradecimiento a los organizadores y colaboradores.',
        },
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    },
    {
      day: 'Jueves 30 (tarde)',
      talks: [
        {
          time: '17:00',
          title: 'Bienvenida a STEM Talks 2026',
          summary: 'Bienvenida de los organizadores y presentación de la conferencia STEM Talks 2026',
        }, {
          time: '17:15',
          title: 'Per què vull un ordinador quàntic?',
          speaker: 'Alex Alemany',
          summary: 'A aquesta xerrada divulgativa explorarem, des dels camps de comptabilitat i complexitat computacional, perquè un ordinador quàntic pot ser útil i solucionar problemes que ara mateix no podem. Veurem la teoria que explica perquè ens pot ajudar i les limitacions que ens trobem a la pràctica. Veurem com classifiquen els problemes els informàtics segons la seva complexitat i com ens limita el tipus de computació que fem servir per aquests problemes.',
        },
        {
          time: '18:05',
          title: 'Salvando vidas con Inteligencia Artificial',
          speaker: 'Ana Freire',
          summary: 'En esta charla presentaremos los avances del proyecto STOP (Suicide prevenTion in sOcial Platforms), que utiliza inteligencia artificial para ayudar a usuarios con problemas de salud mental en redes sociales. Veremos cómo el conocimiento experto humano se utiliza para entrenar algoritmos de aprendizaje automático que aprenden a detectar riesgo de ideación suicida, depresión o trastornos de la conducta alimentaria. El resultado de estos algoritmos es utilizado para configurar campañas dirigidas a usuarios en riesgo, ofreciendo ayuda a través de teléfonos o chats gratuitos de apoyo emocional. La última campaña multiplicó x10 el número de chats recibidos en el chat de la Fundació Esperança en Línea.',
        },
        {
          time: '18:55',
          title: 'Empower your frontend development with Web Components',
          speaker: 'Jorge del Casar',
          summary: 'En esta charla haremos una breve introducción a los web components y cómo estos pueden mejorar la Experiencia de Usuario y unificar la Interfaz de Usuario. Iremos desde ejemplos simples de composición hasta ejemplos complejos con inyección de dependencias para integrarlos en arquitecturas hexagonales o modificar su funcionamiento según dónde los incorporemos. En resumen, un recorrido completo sobre las bases de los web components hasta cómo implementar i18n, signals, context. Todo lo que necesitas saber para empezar a incorporar web components en tus interfaces de usuario.',
        },
        {
          time: '19:30',
          title: 'Sesión de Networking y cierre de la jornada',
          summary: 'Cierre de la jornada y agradecimiento a los organizadores y colaboradores. Se ofrecerá una sesión de networking para que los asistentes puedan conocerse y hablar sobre sus intereses y proyectos.',
        }
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    },
    {
      day: 'Viernes 31 (mañana)',
      talks: [
        {
          time: '9:45',
          title: 'Abertura de puertas',
          summary: 'Bienvenida de los organizadores y presentación de la sesión de mañana',
        },
        {
          time: '10:00',
          title: 'Entra a la màquina del temps amb les biociències',
          speaker: 'Cristina Maria Pereira dos Santos',
          summary: 'Les restes esquelètiques recuperades en diferents contextos ens desvetllen informació sorprenent sobre les poblacions passades. Qui eren, com eren, d’on venien, quines malalties han patit o de que s’han mort, són algunes de les preguntes que podem respondre amb estudis morfològics, histològics i (paleo)genòmics ben farcits de bioinformàtica. En aquesta xerrada us convidem a viatjar pel passat fins arribar a fa més de 2000 anys!',
        },
        {
          time: '10:30',
          title: "inLab FIB: un espai per a la innovació a la Facultat d'Informàtica de Barcelona (FIB) de la UPC",
          speaker: 'Ernest Teniente',
          summary: "L'inLab FIB és el laboratori d'innovació i recerca de la Facultat d'Informàtica de Barcelona (FIB) de la UPC i la seva missió és la d'innovar i transferir coneixement a la societat en l'àmbit de les tecnologies de la informació mitjançant el desenvolupament del talent humà i la realització de projectes innovadors i multidisciplinaris. En aquesta xerrada s'oferirà una visió general d'alguns projectes desenvolupats a l'inLab FIB per demostrar com la innovació és la clau per millorar i transformar la societat i com la tecnologia, especialment la informàtica, és la base principal sobre la que pivota actualment aquesta transformació",
        },
        {
          time: '11:00',
          title: 'Descanso y desayuno',
          speaker: '',
          summary: 'Se ofrecerá desayuno a los asistentes',
        },
        {
          time: '11:20',
          title: 'Realitat o ficció? Descobrint els secrets dels deepfakes',
          speaker: 'Gabriel Moyà',
          summary: "En aquesta xerrada, explorarem el món dels deepfakes, una tecnologia que utilitza la intel·ligència artificial per generar imatges i vídeos realistes de persones que, en realitat, mai no han existit o fet el que veiem. Descobrirem com funciona aquesta tecnologia, els processos de creació d’imatges humanes falses i quins són els límits entre la realitat i la ficció digital. A més, veurem com aquests avenços en IA generativa han fet que distingir el real del fals sigui cada vegada més complicat i les implicacions ètiques que se'n deriven.",
        },
        {
          time: '11:50',
          title: 'Talk 7: TBA',
          speaker: 'Nerea Luis',
          summary: 'Resumen: TBA',
        },
        {
          time: '12:20',
          title: 'Mesa redonda de estudiantes universitarios',
          speaker: 'Estudiantes de diversas carreras STEM',
          summary: 'En esta informal mesa redonda se podrá discutir de como son los estudios en la universidad, que experiencias han vivido los estudiantes, que retos han encontrado... Además, los asistentes podrán interrumpir y preguntar sus preguntas a los miembros de la mesa para hacerlo más dinámico.',
        },
        {
          time: '13:00',
          title: 'Cierre de la jornada',
          summary: 'Cierre de la jornada y agradecimiento a los organizadores y colaboradores.',
        }
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    },
    {
      day: 'Viernes 31 (tarde)',
      talks: [
        {
          time: '17:00',
          title: 'Abertura de puertas',
          summary: 'Bienvenida de los organizadores y presentación de la sesión de tarde',
        },
        {
          time: '17:15',
          title: "Orquestrant la Intel·ligència: Alliberant el Poder dels Sistemes d'IA de Múltiples Agents",
          speaker: 'Albert Solana',
          summary: "Aquesta xerrada explora el potencial transformador dels agents d'IA en l'orquestració d'estratègies basades en dades, un camp en creixement que permet a les empreses navegar per operacions complexes i dinàmiques de mercat. Albert Solana, cofundador de Mindsight Ventures i expert en sistemes de múltiples agents, parlarà de la integració de la IA per al processament de dades en temps real, l'anàlisi predictiva i les interaccions personalitzades amb els usuaris. La xerrada examinarà aplicacions reals dels agents d'IA en els negocis i les perspectives del desenvolupament de Nexus, una nova plataforma per a la gestió dinàmica de dades i l'automatització de fluxos de treball.",
        },
        {
          time: '18:05',
          title: 'Tengo un ordenador cuántico. ¿Y ahora qué?',
          speaker: 'Ana Palacios',
          summary: 'La computación cuántica nos brinda la oportunidad de resolver problemas (es decir, computar) a partir de unas reglas del juego distintas. En concreto, algo más locas. Esto hace que la forma de pedirle a un ordenador cuántico que haga algo (es decir, escribir un programa o algoritmo) sea bastante distinta de cómo se lo pides a tu portátil. En esta charla veremos los elementos clave de la física cuántica que condicionan este hecho, así como la pinta que tienen susodichos algoritmos cuánticos. Acabaremos hablando de las principales aplicaciones de la computación cuántica y el impacto que tendrán (y están teniendo) estas tecnologías en la sociedad.',
        },
        {
          time: '18:55',
          title: 'Copilotos para el futuro',
          speaker: 'Nerea Luis',
          summary: 'Resumen: TBA'
        },
        {
          time: '19:40',
          title: 'Talk especial: TBA',
          speaker: 'Speaker: TBA',
          summary: '¡Solo podemos decirte que el final te va a encantar!',
        }, {
          time: '20:15',
          title: 'Nos vemos en el STEM Talks 2026',
          summary: 'Cierre de la jornada y agradecimiento a los organizadores y colaboradores. Se ofrecerá una sesión de networking para que los asistentes puedan conocerse y hablar sobre sus intereses y proyectos.',
        }
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    }
  ];

  ngOnInit() {
    // Initialization logic if needed
  }

  toggleSummary(dayIndex: number, talkIndex: number): void {
    // Toggle the specific talk summary based on its day and index
    this.schedule[dayIndex].isOpen[talkIndex] = !this.schedule[dayIndex].isOpen[talkIndex];
  }
}