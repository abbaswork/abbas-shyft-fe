import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface NavBarProps {
  links: {
    label: string;
    href: string;
  }[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <Flex
      as="nav"
      bg="gray.800"
      color="white"
      p={4}
      justifyContent="flex-start"
      align="center"
    >
      <Stack direction="row" spacing={6}>
        {links.map((link) => (
          <Link key={link.href} to={link.href}>
            {link.label}
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};

export default NavBar;
