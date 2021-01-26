import { FormGroup, FormLabel, TextField } from '@material-ui/core';

const DATE_FORMAT = "DD/MM/YYYY";

export const Table = {
    columns: [
        {
          label: "Id",
          name: "id",
          options: {
            filter: false,
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
            filterType: 'textField'
           }
        },
        {
          label: "Last Name",
          name: "lastName",
          options: {
            filter: true,
            sort: true,
            filterType: 'textField'
           }
        },
        {
          label: "Date",
          name: "date",
          options: {
            filter: true,
            sort: true,
            customBodyRender: value => moment(new Date(value)).format(DATE_FORMAT),
           }
        },
        {
            label: "Phone",
            name: "phone",
            options: {
                filter: true,
                sort: true,
                filterType: 'custom',
                customFilterListOptions: {
                  render: v => {
                    if (v[0] && v[1]) {
                      return [`More than: ${v[0]}`, `Less than: ${v[1]}`];
                    } else if (v[0]) {
                      return `More than: ${v[0]}`;
                    } else if (v[1]) {
                      return `Less than: ${v[1]}`;
                    }
                    return false;
                  },
                  update: (filterList, filterPos, index) => {
                    if (filterPos === 0) {
                      filterList[index].splice(filterPos, 1, '');
                    } else if (filterPos === 1) {
                      filterList[index].splice(filterPos, 1);
                    } else if (filterPos === -1) {
                      filterList[index] = [];
                    }
      
                    return filterList;
                  },
                },
                filterOptions: {
                  logic(phone, filters) {
                    if (filters[0] && filters[1]) {
                      return phone < filters[0] || phone > filters[1];
                    } else if (filters[0]) {
                      return phone < filters[0];
                    } else if (filters[1]) {
                      return phone > filters[1];
                    }
                    return false;
                  },
                  display: (filterList, onChange, index, column) => (
                    <div>
                      <FormLabel>phone</FormLabel>
                      <FormGroup row>
                        <TextField
                          label="more"
                          value={filterList[index][0] || ''}
                          onChange={event => {
                            filterList[index][0] = event.target.value;
                            onChange(filterList[index], index, column);
                          }}
                          style={{ width: '45%', marginRight: '5%' }}
                        />
                        <TextField
                          label="less"
                          value={filterList[index][1] || ''}
                          onChange={event => {
                            filterList[index][1] = event.target.value;
                            onChange(filterList[index], index, column);
                          }}
                          style={{ width: '45%' }}
                        />
                      </FormGroup>
                    </div>
                  ),
                },
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