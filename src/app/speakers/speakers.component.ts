import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})

export class SpeakersComponent {
  speakers = [
    {
      name: 'Maria Teresa Nieto (Maritere)',
      position: 'Líder de estrategia de producto en Telefónica Tech',
      image: 'assets/speakers-2025/maritere.jpeg',
      bio: "María Teresa Nieto, especialista en identidad digital, privacidad y blockchain, lidera la estrategia y el producto relacionado con tecnologías de identidad soberana y la adopción del EUDI Wallet en Telefónica. Es Ingeniera Informática por la Universidad Carlos III y cuenta con más de 10 años de experiencia impulsando la innovación. Además de su labor profesional, es docente en universidades y escuelas de negocios, compartiendo su experiencia con las futuras generaciones. \n\n Apasionada por la diversidad en el sector tecnológico, dirige Women Techmakers Madrid (una iniciativa comunitaria local de Google) y contribuye activamente al programa #WomenWithTech de Telefónica Tech. En 2022, fue reconocida por Mujer Hoy en su edición Next Generation como una de las mujeres líderes en tecnología. Además, fue una de las 5 finalistas en los premios Women In Tech Europe Awards 2025."
    },
    {
      name: 'Albert Quintana',
      position: 'Vicedecano de Calidad y Plan Estratégico en la facultat de biociències de la Universitat Autònoma de Barcelona',
      image: 'assets/speakers-2026/albert.jpeg',
      bio: "Vicedecano de Calidad y Plan Estratégico en la facultad de biociencias de la Universidad Autónoma de Barcelona. También es Profesor agregado del Departamento de Biología Celular, Fisiología e Inmunología y miembro del Instituto de Neurociencias de la Universidad Autónoma de Barcelona."
    },
    {
      name: 'Yolanda Gonzalez',
      position: 'Profesora titular en la Universitat de les Illes Balears',
      image: 'assets/speakers-2026/yolanda.jpg',
      bio: "Ingeniera informática y doctora en ingeniería industrial. Profesora titular de universidad del área de Arquitectura y Tecnología de Computadores en el Departamento de Ciencias Matemáticas e Informática. Es miembro del grupo de investigación SRV-MARIS (Marine Robotics and Intelligent Systems) de la Universitat de les Illes Balears. Actualmente es la subdirectora y responsable del área de inteligencia artificial del centro Espai cotib (Espai de Coneixement per a un Territori Intel·ligent Balear). Ha sido la directora de la Escuela Politécnica Superior entre los años 2011 y 2015 y vicerrectora de gestión y política académica de grado desde el 2021 al 2025. En 2020 fue reconocida como una de las 'Mujeres que cambian el mundo' en la exposición lanzada por la Asociación de Parques Científicos y Tecnológicos de España (APTE). Lidera actualmente diferentes proyectos de investigación y transferencia relacionados con la IA aplicada a entornos marinos, publica regularmente sus resultados científicos en congresos y revistas de alto impacto y participa asiduamente en actos de divulgación científica."
    },
    {
      name: 'Rubén Sierra',
      position: 'Creador de Fisicomic y creador de contenido en 20minutos',
      image: 'assets/speakers-2026/ruben.png',
      bio: "Rubén Sierra es físico e ingeniero electrónico con un máster en ciencia y tecnología espacial. A través de su proyecto Fisicomic, difunde la ciencia en las redes sociales, ofreciendo análisis, curiosidades y teorías sobre series populares y clásicos del género. Su estilo dinámico y entretenido lo ha convertido en una referencia para los aficionados que buscan descubrir nuevos títulos o profundizar en sus historias favoritas, explorando rigurosamente si lo que ve en mangas, animes, series, videojuegos y todo lo relacionado con el mundo geek puede suceder en la vida real, y compartiendo este conocimiento de una manera accesible y atractiva. \n\n Escribe la sección «La ciencia de lo friki» en el periódico nacional 20 Minutos y recorre escenarios y teatros de todo el país con sus espectáculos  Destrozando tu infancia, la Teoría en la Tontería y No es una pregunta estúpida. \n\n Recientemente ha actuado en eventos como Starmus, Cuanto Talento y en Nakama Cruise surcando Francia e Italia."
    },
    {
      name: 'Irene Ruiz Soto',
      position: 'Business development y analista y científica de datos en Allianz',
      image: 'assets/speakers-2026/irene.jpeg',
      bio: "Business development y analista y científica de datos en Allianz, cuenta con un perfil híbrido con formación en Marketing e Ingeniería Telemática, especializada en conectar la innovación tecnológica con el valor de negocio. En Telefónica Open Gateway, ha impulsado el desarrollo de negocio y las relaciones con desarrolladores mediante el soporte técnico en APIs y la creación de casos de uso estratégicos. Como Women Techmakers Ambassador y líder de comunidades de Google, ha sido reconocida como mejor líder de comunidad de Europa (2020, 2021), destacando por la organización de eventos masivos como el AI Fest y el diseño de programas de mentoría de alto impacto."
    },
    {
      name: 'Francisco Barbeito',
      position: 'Technical account Manager en Google',
      image: 'assets/speakers-2026/francisco.png',
      bio: "Actualmente en Google Cloud, ejerce como asesor técnico de confianza para clientes estratégicos de EMEA, conectando la arquitectura técnica con el valor de negocio en procesos de transformación digital. Especializado en CloudAI y GenAI durante los últimos dos años, tiene un máster y un grado en Informática, además de las certificaciones PCA y PDE. Sus orígenes como desarrollador autónomo le han aportado una mentalidad orientada al cliente que aplica hoy en el ámbito corporativo."
    },
    {
      name: 'Julia Hernández',
      position: 'AI Customer Engineer en Google Cloud',
      image: 'assets/speakers-2026/julia.jpeg',
      bio: "AI Customer Engineer en Google Cloud, donde ayuda a empresas españolas a crecer en este ecosistema, es graduada Cum Laude en Matemáticas Aplicadas por la UCLA y tiene un máster en Big Data y Machine Learning por la Universidad Pontificia Comillas. Exfutbolista profesional, compaginó sus estudios en Estados Unidos compitiendo en la élite universitaria (NCAA Division-1) con el equipo de fútbol femenino de la universidad."
    },
    {
      name: 'Alejandro Rios',
      position: 'Profesor en el departamento de computación de la Universitat Politècnica de Catalunya',
      image: 'assets/speakers-2026/alejandro.jpeg',
      bio: "L'Alejandro Ríos és doctor en Computació per la Universitat Politècnica de Catalunya (UPC), on suma més de 25 anys d'experiència en docència i recerca aplicada. Especialista en Realitat Virtual immersiva, gràfics i interacció persona-ordinador, la seva activitat investigadora destaca per l'anàlisi d'avatars i el comportament humà en entorns digitals, amb publicacions d'alt impacte en salut i simulació. Referent en la innovació educativa, és col·laborador clau del projecte InnoCrowd, guardonat amb tres premis institucionals el 2025 pel seu lideratge en l’aprenentatge basat en reptes. Actualment exerceix a l'EPSEVG, on combina la docència en videojocs i programació amb la mentorització de més de 30 projectes de recerca i transferència tecnològica."
    },
    {
      name: 'Joan León',
      position: 'Web Performance Artisan ajudant equips a crear webs més ràpides. Google Developer Expert en Web Technologies i Cloudinary Ambassador',
      image: 'assets/speakers-2026/joan.avif',
      bio: "Soc Joan León, Web Performance Artisan, Google Developer Expert en Web Technologies i Cloudinary Ambassador. Ajudo equips i empreses a crear experiències digitals més ràpides mitjançant auditories de rendiment, optimització frontend i estratègies enfocades a millorar la conversió i l’impacte real en el negoci. M’apassiona compartir coneixement en meetups, conferències, workshops i al meu blog joanleon.dev. També estic actiu a @nucliweb, compartint recursos, eines i novetats de l’ecosistema frontend i Web Performance. Actualment, exploro l’ús d’IA i agents per automatitzar auditories i millorar els processos d’optimització web. Crec que la velocitat no és només una mètrica, sinó una manera de millorar l’experiència de les persones i fer créixer els projectes a la web."
    },
    {
      name: 'Victor Sánchez',
      position: 'Emprendedor - MamoriLabs',
      image: 'assets/speakers-2026/victor.png',
      bio: "Víctor es desarrollador, ponente y emprendedor. Ha cofundado y dirigido varias startups, entre ellas Mashme.io, que ofrecía aplicaciones de colaboración en vídeo a universidades y empresas de todo el mundo, con usuarios en 71 países. \n\n Actualmente dirige Digital Mishaps LLC, donde ayuda a las empresas a aplicar la inteligencia artificial de forma efectiva y estratégica en sus productos y procesos. \n\n Su obsesión es HTML5, la inteligencia artificial, los videojuegos y las aplicaciones del lado del cliente. Durante los últimos años, Víctor ha organizado eventos y conferencias tecnológicas para niños y adultos en iniciativas como HTML5 vs Android, Hack4Good Spain, HTML5Party o JuntosDesdeCasa, con el objetivo de acercar la informática y las disciplinas STEM a más personas."
    },
  ];

  selectedSpeaker: any = null;

  openModal(speaker: any) {
    this.selectedSpeaker = speaker; // Set the selected speaker to show in the modal
  }

  closeModal() {
    this.selectedSpeaker = null; // Close the modal
  }

}
