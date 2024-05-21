import { Collapse } from "antd";
import React from "react";
import successIcon from '../Assets/checked.png';
import errorIcon from '../Assets/mark.png';
import failureIcon from '../Assets/cross.png'


const ReportsList = ({ list }) => {
  console.log(list);

  const failedList = list?.filter((data) => data.status === "FAILURE");
  const successList = list?.filter((data) => data.status === "SUCCESS");
  const errorsList = list?.filter((data) => data.status === "ERROR");

  console.log(successList);
  console.log(errorsList);

  const successReports = (
    <div>
      {successList?.map((data) => (
        <div className="report successReport" key={data.id}>
          <div>{data.url}</div>
          <div>{"2 sec"}</div>
        </div>
      ))}
    </div>
  );

  const failedReports = (
    <div>
      {failedList?.map((data) => (
        <div className="report failReport" key={data.id} >
          <div>{data.url}</div>
          <div>{"2 sec"}</div>
        </div>
      ))}
    </div>
  );

  const errorReports = (
    <div>
      {errorsList?.map((data) => (
        <div className="report errorReport"  key={data.id}>
          <div>{data.url}</div>
          <div>{"2 sec"}</div>
        </div>
      ))}
    </div>
  );

  const collapseItems = [
    {
      key: "1",
      label: <div className="collapseHeader"><img src={failureIcon} height={12} /> {`Failed Tests  (${failedList?.length} / ${list?.length}) `}</div>,
      children: failedReports,
    },
    {
      key: "2",
      label:<div className="collapseHeader"><img src={successIcon} height={12} /> {`Success Tests  (${successList?.length} / ${list?.length}) `}</div>,
      children: successReports,
    },
    {
      key: "3",
      label:<div className="collapseHeader"> <img src={errorIcon} height={12} /> {`Error Tests  (${errorsList?.length} / ${list?.length}) `}</div>,
      children: errorReports,
    },
  ];

  return (
    <div>
      <div>
        <Collapse ghost items={collapseItems} />
      </div>
    </div>
  );
};

export default ReportsList;
