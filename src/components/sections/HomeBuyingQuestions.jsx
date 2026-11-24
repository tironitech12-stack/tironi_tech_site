import { useLanguage } from '../../context/LanguageContext';
import { homeBuyingQuestions } from '../../content/homeServices';
import '../../styles/service-landing.css';

export default function HomeBuyingQuestions() {
  const { language } = useLanguage();

  if (language !== 'pt') return null;

  return (
    <section className="tt-service-faq">
      <div className="tt2-container">
        <h2>Perguntas antes de contratar</h2>
        {homeBuyingQuestions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
