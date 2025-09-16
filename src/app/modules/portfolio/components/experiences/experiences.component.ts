import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista de soluções Full Stack',
        p: 'capgemini | Nov 2025 - Hibrido(Atuando)',
      },
      text: '<p>Desde novembro de 2025, atuo como Analista de Soluções na Capgemini, com foco em desenvolvimento front-end utilizando tecnologias como HTML5, CSS3, JavaScript, TypeScript, Angular 2+ e Angular Material. No back-end, aplico Java em provas de conceito conforme a necessidade dos projetos..</p>',
    },
    {
      summary: {
        strong: 'AI Writing Evaluator(freelancer)',
        p: 'Outlier | Jan 2023 -Nov 2024',
      },
      text: '<p>Em 2023, atuei como AI Writing Evaluator na Outlier, avaliando e analisando conteúdos gerados por inteligência artificial. Minhas principais atividades incluem a revisão crítica de textos, identificação de inconsistências, melhoria da clareza e coesão, além de sugerir ajustes de estilo e adequação ao público-alvo. Também aplico métricas de qualidade linguística e de usabilidade, contribuindo para o aperfeiçoamento contínuo de modelos de linguagem baseados em IA..</p>',
    },
    {
      summary: {
        strong: 'Conferente',
        p: 'Bora Transportes |  2024'
      },
      text: '<p>Em 2024, atuei como Conferente na Bora Transportes, sendo responsável pela conferência de cargas, verificação de notas fiscais e checagem de mercadorias recebidas e expedidas. Minhas atividades incluem controle de estoque, organização do armazém, identificação de divergências e apoio logístico para garantir precisão e agilidade nas operações de transporte..</p>',
    }
    
  ]);
}
