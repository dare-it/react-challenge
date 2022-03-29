import { Box, MenuItem } from '@mui/material';
import { formInputs } from 'data';
import { useAddBudget, useCategories } from 'hooks';
import * as PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { CategoryCell, FormWrapper, Input, Modal, Select } from 'ui';
import { formatDollarsToCents } from 'utils';

const defaultValues = {
  amountValue: '',
  categoryValue: '',
};

const generateSelectCategories = (categoryList) => {
  if (categoryList.length > 1) {
    categoryList.sort((categoryA, categoryB) => categoryA.id - categoryB.id);
  }

  return categoryList.map((category) => (
    <MenuItem value={category.id} key={category.id}>
      <CategoryCell name={category.name} color={category.color} />
    </MenuItem>
  ));
};

const getRequestBody = ({ formData }) => ({
  amountInCents: formatDollarsToCents(formData.amountValue),
  categoryId: formData.categoryValue,
});

export const AddNewBudgetRecordModal = ({ open, onClose }) => {
  const { data: categoriesList } = useCategories({ unlinkedToBudget: true });
  const addBudgetMutation = useAddBudget();
  const { handleSubmit, control, formState, reset } = useForm({
    defaultValues,
    mode: 'onChange',
  });

  const modalTitle = 'Zdefiniuj budżet';
  const areLeftCategories = categoriesList && categoriesList.length > 0;

  const onSubmit = (formData) => {
    const bodyRequest = getRequestBody({ formData });
    addBudgetMutation.mutate(bodyRequest);
    reset(defaultValues);
    onClose();
  };

  const handleClose = () => {
    reset(defaultValues);
    onClose();
  };

  return (
    <Modal
      title={modalTitle}
      open={open}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
      canSubmit={areLeftCategories ? formState.isValid : false}
    >
      <>
        {categoriesList && categoriesList.length > 0 && (
          <FormWrapper>
            <>
              <Input
                elementName={formInputs.amount.elementName}
                control={control}
                label={formInputs.amount.label}
                validationRules={formInputs.amount.validationRules}
                type={'number'}
              />
              <Select
                elementName={formInputs.category.elementName}
                control={control}
                label={formInputs.category.label}
                labelId={formInputs.category.labelId}
                menuItems={generateSelectCategories(categoriesList)}
                validationRules={formInputs.category.validationRules}
              />
            </>
          </FormWrapper>
        )}
        {categoriesList && categoriesList.length === 0 && (
          <Box>Ustalono budżet dla wszystkich zdefiniowanych kategorii</Box>
        )}
      </>
    </Modal>
  );
};

AddNewBudgetRecordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
