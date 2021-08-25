import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Button,
} from "@material-ui/core";
import { TableTypography, TableHeader, Container, TableField } from "./styles";
import Loading from "../Loading";

const DataViewer = ({ dataColumns, data, loading = false, actions }) => {
  // const { data, loading, error } = posts;
  // columns = Object.keys(data[0]).filter((key) => key !== "id");

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {dataColumns.map((key) => (
                <TableHeader key={key} align={"center"}>
                  <TableTypography>{key}</TableTypography>
                </TableHeader>
              ))}
              <TableHeader>
                <TableTypography>Action</TableTypography>
              </TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ id, ...values }) => (
              <TableRow key={id}>
                {dataColumns.map((key) => (
                  <TableField key={key}>{values[key]}</TableField>
                ))}
                {actions.map((action) => {
                  const label = Object.keys(action);
                  return (
                    <TableField key={label}>
                      <Button onClick={() => action[label](id)}>{label}</Button>
                    </TableField>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Container>
  );
};

export default DataViewer;
