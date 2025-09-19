import Card from "@/components/Card"
import React from "react";
import Button from "../components/Button";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
      <h1 className="text-3xl font-bold mb-6">Landing Page Buttons</h1>

      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small Rounded-sm" className="text-sm px-2 py-1 rounded-sm" />
        <Button title="Small Rounded-md" className="text-sm px-2 py-1 rounded-md" />
        <Button title="Small Rounded-full" className="text-sm px-2 py-1 rounded-full" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium Rounded-sm" className="text-base px-4 py-2 rounded-sm" />
        <Button title="Medium Rounded-md" className="text-base px-4 py-2 rounded-md" />
        <Button title="Medium Rounded-full" className="text-base px-4 py-2 rounded-full" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large Rounded-sm" className="text-lg px-6 py-3 rounded-sm" />
        <Button title="Large Rounded-md" className="text-lg px-6 py-3 rounded-md" />
        <Button title="Large Rounded-full" className="text-lg px-6 py-3 rounded-full" />
      </div>
    </main>
  );
};

export default Landing;
