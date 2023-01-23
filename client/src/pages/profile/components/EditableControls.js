import { ButtonGroup, IconButton, useEditableControls } from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
  );
}

export default EditableControls;
