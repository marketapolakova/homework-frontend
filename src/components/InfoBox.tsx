import React from "react";
import Card from "react-bootstrap/Card";

type PropsType = {
  name: string;
  value: number;
  unit?: string;
};

function InfoBox({ name, value, unit }: PropsType) {
  return (
    <Card className="text-center">
      <h5>{name}</h5>
      <h5>
        {value} {unit}
      </h5>
    </Card>
  );
}

export default InfoBox;
