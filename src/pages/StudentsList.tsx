import * as React from "react"
import {
    Box,
    Text,
    VStack,
    Grid,
} from "@chakra-ui/react";
import Table, { Item } from "../components/table/StudentTable";


export const StudentsList = () => {

    //setup table
    const items: Item[] = [
        { id: 1, firstName: "John", familyName: "Smith", dob: "12/24/1999" , email: "js@google.com"},
        { id: 2, firstName: "John", familyName: "Die", dob: "11/11/2001", email: "jd@amazon.com" },
    ];

    return (
        <Box textAlign="center" justifyContent="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={5}>
                    <Text fontSize='4xl'>
                        Welcome to the Student Result Management System
                    </Text>
                    <Table items={items} />
                </VStack>
            </Grid>
        </Box>
    );
}
