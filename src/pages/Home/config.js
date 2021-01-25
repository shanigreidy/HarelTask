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
            sortCompare: (order = 'desc') => {
                return (obj1, obj2) => {
                  return (val1 - val2) * (order === 'asc' ? 1 : -1);
                };
              }
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
        responsive: 'vertical',
        customSort: (data, colIndex, order, meta) => {
            return data.sort((a, b) => {
              return (a.data[colIndex].length < b.data[colIndex].length ? -1: 1 ) * (order === 'desc' ? 1 : -1);
            });
        }
    }
}