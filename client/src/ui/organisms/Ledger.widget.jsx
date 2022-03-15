import { ActionHeader, Card } from 'ui';

export const LedgerWidget = () => (
  <Card
    title={
      <ActionHeader
        variant={'h1'}
        title="Portfel"
        // eslint-disable-next-line react/jsx-no-useless-fragment
        renderActions={() => <></>}
      />
    }
  />
);
