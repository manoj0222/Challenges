import React, { useState, useCallback } from 'react';
import "../../styles/workflowbuilder.css";
import ReactFlow, { addEdge, Controls } from 'reactflow';
import initialNodes from './nodes/node.js';
import "../../styles/node.css";
import { v4 as uuidv4 } from 'uuid';
import PredefinedNodes from './nodes/PredefinedNodes.jsx';

export default function WrokFlowBuilder() {
  const [elements, setElements] = useState(initialNodes);

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactflowType = event.dataTransfer.getData('application/reactflow');
      const position = {
        x: event.clientX - event.currentTarget.getBoundingClientRect().left,
        y: event.clientY - event.currentTarget.getBoundingClientRect().top - 40 // Adjust position to fit container
      };
      const newElement = {
        id: uuidv4(), // Generate a unique ID for the new element
        type: reactflowType,
        data: { label: reactflowType }, // Customize label as needed
        position: position
      };
      setElements((els) => els.concat(newElement));
    },
    []
  );
  
  

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <main>
      <h4 style={{ textAlign: "center", color: "lightblue" }}>WorkFlow Builder Screen</h4>
      <section className="workflowbuilderparent" onDrop={handleDrop} onDragOver={handleDragOver}>
        <section className="predefined-sect">
          <div className="predefinednode-title"><b>WorkFlow Nodes</b></div>
          <div className='node_names' draggable onDragStart={(event) => event.dataTransfer.setData('application/reactflow', 'start')}>Start</div>
          <div className='node_names' draggable onDragStart={(event) => event.dataTransfer.setData('application/reactflow', 'filterData')}>FilterData</div>
          <div className='node_names' draggable onDragStart={(event) => event.dataTransfer.setData('application/reactflow', 'wait')}>Wait</div>
          <div className='node_names' draggable onDragStart={(event) => event.dataTransfer.setData('application/reactflow', 'convertFormat')}>ConvertFormat</div>
          <div className='node_names' draggable onDragStart={(event) => event.dataTransfer.setData('application/reactflow', 'sendPostHttpRequest')}>Send Post Http Request</div>
          <div className='node_names' draggable onDragStart={(event) => event.dataTransfer.setData('application/reactflow', 'end')}>End</div>
        </section>
        <section className="workflowbuilder-sec">
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            deleteKeyCode={46} /* Set key code for delete */
            onLoad={reactFlowInstance => reactFlowInstance.fitView()} /* Fit view when loaded */
          >
            <Controls />
          </ReactFlow>
        </section>
      </section>
    </main>
  )
}
