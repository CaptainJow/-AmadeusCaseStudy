import { List, Avatar } from "antd";
import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

const StyledAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const calculateDuration = (departureTime, arrivalTime) => {
  const departure = dayjs(departureTime);
  const arrival = dayjs(arrivalTime);
  const duration = arrival.diff(departure, "minute");
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}:${minutes}`;
};

const ListComponent = ({ flightsList }) => {
  return (
    <List
      header={<div>Flights List</div>}
      bordered
      dataSource={flightsList}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<StyledAvatar src={item.airpic} />}
            title={
              <div>
                <div>{`${item.departure_city} (${item.departure_airport_code}) --> ${item.destination_city} (${item.destination_airport_code})`}</div>
                <div style={{ textAlign: "center" }}>
                  {`Duration: ${calculateDuration(
                    item.departure_time,
                    item.arrival_time
                  )}`}
                </div>
              </div>
            }
            description={
              <>
                <div>{`${dayjs(item.departure_time).format("h:mm A")} - ${dayjs(
                  item.arrival_time
                ).format("h:mm A")}`}</div>
                <div>{dayjs(item.departure_time).format("  D MMM, YYYY")}</div>
              </>
            }
          />
          <h4>{`${item.price}TL`}</h4>
        </List.Item>
      )}
    />
  );
};

export default ListComponent;
