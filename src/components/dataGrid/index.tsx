import { useEffect, useState } from "react"
import {
  Box,
  LinearProgress,
  Pagination,
  TablePaginationProps,
  useTheme,
} from "@mui/material"
import { DataGrid, GridPagination } from "@mui/x-data-grid"
import { styled } from "@mui/material/styles"

const CustomTable = ({
  rows = [],
  columns = [],
  columnGroupingModel = [],
  checkboxState = false,
  columnGroupingState = false,
  style,
  customHeight,
  initialPageSize = 10,
  page = 0,
  allRowCount = 0,
  dataLoading = false,
  multiSelect = true,
  hidePagination = false,
  density = "standard",
  selectedRows,
  paginationMode,
  onPageChange,
  setSelectedRows,
  setInitialPageSize,
}: {
  rows: any
  columns: any
  columnGroupingModel?: any
  checkboxState?: boolean
  columnGroupingState?: boolean
  allRowCount: number
  paginationMode: "server" | "client"
  style?: any
  customHeight?: string
  initialPageSize?: number
  page?: number
  dataLoading?: boolean
  density?: any
  multiSelect?: boolean
  hidePagination?: boolean
  selectedRows?: number[]
  setInitialPageSize?: (pageSize: number) => void
  onPageChange: (page: number) => void
  setSelectedRows?: (e: any) => void
}) => {

  const [paginationModel, setPaginationModel] = useState<any>({
    page: page,
    pageSize: initialPageSize,
  })

  const StyledGridOverlay = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    "& .ant-empty-img-1": {
      fill: "#D0D5DD",
    },
    "& .ant-empty-img-2": {
      fill:"#98A2B3",
    },
    "& .ant-empty-img-3": {
      fill: "#EAECF0",
    },
    "& .ant-empty-img-4": {
      fill:"#FFFFFF",
    },
    "& .ant-empty-img-5": {
      fillOpacity:  "0.8" ,
      fill: "#475467",
    },
  }))

  function CustomNoRowsOverlay() {
    return (
      <StyledGridOverlay>
        <svg
          width="120"
          height="100"
          viewBox="0 0 184 152"
          aria-hidden
          focusable="false">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(24 31.67)">
              <ellipse
                className="ant-empty-img-5"
                cx="67.797"
                cy="106.89"
                rx="67.797"
                ry="12.668"
              />
              <path
                className="ant-empty-img-1"
                d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
              />
              <path
                className="ant-empty-img-2"
                d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
              />
              <path
                className="ant-empty-img-3"
                d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
              />
            </g>
            <path
              className="ant-empty-img-3"
              d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
            />
            <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
              <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
              <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
            </g>
          </g>
        </svg>
        <Box sx={{ mt: 1 }}>No Rows</Box>
      </StyledGridOverlay>
    )
  }

  function CustomPaginationComponent({
    page,
    onPageChange,
    className,
    count,
    rowsPerPage,
  }: Pick<
    TablePaginationProps,
    "page" | "onPageChange" | "className" | "count" | "rowsPerPage"
  >) {
    const pageCount = Math.ceil(count / rowsPerPage)

    return (
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        className={className}
        count={pageCount}
        page={page + 1}
        siblingCount={0}
        onChange={(event, newPage) => {
          onPageChange(event as any, newPage - 1)
        }}
      />
    )
  }

  function CustomPagination(props: any) {
    return (
      <GridPagination ActionsComponent={CustomPaginationComponent} {...props} />
    )
  }

  const handlePageChange = (newPage: number) => {
    setPaginationModel((prev: any) => ({ ...prev, page: newPage }))
    onPageChange(newPage)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPaginationModel((prev: any) => ({ ...prev, pageSize: newPageSize }))
    if (setInitialPageSize) {
      setInitialPageSize(newPageSize)
    }
  }

  const handleSelectionChange = (newSelection: any) => {
    if (multiSelect) {
      if (setSelectedRows) {
        setSelectedRows(newSelection)
      }
    } else {
      if (setSelectedRows) {
        setSelectedRows(newSelection[0] ? [newSelection[0]] : [])
      }
    }
  }

  useEffect(() => {
    setPaginationModel((prev: any) => ({ ...prev, page }))
  }, [page])

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        density={density}
        pagination
        paginationMode={paginationMode}
        rowCount={allRowCount}
        pageSizeOptions={[10, 20, 30, 50]}
        experimentalFeatures={{ columnGrouping: columnGroupingState }}
        columnGroupingModel={columnGroupingModel}
        disableRowSelectionOnClick={true}
        checkboxSelection={checkboxState}
        loading={dataLoading}
        disableColumnMenu={true}
        hideFooterPagination={hidePagination}
        rowSelectionModel={selectedRows}
        onRowSelectionModelChange={(e) => {
          if (setSelectedRows) {
            handleSelectionChange(e)
          }
        }}
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          loadingOverlay: LinearProgress,
          pagination: CustomPagination,
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={(newPageModel) => {
          handlePageChange(newPageModel.page)
          handlePageSizeChange(newPageModel.pageSize)
        }}
        initialState={{
          pagination: {
            paginationModel: {
              page: paginationModel.page,
              pageSize: paginationModel.pageSize,
            },
          },
        }}
        sx={{
          ...style,
          height: customHeight || "632px",
          width: "100%",
          fontSize:16,
          borderRadius:"10px",
          "& .my-super-theme--naming-group-01": {
            backgroundColor: "#3385FF",
          },
          "& .my-super-theme--naming-group-02": {
            backgroundColor: "#3385FF",
          },
          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
            borderRight: `1px solid #D0D5DD`,
            alignItems: "center",
            color: "#475467",
            fontWeight: 400,
          },
          "& .MuiDataGrid-columnHeader:last-of-type": {
            borderRight: "none",
          },
          "& .MuiDataGrid-cell:last-of-type": {
            borderRight: "none"
          },
          "& .MuiDataGrid-row": {
            "&:nth-of-type(odd)": {
              backgroundColor: "#E6F0FF",
            },
            "&:last-child .MuiDataGrid-cell": {
              borderBottom: "none",
            },
          },
          "& .MuiDataGrid-selectedRowCount": {
            display: "none",
          },
          "& .MuiTablePagination-root": {
            marginLeft: "auto",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: "center",
            fontSize: 16,
            color: "#0041A1",
            fontweight: 500,
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontweight: 500,
          },
          "& .MuiSvgIcon-root": {
            width: "16px",
            height: "16px",
            borderRadius: "4px",
          },
          "& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus-within":
            {
              outline: "none",
            },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#F9FAFB",
          },
          "& .MuiSelect-select": {
            color: "#98A2B3",
            fontSize:14
          },
        }}
      />
    </>
  )
}

export default CustomTable
