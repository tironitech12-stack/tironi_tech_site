import { diagnosticHref } from './positioning.js';

export const homeServices = {
  pt: {
    title: 'Onde a Tironi Tech atua',
    lead: 'Desenvolvemos sistemas para processos que precisam de uma solução própria, conectamos ferramentas que trabalham isoladas e automatizamos rotinas que ainda dependem de trabalho manual.',
    cards: [
      ['Software sob medida', 'Criamos sistemas internos, portais e fluxos de aprovação com as regras da sua empresa.', 'Ver desenvolvimento de software sob medida'],
      ['Automação de processos com IA', 'Automatizamos etapas como triagem de documentos, atualização de dados e acompanhamento de tarefas. As exceções podem seguir para revisão humana.', 'Ver automação de processos com IA'],
      ['Integração de sistemas', 'Conectamos ERP, CRM, e-commerce e sistemas internos para sincronizar pedidos, cadastros e estoque e acompanhar falhas.', 'Ver integração de sistemas empresariais'],
      ['Consultoria e implantação de IA', 'Avaliamos processo, dados e permissões e definimos um piloto com critérios para validar a entrada em operação.', 'Ver consultoria de IA para empresas'],
    ],
    question: 'Qual processo você precisa melhorar?',
    contact: 'Descrever meu projeto',
    guide: 'Como escolher a solução para sua empresa',
  },
  en: {
    title: 'What Tironi Tech does',
    lead: 'We build custom systems, connect the tools your business already uses and automate manual processes.',
    cards: [
      ['Custom software', 'We build internal systems, portals and approval workflows around your business rules.', 'Explore custom software'],
      ['AI process automation', 'We automate document triage, data updates and routine tasks, with human review for exceptions.', 'Explore AI automation'],
      ['Systems integration', 'We connect ERP, CRM, e-commerce and internal systems to synchronize business data and monitor failures.', 'Explore systems integration'],
      ['AI consulting and implementation', 'We assess your processes, data and permissions and define a pilot with acceptance criteria.', 'Explore AI consulting'],
    ],
    question: 'Which process do you need to improve?',
    contact: 'Describe my project',
    guide: 'How to choose the right solution',
  },
  es: {
    title: 'Dónde actúa Tironi Tech',
    lead: 'Desarrollamos sistemas a medida, conectamos las herramientas de tu empresa y automatizamos procesos manuales.',
    cards: [
      ['Software a medida', 'Creamos sistemas internos, portales y flujos de aprobación según las reglas de tu empresa.', 'Ver desarrollo de software a medida'],
      ['Automatización de procesos con IA', 'Automatizamos la clasificación de documentos, la actualización de datos y las tareas repetitivas con revisión humana para las excepciones.', 'Ver automatización con IA'],
      ['Integración de sistemas', 'Conectamos ERP, CRM, comercio electrónico y sistemas internos para sincronizar datos y supervisar fallos.', 'Ver integración de sistemas'],
      ['Consultoría e implementación de IA', 'Evaluamos procesos, datos y permisos y definimos un piloto con criterios de aceptación.', 'Ver consultoría de IA'],
    ],
    question: '¿Qué proceso necesitas mejorar?',
    contact: 'Describir mi proyecto',
    guide: 'Cómo elegir la solución adecuada',
  },
};

export const homeServicePaths = [
  '/software-sob-medida',
  '/automacao-processos-com-ia',
  '/integracao-de-sistemas',
  '/consultoria-ia-para-empresas',
];

export const homeServicesContact = diagnosticHref('desenvolvimento', 'onde-atuamos');

export const homeBuyingQuestions = [
  ['O que preciso enviar para pedir orçamento?', 'Descreva o processo, os sistemas envolvidos e o que a equipe precisa conseguir fazer. Um exemplo de situação que funciona e outro que dá problema ajudam a delimitar o escopo.'],
  ['Quanto custa e quanto tempo leva o projeto?', 'O orçamento e o prazo dependem dos fluxos, das integrações, dos dados disponíveis e do suporte necessário. A proposta pode separar a primeira entrega das etapas seguintes.'],
  ['É possível aproveitar meu ERP ou CRM?', 'Avaliamos os sistemas e seus pontos de integração. O escopo identifica os dados que podem circular, as permissões e como a equipe saberá se uma etapa falhou.'],
  ['Como validamos a implantação?', 'A proposta define cenários de aceite, incluindo o fluxo esperado, exceções e o que precisa funcionar para a equipe assumir a operação.'],
];

const primaryProjects = ['Sales Game', 'DeleteActPro', 'BI Personalizado'];

export function orderHomeProjects(projects) {
  return [
    ...primaryProjects.flatMap((title) => projects.filter((project) => project.title === title)),
    ...projects.filter((project) => !primaryProjects.includes(project.title)),
  ];
}
