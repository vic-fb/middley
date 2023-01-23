import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function CustomBreadcrumb({ pages }) {
  return (
    <Breadcrumb separator={<ChevronRightIcon color="gray.500" />} py="4">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/" color="#DCDCDC">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {pages.map((page) => (
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={page.path} color="#DCDCDC">
            {page.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}

    </Breadcrumb>
  );
}

export default CustomBreadcrumb;
