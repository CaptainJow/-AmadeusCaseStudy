import React, { useState, useEffect } from "react";
import { Input, Col, Row, Space, Form, Select } from "antd";
import { SwapOutlined, SwapRightOutlined } from "@ant-design/icons";
import AppLogo from "@/components/AppLogo";
import StartEndDateModal from "@/components/Formatics/StartEndDateModal";
import { onSearchFlights } from "@/toolkit/actions";
import { useDispatch, useSelector } from 'react-redux';


const { Option } = Select;

const MainPage = () => {
  const [fromLocation, setFromLocation] = useState();
  const [toLocation, setToLocation] = useState();
  const [tripType, setTripType] = useState("oneWay");

  const dispatch = useDispatch();

  const handleTripTypeChange = (value) => {
    setTripType(value);
  };

  const handleFromLocationChange = (value) => {
    setFromLocation(value);
  };

  const handleToLocationChange = (value) => {
    setToLocation(value);
  };

  const mainPageList = useSelector(({ mainPage }) => mainPage.flightsList);

  useEffect(()=>{
    dispatch(onSearchFlights({}));
  },[])

  useEffect(()=>{
    console.log(mainPageList)
  }, [mainPageList])

  return (
    <>
      <Row style={{ width: "100%", flexWrap: "nowrap", marginBottom: 10 }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Space>
            <h1 style={{ lineHeight: "32px", margin: 0 }}>
              Flight Search Engine
            </h1>
            <AppLogo />
          </Space>
        </Col>
      </Row>
      <Row style={{ width: "100%", flexWrap: "nowrap", marginBottom: 10 }}>
        <Col span={24}>
          <Space style={{ marginLeft: 5 }}>
            <Select
              defaultValue="oneWay"
              onChange={handleTripTypeChange}
              style={{ width: 130 }}
            >
              <Option value="oneWay">
                <SwapRightOutlined />
                One Way
              </Option>
              <Option value="return">
                <SwapOutlined /> Return Trip
              </Option>
            </Select>
          </Space>
        </Col>
      </Row>
      <Row
        gutter={10}
        style={{ width: "100%", flexWrap: "nowrap", marginBottom: 10 }}
      >
        <Col span={16}>
          <Row>
            <Col span={10}>
              <Select
                placeholder="From"
                style={{ width: "100%" }}
                onChange={handleFromLocationChange}
                value={fromLocation}
              >

              </Select>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <SwapOutlined style={{ fontSize: 24, margin: "0 10px" }} />
            </Col>
            <Col span={10}>
              <Select
                placeholder="To"
                style={{ width: "100%" }}
                onChange={handleToLocationChange}
                value={toLocation}
              >
                
              </Select>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <StartEndDateModal isOneWay={tripType === "oneWay"} />
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
