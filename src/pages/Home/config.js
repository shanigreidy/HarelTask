const DATE_FORMAT = "DD/MM/YYYY";

export const Table = {
    columns: [
        {
          label: "Id",
          name: "id",
          options: {
            filter: true,
            sort: true,
            display: false
           }
        },
        {
          label: "Name",
          name: "firstName",
          options: {
            filter: true,
            sort: true,
           }
        },
        {
          label: "Last Name",
          name: "lastName",
          options: {
            filter: true,
            sort: true,
           }
        },
        {
          label: "Date",
          name: "date",
          options: {
            filter: true,
            sort: true,
            customBodyRender: value => moment(new Date(value)).format(DATE_FORMAT)
           }
        },
        {
            label: "Phone",
            name: "phone",
            options: {
                filter: true,
                sort: true,
            }
        },
    ],
    
   options: {
        search: true,
        download: false,
        print: false,
        filter: true,
        selectableRowsHideCheckboxes: true,
        rowHover: true
    }
}