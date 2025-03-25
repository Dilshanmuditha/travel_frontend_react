import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import CustomTable from "../../components/dataGrid";
import OrderDetails from "./orderDetails";

function DriverPage() {
  const [tablePage, setTablePage] = useState(1);
  const [tableAllRowCount, setTableAllRowCount] = useState(0);
  const [tableRowPerPage, setTableRowPerPage] = useState(10);
  const [tableRow, setTableRow] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedID, setSelectedID] = useState();
  const [resetFilter, setResetFilter] = useState(false);
  const [isFilterPopup, setIsFilterPopup] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [orderDetailsPopup, setOrderDetailsPopup] = useState(false)

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Booking ID",
      align: "center",
      flex: 1,
    },
    {
      field: "start_date",
      headerName: "Start Date",
      flex: 1,
      align: "center",
      renderCell: (params) => {
        return (
          <Typography
            variant="body2"
            color="#475467"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              cursor: "pointer",
              textAlign: "center",
              textDecorationLine: "underline",
            }}
            onClick={() => {
              setSelectedID(params.row.id);
              setOrderDetailsPopup(true)
            }}
          >
           
            {
                params.value
              // dayjs(params.value).utc().format("MM/DD/YYYY")
            }
          </Typography>
        );
      },
    },
    {
      field: "end_date",
      headerName: "End Date",
      flex: 1,
      align: "center",
      renderCell: (params) => {
        return (
          <Typography
            variant="body2"
            color="#475467"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              cursor: "pointer",
              textAlign: "center",
              textDecorationLine: "underline",
            }}
            onClick={() => {
              setSelectedID(params.row.id);
              // handleOpenSessionDetailsPopup()
            }}
          >
            {
                params.value
              // dayjs(params.value).utc().format("MM/DD/YYYY")
              
            }
          </Typography>
        );
      },
    },
    {
      field: "location",
      headerName: "Location",
      align: "center",
      flex: 1,
    },
  ];

  const sampleRow = [
    {
      id: 1,
      start_date: "13/02/2025",
      end_date: "16/02/2025",
      location: "Colombo",
    },
    {
      id: 2,
      start_date: "13/02/2025",
      end_date: "16/02/2025",
      location: "Gampaha",
    },
    {
      id: 3,
      start_date: "13/02/2025",
      end_date: "16/02/2025",
      location: "Gampaha",
    },
  ];

  return (
    <>
      <Box sx={{ width: "100%", height: "100%",  margin:"100px 0px 50px 0px",justifyContent:"center", display:"flex" }}>
        {/* table */}
        <div style={{ width: "90%", height: "60%" }}>
          <CustomTable
            rows={sampleRow}
            columns={columns}
            checkboxState={false}
            paginationMode="server"
            columnGroupingState={false}
            columnGroupingModel={[]}
            allRowCount={tableAllRowCount}
            onPageChange={() => {}}
            setInitialPageSize={setTableRowPerPage}
            dataLoading={loading}
            page={tablePage - 1}
            initialPageSize={tableRowPerPage}
          />
        </div>
      </Box>
      {orderDetailsPopup&&(
        <OrderDetails isPopupOpen={orderDetailsPopup} handleClosePopup={()=>{setOrderDetailsPopup(false)}} selectedID={selectedID} pageId={1}/>
      )}
    </>
  );
}

export default DriverPage;
