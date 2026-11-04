export const founderProfile = {
  name: "Paulo Regis Tironi",
  linkedinUrl: "https://www.linkedin.com/in/paulo-regis-tironi-6388249/",
  businessHistoryUrl: "https://www.econodata.com.br/consulta-empresa/11161683000185-paulo-regis-tironi",
  careerStartYear: "2002",
  foundingYear: "2009",
};

const founderCopy = {
  pt: {
    eyebrow: "Trajetória do fundador",
    role: "Fundador da Tironi Tech e arquiteto de soluções",
    summary: "Paulo trabalhou com desenvolvimento de software, análise de sistemas e arquitetura de soluções antes de liderar a vertical de IA da Tironi Tech.",
    timelineLabel: "Marcos da trajetória de Paulo Regis Tironi",
    milestones: [
      { period: founderProfile.careerStartYear, description: "Paulo começou a trabalhar com tecnologia." },
      { period: founderProfile.foundingYear, description: "Em 16 de setembro, Paulo registrou seu primeiro CNPJ com o nome fantasia Tironitech." },
      { period: "2013–2014", description: "Análise de sistemas e consultoria na NTT DATA." },
      { period: "2014–2022", description: "Desenvolvimento de software e arquitetura de soluções na Capgemini." },
      { period: "2022–2025", description: "Arquitetura de soluções na Worldpay." },
      { period: "2025", description: "A Tironi Tech passou a operar sua vertical de inteligência artificial por meio de outro CNPJ." },
    ],
    disclaimer: "Os períodos na NTT DATA, na Capgemini e na Worldpay fazem parte da carreira profissional de Paulo.",
    profileLinkLabel: "Perfil profissional no LinkedIn",
    businessHistoryLinkLabel: "Registro do primeiro CNPJ (2009) na Econodata",
  },
  en: {
    eyebrow: "Founder’s background",
    role: "Tironi Tech founder and solutions architect",
    summary: "Paulo worked in software development, systems analysis and solutions architecture before leading Tironi Tech’s AI business.",
    timelineLabel: "Milestones in Paulo Regis Tironi’s career",
    milestones: [
      { period: founderProfile.careerStartYear, description: "Paulo began working in technology." },
      { period: founderProfile.foundingYear, description: "On 16 September, Paulo registered his first business in Brazil under the trade name Tironitech." },
      { period: "2013–2014", description: "Systems analysis and consulting at NTT DATA." },
      { period: "2014–2022", description: "Roles in software development and architecture at Capgemini." },
      { period: "2022–2025", description: "Solution architecture at Worldpay." },
      { period: "2025", description: "Tironi Tech began operating its AI division under a separate Brazilian business registration (CNPJ)." },
    ],
    disclaimer: "The roles at NTT DATA, Capgemini and Worldpay are part of Paulo’s professional career.",
    profileLinkLabel: "Professional profile on LinkedIn",
    businessHistoryLinkLabel: "First Brazilian business registration (2009) on Econodata",
  },
  es: {
    eyebrow: "Trayectoria del fundador",
    role: "Fundador de Tironi Tech y arquitecto de soluciones",
    summary: "Paulo trabajó en desarrollo de software, análisis de sistemas y arquitectura de soluciones antes de dirigir la división de IA de Tironi Tech.",
    timelineLabel: "Hitos de la trayectoria de Paulo Regis Tironi",
    milestones: [
      { period: founderProfile.careerStartYear, description: "Paulo empezó a trabajar en tecnología." },
      { period: founderProfile.foundingYear, description: "El 16 de septiembre, Paulo registró su primera empresa en Brasil bajo el nombre comercial Tironitech." },
      { period: "2013–2014", description: "Análisis de sistemas y consultoría en NTT DATA." },
      { period: "2014–2022", description: "Desarrollo de software y arquitectura de soluciones en Capgemini." },
      { period: "2022–2025", description: "Arquitectura de soluciones en Worldpay." },
      { period: "2025", description: "Tironi Tech empezó a operar su división de inteligencia artificial con un registro empresarial brasileño (CNPJ) distinto." },
    ],
    disclaimer: "Los puestos en NTT DATA, Capgemini y Worldpay forman parte de la trayectoria profesional de Paulo.",
    profileLinkLabel: "Perfil profesional en LinkedIn",
    businessHistoryLinkLabel: "Primer registro empresarial brasileño (2009) en Econodata",
  },
};

export function getFounderCopy(language = "pt") {
  const locale = typeof language === "string" ? language.toLowerCase().split("-")[0] : "pt";
  return founderCopy[locale] || founderCopy.pt;
}
