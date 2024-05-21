import React, { useState, useEffect } from "react";
import TestReports from "../Components/TestReports";
import useFetchList from "../CustomComponents/useFetchList";
import { Spin } from "antd";

const OrgDetails = ({ orgId }) => {
  const [showReportDetails, setShowReportDetails] = useState(false);
  const [selectedReportData, setSelectedReportData] = useState(null);

  const getReportsListUrl = `https://my.api.mockaroo.com/organizations/${orgId}/reports.json?key=78fbcc90`;
  const getReportDetails = `https://my.api.mockaroo.com/organizations/${orgId}/reports/${selectedReportData?.id}/details.json?key=78fbcc90`;

  const [data, loading] = useFetchList(getReportsListUrl);
  console.log("reports list:", data);

  const [reportDetails] = useFetchList(getReportDetails);
  console.log("resport details:", reportDetails);

  const gotoReportDetails = (report) => {
    console.log(report);
    setSelectedReportData(report);
    setShowReportDetails(true);
  };

  const gotoReportsList = () => {
    setShowReportDetails(false);
  };

  return (
    <div className="">
      <div className="">
        <div className="testReports">
          <span className="chainLink" onClick={gotoReportsList}>
            Test Reports{" "}
          </span>
          <span>{showReportDetails && `< ${selectedReportData.name}`}</span>
        </div>
        {showReportDetails ? (
          <div>
            <TestReports testReport={reportDetails} />
          </div>
        ) : (
          <div>
            {loading ? (
              <div className="loader">
                <Spin spinning={loading} size="large" />
              </div>

            ) : (
              <div className="testReportsList">
                {data?.map((report) => (
                  <div
                    key={report.id}
                    className="testReport"
                    onClick={() => gotoReportDetails(report)}
                  >
                    <div>
                      {report.name}
                      <div className="timeZones">
                        {"2min ago - 10mins long"}
                      </div>
                    </div>
                    <div className="passFailContainer">
                      <span className="passCase">{`${report?.succeed_tests} passed `}</span>
                      <span className="failCase">{`${report?.failed_tests} failed `}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrgDetails;
