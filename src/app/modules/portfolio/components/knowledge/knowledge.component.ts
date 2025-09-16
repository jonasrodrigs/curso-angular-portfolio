import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
   
     {
      src: 'assets/icons/iconspng/html-5.png',
      alt: 'Ícone de conhecimento de html5',
    },
     {
      src: 'assets/icons/iconspng/css-3.png',
      alt: 'Ícone de conhecimento de html5',
    },
     {
      src: 'assets/icons/iconspng/JS.png',
      alt: 'Ícone de conhecimento de html5',
    },
     {
      src: 'assets/icons/iconspng/angular.png',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/iconspng/node.png',
      alt: 'Ícone de conhecimento de html5',
    },
   {
      src: 'assets/icons/iconspng/java.png',
      alt: 'Ícone de conhecimento de html5',
    },
{
      src: 'assets/icons/iconspng/SQL.png',
      alt: 'Ícone de conhecimento de html5',
    },
  ]);
}
