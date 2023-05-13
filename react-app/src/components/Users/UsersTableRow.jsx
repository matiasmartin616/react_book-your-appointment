import {
  Button,
  Td,
  Tr
} from '@chakra-ui/react'
import React from 'react'
import { DeleteIcon } from '@chakra-ui/icons'

function UsersTableRow (props) {
  const { name, surname, email, id } = props.data
  const { onDelete } = props

  const handleDeleteClick = () => {
    onDelete(id)
  }

  return (
    <Tr>
      <Td>
        {name}
      </Td>
      <Td>
        {surname}
      </Td>
      <Td>
        {email}
      </Td>
      <Td>
      <Button colorScheme='red' variant='ghost' onClick={handleDeleteClick}><DeleteIcon /></Button>
      </Td>
    </Tr>
  )
}

export default UsersTableRow
