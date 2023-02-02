import Accordion from "react-bootstrap/Accordion";
import Rating from "@mui/material/Rating";
import Form from "react-bootstrap/Form";
import rangePriceSlider from "./rangePrice";
import RangePriceSlider from "./rangePrice";

function FilterHotel() {
  const rating = [1, 2, 3, 4, 5];
  const typeHotel = [
    "All",
    "All inclusive",
    "Bed & Breakfast",
    "Hotel",
    "half-board",
  ];
  const pereferncesHotel = [
    { name: "High-speed INternet", value: 41 },
    { name: "Air conditioning", value: 52 },
    { name: "Swimming pool", value: 55 },
    { name: "Childcare", value: 12 },
    { name: "Free parking", value: 11 },
    { name: "Restaurant in hotel", value: 45 },
    { name: "Spa services on site", value: 57 },
  ];
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Star rating</Accordion.Header>
        <Accordion.Body>
          <div>
            {rating.map((value) => (
              <div>
                <div className="d-flex">
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    name="groupe1"
                    className="me-2"
                  />
                  <Rating name="read-only" value={value} readOnly />
                </div>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Budget</Accordion.Header>
        <Accordion.Body>
          <RangePriceSlider />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accomadation Type</Accordion.Header>
        <Accordion.Body>
          <div>
            {typeHotel.map((item) => (
              <div>
                <div className="d-flex">
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    name="groupe1"
                    className="me-2"
                  />
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Hotel Perferences</Accordion.Header>
        <Accordion.Body>
          <div>
            {pereferncesHotel.map(( item) => (
              <div>
                <div className="d-flex">
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    name="groupe1"
                    className="me-2"
                  />
                  <p >{item.name}</p> <p>({item.value})</p>
                </div>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FilterHotel;
