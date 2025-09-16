import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
   
     {
      src: 'assets/img/projects/conversor.png',
      alt: 'Projeto conversor de moedas',
      title: 'conversor de moedas',
      with: '100%',
      height: '80%',
      description:
        '<p>Desenvolvi um conversor de moedas utilizando HTML, CSS3 e JavaScript puro, com foco em praticar lógica de programação e manipulação do DOM. O sistema permite converter valores entre Dólar Americano (USD), Real Brasileiro (BRL), Euro (EUR), Libra Esterlina (GBP) e Bitcoin (BTC), com uma interface simples e responsiva. As taxas de conversão são fixas e definidas manualmente no código, sem uso de APIs externas, garantindo funcionamento offline e controle total sobre os valores. O projeto reforça conceitos fundamentais de front-end, como estruturação semântica, estilização moderna e interatividade com JavaScript..</p>',
      links: [
        {
          name: 'Repositório GitHub',
          href: 'https://github.com/jonasrodrigs/conversor-de-moedas',
        },
      ],
    },
    // ----------------------------------------------------
     {
      src: 'assets/img/projects/burg.png',
      alt: 'projeto burg',
      title: 'Burg & manipulação de arrays',
      with: '100%',
      height: '80%',
      description:
        '<p>Criei um cardápio dinâmico de hamburgueria utilizando HTML, CSS3 e JavaScript, explorando métodos como forEach, map, filter e reduce para manipular e exibir os dados dos produtos de forma interativa. O sistema permite listar hambúrgueres com nome, descrição, preço e categoria, além de aplicar filtros por tipo, calcular valores totais e organizar os itens dinamicamente. A interface é responsiva e pensada para oferecer uma experiência simples e funcional, reforçando conceitos de programação funcional, estrutura de dados e interatividade no front-end.</p>',
      links: [
        {
          name: 'Repositório GitHub',
          href: 'https://github.com/jonasrodrigs/dev-burg',
        },
      ],
    },
    //----------------------------------------------------
     {
     src: 'assets/img/projects/pet.png',
      alt: 'projeto PetShop',
      title: 'PetShop landing page',
      with: '100%',
      height: '80%',
      description:
        '<p>Desenvolvi uma landing page responsiva utilizando HTML5 e CSS3, com foco em apresentar conteúdo de forma clara e atrativa em diferentes dispositivos. A estrutura foi construída com semântica adequada, organização modular e estilização moderna, garantindo boa performance e acessibilidade. A responsividade foi aplicada com media queries e layout flexível, adaptando o design para telas de celular, tablet e desktop. O projeto reforça boas práticas de front-end, como separação de responsabilidades, uso de variáveis CSS e design centrado na experiência do usuário.</p>',
      links: [
        {
          name: 'Repositório GitHub',
          href: 'https://github.com/jonasrodrigs/projeto-we-care-resp',
        },
      ],
    },

    //---------------------------
     {
     src: 'assets/img/projects/capa portfólio.png',
      alt: 'Projeto portifólio em angular',
      title: 'Portifólio',
      with: '100%',
      height: '80%',
      description:
        '<p>Este portfólio foi desenvolvido com Angular, priorizando uma estrutura de código organizada, responsividade e uma navegação fluida. O objetivo é apresentar projetos de forma clara e profissional, refletindo minha abordagem prática e focada em performance na construção de interfaces modernas.</p>',
      links: [
        {
          name: 'Repositório GitHub',
          href: 'https://github.com/jonasrodrigs',
        },
      ],
    },
    //----------------------------
     {
     src: 'assets/img/projects/Quiz.png',
      alt: 'ProjetoBuzzfeed',
      title: 'Buzzfeed',
      with: '100%',
      height: '80%',
      description:
        '<p>ProjetoBuzzfeed é um quiz interativo desenvolvido com Angular, inspirado no estilo Buzzfeed. Criado com foco em aprendizado e diversão, o projeto explora conceitos fundamentais do framework como componentização, data binding, organização de pastas e lógica de exibição de resultados. Uma iniciativa leve e criativa para praticar desenvolvimento frontend com carinho e propósito.</p>',
      links: [
        {
          name: 'Repositório GitHub',
          href: 'https://github.com/jonasrodrigs/Dev-Quizz',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
