import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";
import { ChakraProvider, Spacer } from "@chakra-ui/react";

import Title from "./component/Title";
import ResultTable from "./component/ResultTable";

export default function App() {
  const [table, setTable] = useState(null);

  const handleForce = (data, fileInfo) => {
    setTable(data);
  };

  const papaparseOptions = {
    header: false,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_")
  };

  return (
    <div className="App">
      <ChakraProvider>
        <Title />
        <CSVReader
          cssClass="react-csv-input"
          onFileLoaded={handleForce}
          parserOptions={papaparseOptions}
        />
        {table && <ResultTable table={table} />}
      </ChakraProvider>
    </div>
  );
}
