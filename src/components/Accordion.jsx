 import Accordion from 'react-bootstrap/Accordion';
 import "../Style/AccordionStyle.css";


 function Tip() {
   return (
     <Accordion defaultActiveKey="0" id="AccordionContainer">
       <Accordion.Item eventKey="0">
         <Accordion.Header>What is an organic product?</Accordion.Header>
         <Accordion.Body>
            An organic product must bear the seal of the European Union of Organic Agriculture, 
            which means that it has to comply with the production and processing standards set by these regulations. 
            There are several synonyms for organic products, such as eco, organic, biological or bio.

            An ecological product must be made from natural ingredients, 
             obtained without using chemical products that are harmful to our health and respecting the environment. 
             Some years ago these items were called gourmet because of their quality and laborious production, 
             but now due to the cultural change and their high demand, 
            they can be purchased easily and at an affordable price in many specialised organic shops.
         </Accordion.Body>
   </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header>Yes to second-hand products. Re-use</Accordion.Header>
      <Accordion.Body>
           The best waste is the waste that does not exist, 
            and producers should therefore extend the useful life of products by preventing planned
           obsolescence and making appliances easy to repair and spare parts that can be sold for a longer period of time.
           It is true that a modern appliance consumes less energy than an older one, 
           but the environmental impact of manufacturing a new one cannot be ignored, 
            which can be avoided while the life of a second-hand one is being prolonged.
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
  );
}

export default Tip;

