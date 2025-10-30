import { useState } from "react";

import { Win95Button } from "./components/Form/Button/Button";
import { Win95Input } from "./components/Form/Input/Input";
import { Win95List } from "./components/List/List";
import { Win95ProgressBar } from "./components/ProgressBar/ProgressBar";
import { Hero } from "./components/Hero/Hero";
import { Form } from "./components/Form/Form";
import { TableStriped } from "./components/Table/Table";
import { Navbar } from "./components/Navbar/Navbar";
import { Win95Card } from "./components/Card/Card";

export default function App() {
  const [selected1, setSelected1] = useState(0);
  const [selected2, setSelected2] = useState(0);

  return (
    // <div className="min-h-screen bg-[#008080] flex items-center justify-center p-8">
    <div className="min-h-screen bg-[#008080] p-8">
      <Navbar />
      <Hero />

      <Win95Card title="Active window" state="active" className="my-3 md:mr-3">
        <Win95ProgressBar type="solid" className="mb-3" />
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Win95Button onClick={() => alert("OK")}>OK</Win95Button>
            <Win95Button onClick={() => alert("Cancel")}>Cancel</Win95Button>
            <Win95Button onClick={() => alert("Help")}>Help</Win95Button>
          </div>

          <div className="flex items-center gap-4">
            <Win95Input placeholder="Type something..." />
          </div>

          <div>
            <Win95List
              items={["File 1.txt", "Document.doc", "Photo.jpg"]}
              selectedIndex={selected1}
              onSelect={setSelected1}
            />
          </div>
        </div>
      </Win95Card>

      <Win95Card title="Inactive window" state="inactive">
        <Win95ProgressBar type="striped" className="mb-3" />
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Win95Button onClick={() => alert("OK")}>OK</Win95Button>
            <Win95Button onClick={() => alert("Cancel")}>Cancel</Win95Button>
            <Win95Button onClick={() => alert("Help")}>Help</Win95Button>
          </div>

          <div className="flex items-center gap-4">
            <Win95Input placeholder="Type something..." />
          </div>

          <div>
            <Win95List
              items={["File 2.txt", "Document 2.doc", "Photo 2.jpg"]}
              selectedIndex={selected2}
              onSelect={setSelected2}
            />
          </div>
        </div>
      </Win95Card>

      <TableStriped className="mb-3" />

      <Win95Card title="Contact us" state="active">
        <Form />
      </Win95Card>
    </div>
  );
}
