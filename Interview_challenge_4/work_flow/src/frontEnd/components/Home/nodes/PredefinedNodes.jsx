import React from "react";
import { Handle, Position } from 'reactflow';


export default function PredefinedNodes({ data }) {
  return (
    <div className="responsive-node">
      <div className="node-content">
        <p>{data.label}</p>
      </div>
    </div>
  );
}
