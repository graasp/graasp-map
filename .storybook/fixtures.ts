export const MOCK_USE_SUGGESTIONS = ({ address }: { address: string }) => {
  if (address) {
    return {
      data: [
        { display_name: 'suggestion 1' },
        { display_name: 'suggestion 2' },
        { display_name: 'suggestion 3' },
      ],
    };
  }
  return { data: undefined };
};
