import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";

const App = () => {
  const [selectedForm, setSelectedForm] = useState("rk");

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ügyfélszolgálati Admin Panel</h1>

      <Tabs defaultValue="rk" onValueChange={(val) => setSelectedForm(val)}>
        <TabsList>
          <TabsTrigger value="rk">RK Master</TabsTrigger>
          <TabsTrigger value="rkk">RKK Master</TabsTrigger>
          <TabsTrigger value="uszi">Ügyfélszolgálat Master</TabsTrigger>
          <TabsTrigger value="av">Alvállalkozó Master</TabsTrigger>
          <TabsTrigger value="link">Ügyfélszolgálat Létrehozása</TabsTrigger>
        </TabsList>

        <TabsContent value="rk">
          <FormRK />
        </TabsContent>
        <TabsContent value="rkk">
          <FormRKK />
        </TabsContent>
        <TabsContent value="uszi">
          <FormUSZI />
        </TabsContent>
        <TabsContent value="av">
          <FormAV />
        </TabsContent>
        <TabsContent value="link">
          <FormLink />
        </TabsContent>
      </Tabs>
    </main>
  );
};

// ✅ ALL OTHER COMPONENTS MUST COME AFTER `App`, BUT BEFORE `export`

const FormRK = () => {
  const [formData, setFormData] = useState({
    cegszam: "",
    rkId: "",
    regioKod: "",
    rkNev: "",
    varos: "",
    iranyitoszam: "",
    cim: "",
    statusz: "",
    kezeltTelepules: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting RK Master Data:", formData);
    alert("Submitted to console log.");
  };

  return (
    <Card className="mt-4">
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">RK Master Adatlap</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {[
            { label: "Cégszám", key: "cegszam" },
            { label: "RK ID", key: "rkId" },
            { label: "Régió koordinátor kódja", key: "regioKod" },
            { label: "RK név", key: "rkNev" },
            { label: "Város", key: "varos" },
            { label: "Irányítószám", key: "iranyitoszam" },
            { label: "Cím", key: "cim" },
            { label: "Státusz", key: "statusz" },
            { label: "Kezelt település", key: "kezeltTelepules" },
          ].map(({ label, key }) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium">{label}</label>
              <input
                type="text"
                name={key}
                value={(formData as any)[key]}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md"
              />
            </div>
          ))}

          <div className="col-span-2 mt-4">
            <Button type="submit">Mentés</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const FormRKK = () => (
  <Card className="mt-4">
    <CardContent className="p-4">RKK Master form goes here</CardContent>
  </Card>
);

const FormUSZI = () => (
  <Card className="mt-4">
    <CardContent className="p-4">Ügyfélszolgálat Master form goes here</CardContent>
  </Card>
);

const FormAV = () => (
  <Card className="mt-4">
    <CardContent className="p-4">Alvállalkozó Master form goes here</CardContent>
  </Card>
);

const FormLink = () => (
  <Card className="mt-4">
    <CardContent className="p-4">Ügyfélszolgálat összerendelés form goes here</CardContent>
  </Card>
);

// ✅ EXPORT MUST BE LAST AND OUTSIDE ANY BLOCK
export default App;
