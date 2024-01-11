import React, { useState } from "react";
import { Col, Row, DatePicker } from "antd";

const StartEndDateModal = ({ isOneWay }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const isEndDateValid = () => {
    return !startDate || !endDate || endDate >= startDate;
  };

  return (
    <>
      <Row>
        <Col span={12} style={{ paddingRight: 8 }}>
          <DatePicker
            id="startDate"
            style={{ width: "100%" }}
            format={"DD/MM/YYYY"}
            value={startDate}
            placeholder="Departure"
            onChange={handleStartDateChange}
          />
        </Col>
        {!isOneWay && (
          <Col span={12} style={{ paddingRight: 8 }}>
            <DatePicker
              id="endDate"
              style={{ width: "100%" }}
              format={"DD/MM/YYYY"}
              placeholder="Return"
              value={endDate}
              onChange={handleEndDateChange}
              disabledDate={(current) => current < startDate}
            />
          </Col>
        )}
      </Row>
      {!isEndDateValid() && !isOneWay && (
        <p style={{ color: "red" }}>
          End date must be greater than or equal to start date
        </p>
      )}
    </>
  );
};

export default StartEndDateModal;
