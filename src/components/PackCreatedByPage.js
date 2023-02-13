import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import ListItem from "./ListItem";

import { fetchPackByAgency, requestDeletePack } from "../redux/actions/packageActionCreators";
import { Container } from "react-bootstrap";

function PackCreatedByPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const AllpacksByPage = useSelector((state) => state.packs.createdByPage);
  const { id } = useParams();
  console.log(AllpacksByPage);

  useEffect(() => {
    dispatch(fetchPackByAgency(id));
  }, [dispatch, id]);
  return (
    <Container>
      <div
       className="row gy-4"
      >
        {AllpacksByPage.map((pack, index) => (
          <div className="col" key={index}>
            <ListItem
              title={pack.title}
              date={pack.createdAt}
              linkUpdate={`/update-pack/${pack._id}`}
              handleClose={handleClose}
              handleShow={handleShow}
              requestRemove={requestDeletePack(pack._id, handleClose)}
              show={show}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default PackCreatedByPage;
