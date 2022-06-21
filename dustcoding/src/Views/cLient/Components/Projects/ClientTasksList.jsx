import React, { useEffect } from "react";
import { GetProjectbyId } from "../../../../api/ProjectsFunction";
import { useParams } from "react-router-dom";

const ClientTasksList = () => {
  const id = useParams();
  console.log(id);
  useEffect(() => {
    GetProjectbyId(id)
      .then((res) => {})
      .catch((err) => {
        return console.log({ msg: err.message });
      });
  }, [id]);
  return <div>ClientTasksList</div>;
};

export default ClientTasksList;
