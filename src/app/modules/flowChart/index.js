import React, { useCallback, useMemo } from "react";
import "@xyflow/react/dist/style.css";
import {
  Background,
  Controls,
  MiniMap,
  NodeToolbar,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { Container } from "@mui/material";
import TextNode from "./TextNode";

const FlowChartPage = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  setEdges,
  setNodes,
}) => {
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({ TextNode: TextNode }), []);

  return (
    <div
      style={{
        height: "90vh",
        marginTop: "2vh",
        width: "80vw",
        alignSelf: "center",
        display: "flex",
      }}
    >
      {/* slider which have feature like it will able to show and hide when press  */}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView="auto"
        nodeTypes={nodeTypes}
      >
        <Controls position="top-right" />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
        <NodeToolbar />
      </ReactFlow>
    </div>
  );
};

export default FlowChartPage;
