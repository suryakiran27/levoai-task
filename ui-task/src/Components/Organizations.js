import React from "react";
import useFetchList from "../CustomComponents/useFetchList";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const Organizations = () => {
  const [data, loading] = useFetchList("https://my.api.mockaroo.com/organizations.json?key=78fbcc90");
  const navigate = useNavigate();

  // console.log('org list:', data);
  // const data = [
  //   {
  //     id: 1,
  //     name: "Voonte",
  //     owner_email: "ccurtayne0@goo.gl",
  //     owner_name: "Cheryl Curtayne",
  //     owner_picture: "http://dummyimage.com/230x100.png/cc0000/ffffff",
  //   },
  //   {
  //     id: 2,
  //     name: "Youspan",
  //     owner_email: "cleif1@webs.com",
  //     owner_name: "Cecilia Leif",
  //     owner_picture: "http://dummyimage.com/165x100.png/cc0000/ffffff",
  //   },
  // ];

  const gotoOrgDetails = (data) => {
    navigate("/orgDetails", { state: data });
  };

  return (
    <div>
      <h3>Levo</h3>
      <div className="orgConatainer">
        <div className="orgHeader">
          <h4>Organizations</h4>
          <p>Pick the organizatios you want to access to</p>
        </div>
        {loading ? (
          <div className="loader">
            <Spin spinning={loading} size="large" />
          </div>
        ) : (
          <div className="orgList">
            {data?.map((item) => {
              return (
                <div
                  className="orgItem"
                  key={item.id}
                  onClick={() => gotoOrgDetails(item.id)}
                >
                  <div>
                    <img className="orgImg" src={item.owner_picture} alt="" />
                  </div>
                  <div className="orgName">
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Organizations;
