import * as React from "react"
import {
    Box,
    Text,
    VStack,
    Grid,
} from "@chakra-ui/react";

export const ResultsList = () => {
    return (
        <Box textAlign="center" justifyContent="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={5}>
                    <Text fontSize='4xl'>
                        Welcome to the Student Result Management System
                    </Text>
                </VStack>
            </Grid>
        </Box>
    );
}
