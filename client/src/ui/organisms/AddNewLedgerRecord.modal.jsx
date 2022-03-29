import { MenuItem } from '@mui/material';
import { formInputs } from 'data';
import { useAddLedger, useCategories } from 'hooks';
import * as PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { CategoryCell, FormWrapper, Input, Modal, Select } from 'ui';
import { formatDollarsToCents } from 'utils';

const defaultValues = {
  nameValue: '',
  amountValue: '',
  categoryValue: '',
};

const generateSelectCategories = (categoryList) => {
  categoryList.sort((categoryA, categoryB) => categoryA.id - categoryB.id);
  return categoryList.map((category) => (
    <MenuItem value={category.id} key={category.id}>
      <CategoryCell name={category.name} color={category.color} />
    </MenuItem>
  ));
};

const getRequestBody = ({ type, formData }) => ({
  mode: type,
  title: formData.nameValue,
  amountInCents: formatDollarsToCents(formData.amountValue),
  categoryId: type === 'EXPENSE' ? formData.categoryValue : null,
});

export const AddNewLedgerRecordModal = ({ type, open, onClose }) => {
  const { data: categoriesList } = useCategories({ unlinkedToBudget: false });
  const addLedgerMutation = useAddLedger();
  const { handleSubmit, control, formState, reset } = useForm({
    defaultValues,
    mode: 'all',
  });

  const modalTitle = type === 'INCOME' ? 'Dodaj wpływ' : 'Dodaj wydatek';

  const onSubmit = (formData) => {
    const bodyRequest = getRequestBody({ type, formData });
    addLedgerMutation.mutate(bodyRequest);
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
      canSubmit={formState.isValid}
    >
      <FormWrapper>
        <>
          <Input
            elementName={formInputs.name.elementName}
            control={control}
            label={formInputs.name.label}
            validationRules={formInputs.name.validationRules}
            type={'text'}
          />
          <Input
            elementName={formInputs.amount.elementName}
            control={control}
            label={formInputs.amount.label}
            validationRules={formInputs.amount.validationRules}
            type={'number'}
          />
          {type === 'EXPENSE' && (
            <Select
              elementName={formInputs.category.elementName}
              control={control}
              label={formInputs.category.label}
              labelId={formInputs.category.labelId}
              menuItems={generateSelectCategories(categoriesList)}
              validationRules={formInputs.category.validationRules}
            />
          )}
        </>
      </FormWrapper>
    </Modal>
  );
};

AddNewLedgerRecordModal.propTypes = {
  type: PropTypes.oneOf(['INCOME', 'EXPENSE']),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
