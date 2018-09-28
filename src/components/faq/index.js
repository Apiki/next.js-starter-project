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
      <h2 className="faq__title">Relaxe porque sempre<br /> estaremos aqui para você.</h2>

      <Accordion>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>Quais métodos de pagamento vocês aceitam?</h3>
            <FontAwesomeIcon icon={faArrowDown} />
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod.
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3>Quem pode participar do evento?</h3>
            <FontAwesomeIcon icon={faArrowDown} />
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod.
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
              Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod.
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
              Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod.
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
              Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod.
            </p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export { FAQ };
