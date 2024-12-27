import React, { useState } from "react";
import { Meta } from "@storybook/react";
import Progress, { ProgressProps } from "./";

export default {
  title: "Components/Progress",
  component: Progress,
} as Meta;

export const Default = (args: ProgressProps) => <Progress {...args} />;
Default.args = {
  value: 50,
};

export const Interactive = (args: ProgressProps) => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="space-y-2">
      <Progress {...args} value={progress} />
      <button
        onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Increase Progress
      </button>
      <button
        onClick={() => setProgress(0)}
        className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
      >
        Reset
      </button>
    </div>
  );
};
Interactive.args = {
  value: 0, // Starting at 0
  indeterminate: false,
};
