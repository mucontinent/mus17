import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { getItemsTypes } from "./helpers/index";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Badge } from "primereact/badge";

const App = () => {
  const [sections, setSections] = useState(getItemsTypes());
  const [selectedSection, setSelectedSection] = useState(null);
  const [items, setItems] = useState([]);
  const [monsterIDS, setMonsterIDS] = useState([365]);
  const [value1, setValue1] = useState("");

  const start = (
    <img
      alt="logo"
      src="showcase/images/logo.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height="40"
      className="mr-2"
    ></img>
  );
  const end = <InputText placeholder="Search" type="text" />;

  const onItemSectionChange = (e) => {
    setSelectedSection(e.value);
  };

  const addMonsterID = (value) => {
    if (monsterIDS.indexOf(parseInt(value)) !== -1) {
      setValue1("");
    } else {
      setMonsterIDS([...monsterIDS, parseInt(value)]);
    }
  };

  const badgeMonsterID = monsterIDS.map((id) => (
    <Badge style={{ marginLeft: 3 }} key={id} value={id}></Badge>
  ));

  return (
    <div>
      <div className="card">
        <Menubar start={start} end={end} />
        <div className="grid" style={{ marginLeft: "2%", marginTop: "3%" }}>
          <div className="col-2 col-offset-2">
            <Dropdown
              value={selectedSection}
              options={sections}
              onChange={onItemSectionChange}
              optionLabel="Name"
              placeholder="Select a Section"
            />
          </div>
          <div className="col-3" style={{ marginLeft: "-3%" }}>
            <div className="p-inputgroup">
              <InputText placeholder="Item name" />
              <span className="p-inputgroup-addon">
                <i className="pi pi-search cursor-pointer" onClick={null}></i>
              </span>
            </div>
          </div>
          <div className="col-3">
            <div className="p-inputgroup">
              <InputText
                placeholder="MonsterID"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
              />
              <span className="p-inputgroup-addon">
                <i
                  className="pi pi-plus cursor-pointer"
                  onClick={() => addMonsterID(value1)}
                ></i>
              </span>
            </div>
          </div>
          <div className="col-12 col-offset-2">
            Monster IDs: {badgeMonsterID}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
