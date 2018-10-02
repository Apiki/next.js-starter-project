import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import './faq.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => (

  <div id="faq" className="section-faq">
    <div className="container">
      <span className="faq__subtitle">AINDA TEM ALGUMA DÚVIDA?</span>
      <h2 className="faq__title">A gente descasca o abacaxi pra você</h2>

      <Accordion>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>Quais métodos de pagamento vocês aceitam?</h3>
            <FontAwesomeIcon icon={faArrowDown} />
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              De acordo com a plataforma Sympla, será aceito Apple Pay, boleto bancário, cartão de crédito (American Express, Diners Club, Hipercard, Mastercard e Visa), débito online ou PayPal.
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem expanded>
          <AccordionItemTitle>
            <h3>Quem pode participar do evento?</h3>
            <FontAwesomeIcon icon={faArrowDown} />
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Qualquer WordPress Lover, mas pela complexidade dos temas abordados, sugerimos: C-Leave, Developer Sênior, Gestor de Produtos e/ou Projetos.
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3>Pretendem fazer um novo evento?</h3>
            <FontAwesomeIcon icon={faArrowDown} />
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Sim, o WP Summit entrará para grade anual de eventos da Apiki.
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3>Posso cancelar minha inscrição?</h3>
            <FontAwesomeIcon icon={faArrowDown} />
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Sim, em até 48h após o evento já teremos entrado com o processo de reembolso.
            </p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export { FAQ };
