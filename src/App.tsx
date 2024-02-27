import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import NavBar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/Home";
import { CreateStudentsPage } from "./pages/NewStudents";
import { StudentsList } from "./pages/StudentsList";

export const App = () => {

  //setup links
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Add New Students', href: '/new-students' },
    { label: 'Students List', href: '/students-list' },
    { label: 'Add New Courses', href: '/new-courses' },
    { label: 'Courses List', href: '/courses-list' },
    { label: 'Add New Results', href: '/new-results' },
    { label: 'Results List', href: '/results-list' }
  ];

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <NavBar links={links} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-students" element={<CreateStudentsPage />} />
          <Route path="/students-list" element={<StudentsList />} />
          <Route path="/new-courses" element={<CreateStudentsPage />} />
          <Route path="/courses-list" element={<StudentsList />} />
          <Route path="/new-results" element={<CreateStudentsPage />} />
          <Route path="/results-list" element={<StudentsList />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}
