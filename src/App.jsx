import { useState } from "react";
import AgentForm from "./omponents/AgentForm";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-fuchsia-200 flex flex-col items-center justify-center py-22">
     
     <button
        onClick={() => setIsOpen(true)}
        className="bg-orange-600 text-white px-4 py-2 rounded"
      >
        დაამატე აგენტი
      </button>

      {isOpen && (
        <AgentForm onClose={() => setIsOpen(false)} />
      )}

    </div>
  );
}
