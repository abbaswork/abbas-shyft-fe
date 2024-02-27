import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export interface Item {
    id: number;
    firstName: string;
    familyName: string;
    dob: string;
    email: string;
}

const TableComponent: React.FC<{ items: (Item)[] }> = ({ items }) => {

    //TODO: setup based on data synced
    const [tableData, setTableData] = useState(items);

    //TODO: api req to delete row from backend
    const handleDelete = (id: number) => {
        const updatedData = tableData.filter((item) => item.id !== id);
        setTableData(updatedData);
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Name and Family Name</Th>
                    <Th>DOB</Th>
                    <Th isNumeric>Delete</Th>
                </Tr>
            </Thead>
            <Tbody>
                {tableData.map((item) => (
                    <Tr key={item.id}>
                        <Td>{item.id}</Td>
                        <Td>{item.firstName + " " + item.familyName}</Td>
                        <Td>{item.dob}</Td>
                        <Td>{item.email}</Td>
                        <Td isNumeric>
                            <IconButton
                                icon={<DeleteIcon />}
                                variant="ghost"
                                onClick={() => handleDelete(item.id)} aria-label={''}
                            />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default TableComponent;
