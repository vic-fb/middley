import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function CustomBreadcrumb({ pages }) {
  return (
    <Breadcrumb separator={<ChevronRightIcon />} py="4">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {pages.map((page) => (
        <BreadcrumbItem key={page.name}>
          <BreadcrumbLink as={Link} to={page.path}>
            {page.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}

    </Breadcrumb>
  );
}

export default CustomBreadcrumb;
