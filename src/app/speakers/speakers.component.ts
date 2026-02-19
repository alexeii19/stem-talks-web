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
      bio: "Maritere es ingeniera informática y cuenta con más de ocho años de experiencia en el campo de la tecnología. Actualmente trabaja como Developer Relations Manager en Telefónica. Durante 2020, Maritere formó parte del Technical Steering Committee de Hyperledger, uno de los consorcios empresariales de blockchain más importantes del ecosistema. Desde 2017, compagina su trabajo principal con la docencia en tecnología blockchain en universidades españolas. María Teresa también está comprometida con la visibilidad de las mujeres en el mundo STEM. Lidera la organización de Women Techmakers Madrid, una comunidad local de una iniciativa de Google. En 2022, fue reconocida por Mujer Hoy en Next Generation, como una mujer para liderar en tecnología."
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
      bio: "Doctora en Ingeniería Industrial y profesora titular de universidad del área de Arquitectura y Tecnología de Computadores en el Departamento de Ciencias Matemáticas e Informática en la Universidad de las Islas Baleares. También fue la directora de la Escuela Politécnica Superior de la Universidad de las Islas Baleares entre 2012 y 2016."
    },
    {
      name: 'Rubén Sierra',
      position: 'Creador de Fisicomic y creador de contenido en 20minutos',
      image: 'assets/speakers-2026/ruben.jpeg',
      bio: "Graduado en Física e Ingeniería Electrónica con un máster en Ciencia y Tecnología Espacial, es el creador de Fisicomic y cofundador de Garuna Effect, asociación de divulgación científica. Galardonado con el XVI Premio Creadores 20minutos, actualmente escribe sobre la ciencia del mundo friki en el mismo periódico, una labor que combina su pasión por el dibujo de cómics con la docencia, la gestión de eventos y la narración de pro-wrestling."
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
  ];

  selectedSpeaker: any = null;

  openModal(speaker: any) {
    this.selectedSpeaker = speaker; // Set the selected speaker to show in the modal
  }

  closeModal() {
    this.selectedSpeaker = null; // Close the modal
  }

}
