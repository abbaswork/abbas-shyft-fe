import * as React from "react"
import {
    Box,
    Text,
    VStack,
    Grid,
} from "@chakra-ui/react";
import StudentForm from "../components/forms/StudentForm";


export const NewStudents = () => {
    return (
        <Box textAlign="center" justifyContent="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={5}>
                    <Text fontSize='4xl'>
                        Create Students Page
                    </Text>
                    <StudentForm/>
                </VStack>
            </Grid>
        </Box>
    );
}
