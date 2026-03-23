import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonEntradasComponent } from '../shared/boton-entradas/boton-entradas.component';

interface Talk {
  time: string;
  title: string;
  speaker?: string;
  summary: string;
  registrationLink?: string;
}

interface ScheduleDay {
  day: string;
  talks: Talk[];
  isOpen: boolean[];
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, BotonEntradasComponent],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule: ScheduleDay[] = [
    {
      day: "Jueves 19 (tarde) - En la Oficina Acelera Pyme Menorca impulsada por el Col·legi Oficial d'Enginyeria Industrial de les Illes Balears (¡Trae tu portátil!)",
      talks: [
        {
          time: '16:00',
          title: 'Desarrollando con IA en 2026 (30 mins) - Nuestra primera web con Google Antigravity y Google Stitch (90mins)',
          speaker: 'Víctor Sánchez',
          summary: "Imparte la charla “Desarrollando con IA en 2026” (30 minutos), donde explora el estado actual de la inteligencia artificial aplicada al desarrollo de software, herramientas emergentes y nuevas formas de programar con asistentes inteligentes. Además, dirige el taller práctico “Nuestra primera web con Google Antigravity y Google Stitch” (90 minutos), en el que los asistentes crean una web desde cero utilizando las últimas herramientas de Google para diseño, prototipado y desarrollo asistido por IA.",
          registrationLink: 'https://acelerapymemenorca.com/es/event/stem-talks-menorca-2026-charla-y-taller-desarrollando-con-ia-en-2026-nuestra-primera-web-con-google-antigravity-y-google-stitch/',
        },
        {
          time: '18:00',
          title: 'Web Performance Debugging amb Chrome DevTools MCP i Agents d\'IA',
          speaker: "Joan León",
          summary: "El MCP de Chrome DevTools permet que agents d'IA (Claude/Gemini) interactuin directament amb les 26+ eines de debugging del navegador. Aquest workshop tècnic t'ensenyarà a implementar-ho en els teus projectes reals. \n\n Anatomia del MCP: com exposa eines com performance_start_traci, network_get_request, dom_query_selector a LLMs \n\n Gemini embegut vs servidor MCP standalone: casos d'ús i limitacions \n Live setup des de zero amb configuracions avançades (headless, isolated, remalnom instances) \n\n - Debugging en viu d'un lloc amb LCP de 4-5s\n- Performance profiling automatitzat fase per fase \n- Detecció intel·ligent de render-blocking més enllà de Lighthouse \n- Network debugging: CORS, waterfalls, HTTP/3 i resource hints \n- Identificació de JavaScript long tasks amb anàlisi de flame charts \n\n Requisits: Chrome DevTools bàsic, conceptes de Core Web Vitals. \nSortiràs amb workflows implementables immediatament en els teus projectes.",
          registrationLink: 'https://acelerapymemenorca.com/es/event/stem-talks-menorca-2026-web-performance-debugging-con-chrome-devtools-mcp-y-agents-de-ia/',
        },
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    },
    {
      day: 'Viernes 20 (mañana)',
      talks: [
        {
          time: '9:45',
          title: 'Abertura de puertas',
          summary: 'Bienvenida de los organizadores y presentación de la sesión de mañana',
        },
        {
          time: '10:00',
          title: 'Neurones sense bateria: Cercant un tractament per les malalties mitocondrials',
          speaker: 'Albert Quintana',
          summary: 'Els mitocondris són com les bateries de les nostres cèl·lules: produeixen l’energia que necessitem per viure, pensar i moure’ns. Però què passa quan aquestes bateries fallen? En aproximadament 1 de cada 5000 nens, aquest sistema no funciona correctament, provocant malalties mitocondrials greus que afecten sobretot músculs i cervell, i que avui dia encara no tenen cura. Curiosament, quan això passa al sistema nerviós, no totes les neurones reaccionen igual: algunes moren, però d’altres troben maneres de resistir i continuar funcionant. Entendre aquests “trucs de supervivència” és clau per descobrir nous tractaments. \n En aquesta xerrada explorarem com el nostre laboratori, a la Facultat de Biociències de la Universitat Autònoma de Barcelona, investiguem aquests mecanismes,  combinant diferents tecnologies i experiments, i com aquests descobriments podrien obrir la porta a futures teràpies.',
        },
        {
          time: '10:40',
          title: "Aprendre Enginyeria Informàtica resolent reptes reals: l’experiència Innocrowd aplicada al desenvolupament de videojocs",
          speaker: 'Alejandro Ríos',
          summary: "La xerrada parteix de l’experiència personal del ponent, la tesi doctoral del qual estava centrada en la simulació d’emergències i la percepció del realisme d'avatars mitjançant entorns de realitat virtual. La seva línia de recerca actual està enfocada al desenvolupament d'aplicacions de realitat virtual orientades a la salut i al benestar. A través d’aquests exemples, a la xerrada es mostrarà com els videojocs i les tecnologies interactives poden anar molt més enllà de l’entreteniment i convertir-se en eines per entrenar persones, prevenir riscos o millorar la qualitat de vida. \n En aquesta xerrada es mostrarà com estudiar Enginyeria Informàtica pot ser una experiència motivadora, creativa i amb impacte real en la societat. A partir del projecte Innocrowd, s’explicarà com els estudiants universitaris aprenen resolent reptes reals proposats per empreses, especialment dels sectors de l’automoció i la salut, desenvolupant aplicacions interactives de realitat virtual que donen resposta a problemes del món real. \n Es presenten exemples concrets de projectes on els alumnes treballen en equip, prenen decisions com ho faria un professional i apliquen coneixements de programació, disseny i tecnologia per crear solucions útils. Aquest enfocament, basat en reptes reals, ajuda a entendre per a què serveix allò que s’aprèn a la carrera i augmenta la motivació i la implicació dels estudiants.",
        },
        {
          time: '11:20',
          title: 'Descanso y desayuno',
          speaker: '',
          summary: 'Se ofrecerá desayuno a los asistentes',
        },
        {
          time: '11:40',
          title: 'Robótica e inteligencia artificial al servicio del cuidado del Mediterráneo',
          speaker: 'Yolanda González',
          summary: "La robótica marina y la inteligencia artificial están abriendo nuevas posibilidades para explorar y proteger el mar. Robots submarinos equipados con sensores y cámaras permiten estudiar los ecosistemas marinos con gran detalle, mientras que la inteligencia artificial ayuda a analizar automáticamente grandes volúmenes de datos e imágenes. En esta charla se presentarán ejemplos de cómo estas tecnologías se utilizan en proyectos de investigación de la Universitat de les Illes Balears para monitorizar y conservar los ecosistemas del Mediterráneo.",
        },
        {
          time: '12:20',
          title: 'Odio-sea en el espacio',
          speaker: 'Rubén Sierra (@fisicomic)',
          summary: '¿Star Wars, Star Trek o Battlestar te parecen que son rigurosas? Mejor discutamos cuál es la peli más realista del espacio',
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
      day: 'Viernes 20 (tarde)',
      talks: [
        {
          time: '16:30',
          title: 'Bienvenida a STEM Talks 2026',
          summary: 'Bienvenida de los organizadores y presentación del STEM Talks 2026',
        },
        {
          time: '16:50',
          title: '',
          speaker: 'Javier Segovia',
          summary: '',
        },
        {
          time: '17:00',
          title: "Dose.VR()",
          speaker: 'Irene Ruiz',
          summary: "La realidad virtual ya se está utilizando para aliviar el dolor de pacientes en quimioterapia.En esta charla descubrirás que las experiencias inmersivas no solo entretienen: transforman.Y verás por qué lo que hacemos como devs puede ir mucho más allá del producto. Con casos reales y estudios que demuestran que, cuando lo inmersivo se diseña con intención, deja de ser un simple escape y ofrece alivio, calma y compañía. Porque cuando la experiencia se convierte en refugio, y la tecnología en cuidado, el propósito se vuelve real. return relief;.",
        },
        {
          time: '17:40',
          title: "Google Cloud & IA: De la infraestructura estratégica al impacto real en clientes",
          speaker: 'Júlia Hernández y Francisco Barbeito',
          summary: "Una inmersión en la estrategia de IA de Google Cloud, explorando desde la potencia de las TPU para el entrenamiento de LLMs hasta casos de éxito reales, pasando por los modelos y productos mas relevantes. Analizaremos por qué la nube es el motor de la revolución generativa y cómo estamos transformando el producto y los procesos de nuestros clientes mediante la integración de IA en sus servicios.",
        },
        {
          time: '18:20',
          title: 'Descanso y merienda',
          speaker: '',
          summary: 'Se ofrecerá merienda a los asistentes',
        },
        {
          time: '18:40',
          title: "De perros a perfiles verificados: ¿el fin del anonimato en Internet?",
          speaker: 'MariTere Nieto',
          summary: "En los años 90 se decía que “On the Internet, nobody knows you’re a dog”. Hoy, esa libertad se está desvaneciendo. Con el auge de la IA, el aumento de bots y la creciente vigilancia digital, Internet ya no es tan anónimo. Cada vez más, la solución que nos ofrecen es verificar nuestra identidad… a costa de nuestra privacidad. ",
        },
        {
          time: '19:20',
          title: 'Destrozando tu infancia',
          speaker: 'Ruben Sierra (@fisicomic)',
          summary: "¿Alguna vez te has preguntado cuanto mide el campo de fútbol de Oliver y Benji?  ¿O si Heidi estaba loca para subirse a ese columpio? Ven, que te lo cuento.",
        }, {
          time: '20:00',
          title: 'Nos vemos en el STEM Talks 2027',
          summary: 'Cierre de la jornada y agradecimiento de los organizadores.',
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