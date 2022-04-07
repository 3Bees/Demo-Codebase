import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";
// import {tableRows, cols} from '../../../config/mockData/tableData.js'
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOffIcon from '@mui/icons-material/EditOff';
import Model from './../Modal/Modal.js'


const tableRows = [
  {
    id: 1,
    name: "ishtaq",
    action: "action",
  },
  {
    id: 2,
    name: "asad",
    action: "action",
  },
  {
    id: 3,
    name: "aaa",
    action: "action",
  },
  {
    id: 4,
    name: "bbb",
    action: "action",
  },
  {
    id: 5,
    name: "ccc",
    action: "action",
  },
];
const cols = [
  {
    field: "id",
    headerName: "units",
    // width: 200,
    flex: 0.4
  },
  {
    field: "name",
    headerName: "unit name",
    // width: 200,
    flex: 1
  },
  {
    field: "action",
    headerName: "action",
    renderCell: (params) => (
      <>
      <IconButton aria-label="delete" color="primary"  >
        <EditOffIcon />
      </IconButton>
         <IconButton aria-label="delete" style={{color:"red"}}>
        <DeleteIcon />
      </IconButton>
        
      </>
    ),
    // width: 200,
    flex: 0.4
  },
];

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
}));

const DataGridWrapper = styled(DataGrid)(({ theme }) => ({}));

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />
    </Box>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const Table = (props) => {
  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState(tableRows);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = tableRows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(tableRows);
  }, [tableRows]);
  return (
    <Wrapper>
      <Model/>
      <DataGrid
        components={{
          Toolbar:
            props.quickSearchToolbar === true ? QuickSearchToolbar : null,
        }}
        autoHeight={props.autoHeight}
        checkboxSelection={props.checkboxSelection}
        density={props.density}
        disableColumnMenu={props.disableColumnMenu}
        disableVirtualization={props.disableVirtualization}
        headerHeight={props.headerHeight}
        hideFooter={props.hideFooter}
        hideFooterPagination={props.hideFooterPagination}
        loading={props.loading}
        rows={rows}
        columns={cols}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
      />
    </Wrapper>
  );
};

export default Table;

Table.propTypes = {
  quickSearchToolbar: PropTypes.bool,
  autoHeight: PropTypes.bool,
  checkboxSelection: PropTypes.bool,
  density: PropTypes.string,
  disableColumnMenu: PropTypes.bool,
  disableVirtualization: PropTypes.bool,
  headerHeight: PropTypes.number,
  hideFooter: PropTypes.bool,
  hideFooterPagination: PropTypes.bool,
  loading: PropTypes.bool,
};
Table.defaultProps = {
  quickSearchToolbar: true,
  autoHeight: true,
  checkboxSelection: false,
  density: "standard", // standard, 'comfortable' 'compact'
  disableColumnMenu: false,
  disableVirtualization: false,
  headerHeight: 56,
  hideFooter: false,
  hideFooterPagination: false,
  loading: false,
};
