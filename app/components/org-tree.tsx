"use client";

import * as React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

export type OrgTreeNode = {
  /** Anything renderable: text, <Image>, your Card, etc. */
  label: React.ReactNode;
  children?: OrgTreeNode[];
  /** Optional stable key if you have one */
  key?: React.Key;
};

type OrgTreeProps = {
  data: OrgTreeNode;

  /** Connector line styling */
  lineWidth?: string;         // e.g. "2px"
  lineColor?: string;         // e.g. "rgba(255,255,255,0.2)"
  lineBorderRadius?: string;  // e.g. "8px"

  /**
   * Optional wrapper around every label (applied uniformly).
   * Useful if you want a default chrome (rounded, border, etc.)
   * but still pass any content as the label.
   */
  nodeWrapperClassName?: string;

  /**
   * For full control, provide a function to wrap each label.
   * Runs after nodeWrapperClassName; return whatever you want.
   */
  wrapLabel?: (label: React.ReactNode) => React.ReactNode;
};

function renderNode(
  node: OrgTreeNode,
  wrapLabel?: (l: React.ReactNode) => React.ReactNode,
  nodeWrapperClassName?: string
): React.ReactElement {
  const baseWrapped = nodeWrapperClassName
    ? <div className={nodeWrapperClassName}>{node.label}</div>
    : <>{node.label}</>;

  const finalLabel = wrapLabel ? wrapLabel(baseWrapped) : baseWrapped;

  if (!node.children?.length) {
    return <TreeNode key={node.key} label={finalLabel} />;
  }

  return (
    <TreeNode key={node.key} label={finalLabel}>
      {node.children.map((child, i) =>
        renderNode(
          { ...child, key: child.key ?? i },
          wrapLabel,
          nodeWrapperClassName
        )
      )}
    </TreeNode>
  );
}

export default function OrgTree({
  data,
  lineWidth = "2px",
  lineColor = "rgba(255,255,255,0.2)",
  lineBorderRadius = "8px",
  nodeWrapperClassName,
  wrapLabel,
}: OrgTreeProps) {
  const rootWrapped = nodeWrapperClassName
    ? <div className={nodeWrapperClassName}>{data.label}</div>
    : <>{data.label}</>;

  const rootLabel = wrapLabel ? wrapLabel(rootWrapped) : rootWrapped;

  return (
    <div className="w-full overflow-auto py-6">
      <div className="inline-block">
        <Tree
          lineWidth={lineWidth}
          lineColor={lineColor}
          lineBorderRadius={lineBorderRadius}
          label={rootLabel}
        >
          {data.children?.map((c, i) =>
            renderNode({ ...c, key: c.key ?? i }, wrapLabel, nodeWrapperClassName)
          )}
        </Tree> 
      </div>
    </div>
  );
}
